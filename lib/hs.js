const bcrypt = require("bcrypt");
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const initVector = process.env.HS_16;
const securityKey = process.env.HS_32;
export async function hash(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function validateUser(password, hashedKey) {
  const isPasswordValid = await bcrypt.compare(password, hashedKey);
  return isPasswordValid;
}

export async function hashCrypto(password) {
 
  const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
  let encryptedData = cipher.update(password, "utf-8", "hex");

  encryptedData += cipher.final("hex"); 

  return encryptedData;
}
export async function deHashCrypto(encryptedPwd) {
 
  const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);

  let decryptedData = decipher.update(encryptedPwd, "hex", "utf-8");
  
  decryptedData += decipher.final("utf8");  
  return decryptedData;

 
}
