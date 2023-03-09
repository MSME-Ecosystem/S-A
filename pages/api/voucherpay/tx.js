import axios from "axios";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/lib/ironConfig";

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
    const { to_id, amount, transaction_desc } = req.body.data;
    const { vID } = req.session.vid;
     
    const data = {
      reference: "fxzsdt5zcd363frtxx5f5djdf435fd5",
      sender_id: vID,
      to_id: to_id,
      amount: amount,
      currency: "NGN",
      transaction_desc: transaction_desc,
    };

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/transfer",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios(config);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.response);
    res.status(500).json(error.response.data);
  }
}
