//so the crypto js is a node package and is designed to be used on node js backend.
//but what if we need it on frontend?

//here is the solution.

/*
Step1- include the script from the source-
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/mode-cfb-min.js"></script>

step2- use the function-

var passPhrase = "Secret Phassphrase";

var encrypted = CryptoJS.AES.encrypt("Message", passPhrase, { mode: CryptoJS.mode.CFB });
var decrypted = CryptoJS.AES.decrypt(encrypted, passPhrase, { mode: CryptoJS.mode.CFB });

console.log('encrypted', encrypted);
console.log('decrypted', decrypted.toString(CryptoJS.enc.Utf8));

*/