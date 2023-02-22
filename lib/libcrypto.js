//Checking the crypto module
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key =Buffer.from('9298987654565434567890987854329234567898c76564578909895467689789', 'hex');//'26 8f 0a a0 e7 d0 69 64 53 83 0b d7 c5 d9 3e ac e7 fe f6 48 fb 91 5d e1 39 76 93 35 8d c9 9b e5';//'adeniyijamesa@gmail.com';// crypto.randomBytes(32);
// const key = crypto.randomBytes(32);
const iv = Buffer.from('c8767656787656781276589768909854', 'hex');//'c3 2f 11 8a c0 f2 ac 86 e7 92 1f 9b 5a 93 97 75';//crypto.randomBytes(16);

//Encrypting text
function encrypt(text) { 
   let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
   let encrypted = cipher.update(text);
   encrypted = Buffer.concat([encrypted, cipher.final()]);
   // return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
   return encrypted.toString('hex');
}

// Decrypting text
function decrypt(text) {
   // let iv = Buffer.from(text.iv, 'hex');
   // let encryptedText = Buffer.from(text.encryptedData, 'hex');
   let encryptedText = Buffer.from(text, 'hex');
   let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();
}

module.exports = { encrypt, decrypt };