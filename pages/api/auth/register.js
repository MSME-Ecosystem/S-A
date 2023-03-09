import { dbquery } from "@/lib/db";
import { hash, hashCrypto } from "@/lib/hs";
import logger from "@/logger";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default async function handler(req, res) {
  const { method, url, body, headers, socket } = req;
  const ipAddress = headers["x-forwarded-for"] || socket.remoteAddress;
  const userAgent = headers["user-agent"];
  logger.info(`${method} ${url} from ${ipAddress} using ${userAgent}`);

  try {
    if (method !== "POST") {
      res.status(405).json({ message: "Method Not Allowed" });
      return;
    }
console.log(body.data)
    const {
      business_name,
      first_name,
      last_name,
      phone_number,
      email,
      companytype,
      password,
    } = body?.data || {};

    if (
      !business_name ||
      !first_name ||
      !last_name ||
      !phone_number ||
      !email ||
      !companytype ||
      !password
    ) {
      res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
      return;
    }

    const hashedPassword = await hashCrypto(password);
    const hashedKey = await hash(hashedPassword);

    const user = {
      userID: uuidv4(),
    
      role: 601,
      business_name,
      firstName: first_name,
      lastName: last_name,
      phoneNumber: phone_number,
      email,
      password: hashedKey,
      accountType: companytype,
    };

    const data = {
      reference: uuidv4(),
      first_name: user.firstName,
      last_name: user.lastName,
      mobile_number: user.phoneNumber,
      email: user.email,
      nin: "",
      bvn: "",
    };

    const config = {
      method: "POST",
      url: "https://dashboard.voucherpay.online/api/createaccount",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },
      data,
    };

    const { data: responseData } = await axios(config);   

    if (responseData?.status !== "200") {
      logger.error(`Error from API: ${responseData?.message}`);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong!" });
      return;
    } else {
      const query =
        "INSERT INTO voucherpay (customer_id, name,email, phone) VALUES (?, ?, ?, ?)";
      const values = [
        responseData?.customerid,
        user.firstName + " " + user.lastName,
        user.email,
        user.phoneNumber,
      ];
      await dbquery({ query, values });
    }

    const query =
      "INSERT INTO users (user_id, voucher_id, role, business_name, first_name, last_name, phone_number, email, password, account_type) VALUES (?, ?,?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      user.userID,
      responseData?.customerid,
      user.role,
      user.business_name,
      user.firstName,
      user.lastName,
      user.phoneNumber,
      user.email,
      user.password,
      user.accountType,
    ];

    const result = await dbquery({ query, values });

    if (result?.affectedRows !== 1) {
      res.status(500).json({ success: false, message: "User Record Exists!" });
      return;
    }

    res
      .status(200)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    console.log(error);
    logger.error(
      `Error occurred from ${ipAddress} using ${userAgent}: ${error.message}`
    );
    res.status(500).json({ success: false, message: "Something Went wrong" });
  }
}
