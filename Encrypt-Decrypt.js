const fs = require('fs');
const CryptoJS = require('crypto-js');

// Encryption function
// Encryption function
function encryptFile(inputPath, outputPath, key) {
  const inputData = fs.readFileSync(inputPath);
  const iv = CryptoJS.lib.WordArray.random(16);
  const encryptedData = CryptoJS.AES.encrypt(inputData, key, { iv: iv, mode: CryptoJS.mode.CTR }).ciphertext;
  const ciphertextWithIV = iv.concat(encryptedData);
  fs.writeFileSync(outputPath, ciphertextWithIV);
  console.log('File encrypted successfully!');
}

// Decryption function
function decryptFile(inputPath, outputPath, key) {
  const ciphertextWithIV = fs.readFileSync(inputPath);
  const iv = ciphertextWithIV.slice(0, 16);
  const ciphertext = ciphertextWithIV.slice(16);
  const decryptedData = CryptoJS.AES.decrypt({ ciphertext }, key, { iv: iv, mode: CryptoJS.mode.CTR }).toString(CryptoJS.enc.Utf8);
  fs.writeFileSync(outputPath, decryptedData);
  console.log('File decrypted successfully!');
}


// Usage example
const key = '1234';
const inputFile = 'ashutosh7i.txt';
const encryptedFile = 'encrypted.txt';
const decryptedFile = 'decrypted.txt';

encryptFile(inputFile, encryptedFile, key);
decryptFile(encryptedFile, decryptedFile, key);
