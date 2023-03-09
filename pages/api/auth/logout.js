import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../lib/ironConfig";
import logger from "@/logger";

export default withIronSessionApiRoute(logout, ironOptions);

async function logout(req, res) {
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];
  logger.info(`${req.method} ${req.url} from ${ipAddress} using ${userAgent}`);

  req.session.destroy();
  logger.warn(`Logged out successfully from ${ipAddress} using ${userAgent}`);

  return res.json({ loginID: "", user: "", email: "", isLoggedIn: false });
}
