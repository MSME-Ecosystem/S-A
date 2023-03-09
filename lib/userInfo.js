export const addRequestInfo = (info, { req }) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    info.ipAddress = ipAddress;
    info.userAgent = userAgent;

    return info;
  };