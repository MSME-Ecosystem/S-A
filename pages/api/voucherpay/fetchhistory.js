import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {

    console.log("Get")
    const config = {
      method: "GET",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/gethistories",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE,
        "Content-Type": "application/json",
      },
    };
    try {
      axios(config)
        .then(function (response) {
          console.log("11111111111111");
          console.log(response?.data.data);
          res.status(200).json(response?.data.data);
        })
        .catch(function (error) {
          console.log("22222222222");
          console.log(error?.response.data);
          res.status(500).json(error?.response.data);
        });
    } catch (error) {
      console.log("33333333333333333");
      console.log(error);
    }
  } else if (req.method === "POST") {
    console.log("post")
    const data = req.body.data;
    const config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "https://dashboard.voucherpay.online/api/gethistory",
      headers: {
        token: process.env.VOUCHER_PAY_PK_LIVE2,
        "Content-Type": "application/json",
      },
      data: data,
    };
    try {
      axios(config)
        .then(function (response) {
          console.log("11111111111111");
          console.log(response?.data.data);
          res.status(200).json(response?.data.data);
        })
        .catch(function (error) {
          console.log("22222222222");
          console.log(error?.response.data);
          res.status(500).json(error?.response.data);
        });
    } catch (error) {
      console.log("33333333333333333");
      console.log(error);
    }
  }
}
