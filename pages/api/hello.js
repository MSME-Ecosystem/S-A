import logger from "@/logger"

export default function handler(req, res) {
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  logger.info(`${req.method} ${req.url} from ${ipAddress} using ${userAgent}`);

 
  res.status(200).json({ name: 'John Doe' })
}
