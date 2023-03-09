import { withIronSessionApiRoute } from "iron-session/next";
import logger from "@/logger";
import { dbquery } from "@/lib/db";
import { hashCrypto, validateUser } from "@/lib/hs";
import { ironOptions } from "@/lib/ironConfig";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req, res) {
  try {
    const { email, password } = await req.body.data;
    const ipAddress =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];

    logger.info(
      `${req.method} ${req.url} from ${ipAddress} using ${userAgent}`
    );

    const encryptedPassword = await hashCrypto(password);

    const query =
      "SELECT user_id, voucher_id, first_name, last_name, email, password FROM users WHERE email = ?";
    const values = [email];
    const [result] = await dbquery({ query, values });

    if (!result) {
      logger.error(`Invalid User from ${ipAddress} using ${userAgent}`);
      return res
        .status(401)
        .json({ message: "Incorrect Username or Password" });
    }

    const passwordMatch = await validateUser(
      encryptedPassword,
      result.password
    );
    if (!passwordMatch) {
      logger.error(`Invalid User from ${ipAddress} using ${userAgent}`);
      return res
        .status(401)
        .json({ message: "Incorrect Username or Password" });
    }

    const sessionUser = {
      loginID: result.user_id,
      email: email,
      isLoggedIn: true,
      user: `${result.first_name} ${result.last_name}`,
    };
    req.session.vid = { vID: result.voucher_id };
    req.session.user = sessionUser;
    await req.session.save();

    logger.info(
      `User Successfully Logged in from ${ipAddress} using ${userAgent}`
    );
    return res.json(sessionUser);
  } catch (error) {
    logger.error(
      `Error in login from ${ipAddress} using ${userAgent}: ${error.message}`
    );
    return res.status(500).json({ message: "Something went wrong" });
  }
}

// import { dbquery } from "@/lib/db";
// import { hashCrypto, validateUser } from "@/lib/hs";
// import logger from "@/logger";
// import { ironOptions } from "@/lib/ironConfig";

// const loginHandler = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const ipAddress =
//       req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//     const userAgent = req.headers["user-agent"];

//     logger.info(
//       `${req.method} ${req.url} from ${ipAddress} using ${userAgent}`
//     );

//     const encryptedPassword = await hashCrypto(password);

//     const query =
//       "SELECT u.user_id, u.first_name, u.last_name, u.email, u.password, v.customer_id FROM users u INNER JOIN voucherpay v ON u.email = v.email WHERE u.email = ?";
//     const values = [email];
//     const [result] = await dbquery({ query, values });

//     if (!result) {
//       logger.error(`Invalid User from ${ipAddress} using ${userAgent}`);
//       return res
//         .status(401)
//         .json({ message: "Incorrect Username or Password" });
//     }

//     const passwordMatch = await validateUser(
//       encryptedPassword,
//       result.password
//     );
//     if (!passwordMatch) {
//       logger.error(`Invalid User from ${ipAddress} using ${userAgent}`);
//       return res
//         .status(401)
//         .json({ message: "Incorrect Username or Password" });
//     }

//     const sessionUser = {
//       loginID: result.user_id,
//       email: email,
//       isLoggedIn: true,
//       user: `${result.first_name} ${result.last_name}`,
//     };

//     req.session.user = sessionUser;
//     await req.session.save();

//     logger.info(
//       `User Successfully Logged in from ${ipAddress} using ${userAgent}`
//     );
//     return res.json(sessionUser);
//   } catch (error) {
//     logger.error(
//       `Error in login from ${ipAddress} using ${userAgent}: ${error.message}`
//     );
//     return res.status(500).json({ message: "Something went wrong" });
//   }
// };

// export default withIronSession(loginHandler, ironOptions);
