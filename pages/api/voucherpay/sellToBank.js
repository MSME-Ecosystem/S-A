import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/lib/ironConfig";
import { v4 as uuidv4 } from "uuid";

export default withIronSessionApiRoute(VTX, ironOptions);

async function VTX(req, res) {
  if (req.method === "GET") {
    console.log("Email: ",req.body)
    console.log("Request method not supported");
    res.status(405).end();
    return;
  }
  if (req.method !== "POST") {
    console.log("Invalid request method");
    res.status(400).end();
    return;
  }

  try {      
    const { account_number, bank_name, account_name, amount, transaction_desc } = req.body.data;
   const {vID} = req.body.d 
     
  /*   const data = {
      reference: "fxzsdt5zcd363frtxx5f5djdf435fd5",
      sender_id: vID,
      to_id: to_id,
      amount: amount,
      currency: "NGN",
      transaction_desc: transaction_desc,
    }; */

    const data = {
        reference: `SmartAgric-${uuidv4()}`,
        "sender_id": vID,
        "bank_name": bank_name,
        "bank_code": "809",
        "account_name":account_name,
        "account_number": account_number,
        "amount": amount,
        "currency": "NGN",
        "transaction_desc": transaction_desc
    }

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/sell",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios(config);
    console.log("111111111111")
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log("22222222222")
    console.log(error);
    res.status(500).json(error.response.data);
  }
}
