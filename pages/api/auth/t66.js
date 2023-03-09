import { dbquery } from "@/lib/db";
import { hash, hashCrypto } from "@/lib/hs";
import logger from "@/logger";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const {
      business_name,
      first_name,
      last_name,
      phone_number,
      email,
      companytype,
      password
    } = req.body.data;

    // Generate a random ID and hash the password

    // Prepare user data for database insertion
    const user = {
      userID: uuidv4(),
      role: 601,
      business_name: business_name,
      firstName: first_name,
      lastName: last_name,
      phoneNUmber: phone_number,
      email: email,
      password: password,
      accountType: companytype,
    };

    let data = {
      reference: "e87f2dxvdrwew45345dd432",
      first_name: user.firstName,
      last_name: user.lastName,
      mobile_number: user.phoneNUmber,
      email: user.email,
    };

    // Call the third party API to create the account
    const config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/createaccount",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const  response  = await axios(config);
    console.log(response.data);
    if (response?.data.status !== "200") {
      console.log("888888888888");
    res
        .status(500)
        .json({ success: false, message: "Something1 went wrong!" });
      return;
    }
    res
      .status(200)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    console.log("3333333333333");
  console.log(error.response.data);
    res.status(500).json({ success: false, message: "Something2 went wrong!" });
  }
}
