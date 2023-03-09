import formidable from "formidable-serverless";
import fs from "fs";
import path from "path";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/lib/ironConfig";
export const config = {
  api: {
    bodyParser: false,
  },
};

export default withIronSessionApiRoute(uploadImageRoute, ironOptions);
async function uploadImageRoute(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm({ keepExtensions: true });
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err.message);
      }

      if (files.file.size > 500000) {
        console.log("Image must be less than 500kb");
        res.status(400).send({ message: "Image must be less than 500kb" });
        return;
      }
      const oldPath = files.file.path;
      let filePath = path.extname(oldPath);

      const user = req.session.user;
      const newPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        `${user.user}-${user.loginID}${filePath}`
      );

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err.message);
        }
        return res.status(200).json({
          message: "Image Uploaded Successfully",
          url: `/uploads/${files.file.name}`,
        });
      });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
