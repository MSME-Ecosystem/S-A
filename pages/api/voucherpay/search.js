import { withIronSessionApiRoute } from "iron-session/next";
import logger from "@/logger";
import { dbquery } from "@/lib/db";
import { ironOptions } from "@/lib/ironConfig";


export default withIronSessionApiRoute(searchRoute, ironOptions);

async function searchRoute(req, res) {
  try {
    

    const { q } = req.query;
    const ipAddress =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];

    logger.info(
      `${req.method} ${req.url} from ${ipAddress} using ${userAgent}`
    );

   /*  const hashedQuery = await hash(q, 10); */
    const query = "SELECT name FROM voucherpay WHERE email = ?";
    const values = [q];
    const [result] = await dbquery({ query, values });

    if (!result) {
      logger.error(`Invalid User from ${ipAddress} using ${userAgent}`);
      return res.status(401).json({ message: "Invalid User" });
    }
 
    logger.info(`Search query ${q} matched user ${result.name}`);
    return res.json({ result });
  } catch (error) {
    logger.error(`Error searching User: ${error}`);
    return res.status(500).json({ message: "An error occurred while searching voucherpay" });
  }
}
