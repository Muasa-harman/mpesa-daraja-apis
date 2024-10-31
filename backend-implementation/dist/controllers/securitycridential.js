import * as forge from 'node-forge';
// Public key PEM string
const publicKeyPem = `
-----BEGIN CERTIFICATE-----
MIIGgDCCBWigAwIBAgIKMvrulAAAAARG5DANBgkqhkiG9w0BAQsFADBbMRMwEQYK
CZImiZPyLGQBGRYDbmV0MRkwFwYKCZImiZPyLGQBGRYJc2FmYXJpY29tMSkwJwYD
VQQDEyBTYWZhcmljb20gSW50ZXJuYWwgSXNzdWluZyBDQSAwMjAeFw0xNDExMTIw
NzEyNDVaFw0xNjExMTEwNzEyNDVaMHsxCzAJBgNVBAYTAktFMRAwDgYDVQQIEwdO
YWlyb2JpMRAwDgYDVQQHEwdOYWlyb2JpMRAwDgYDVQQKEwdOYWlyb2JpMRMwEQYD
VQQLEwpUZWNobm9sb2d5MSEwHwYDVQQDExhhcGljcnlwdC5zYWZhcmljb20uY28u
a2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCotwV1VxXsd0Q6i2w0
ugw+EPvgJfV6PNyB826Ik3L2lPJLFuzNEEJbGaiTdSe6Xitf/PJUP/q8Nv2dupHL
BkiBHjpQ6f61He8Zdc9fqKDGBLoNhNpBXxbznzI4Yu6hjBGLnF5Al9zMAxTij6wL
GUFswKpizifNbzV+LyIXY4RR2t8lxtqaFKeSx2B8P+eiZbL0wRIDPVC5+s4GdpFf
Y3QIqyLxI2bOyCGl8/XlUuIhVXxhc8Uq132xjfsWljbw4oaMobnB2
-----END CERTIFICATE-----
`;
// Function to encrypt data using the public key
const encryptData = (data) => {
    // Convert PEM string to a public key object
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    // Encrypt the data
    const encrypted = publicKey.encrypt(forge.util.encodeUtf8(data), 'RSA-OAEP');
    // Return base64 encoded string
    return forge.util.encode64(encrypted);
};
// Example usage
const dataToEncrypt = 'Hello, Safaricom!';
const encrypted = encryptData(dataToEncrypt);
console.log('Encrypted data:', encrypted);
const privateKeyPem = `
-----BEGIN PRIVATE KEY-----
YOUR_PRIVATE_KEY_HERE
-----END PRIVATE KEY-----
`;
const decryptData = (encryptedData) => {
    const forgePrivateKey = forge.pki.privateKeyFromPem(privateKeyPem);
    const decodedData = forge.util.decode64(encryptedData); // Decode base64
    const decryptedData = forgePrivateKey.decrypt(decodedData, 'RSA-OAEP');
    return forge.util.decodeUtf8(decryptedData); // Return UTF-8 string
};
// Example usage
const decrypted = decryptData(encrypted);
console.log('Decrypted data:', decrypted);
