import axios from 'axios';
import base64Img from 'base64-img';

const DynamicQRUrl = 'https://sandbox.safaricom.co.ke/mpesa/qrcode/v1/generate';
const MerchantName = 'UMESKIA TEST PAY';
const AccountNumber = 'umeskia1234';
const BusinessShortCode = '600997';

const payload = {
  MerchantName,
  RefNo: AccountNumber,
  Amount: '10',
  TrxCode: 'PB',
  CPI: BusinessShortCode,
  Size: '300',
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${access_token}`, // Add your actual access token
};

axios.post(DynamicQRUrl, payload, { headers })
  .then(response => {
    const qrCode = response.data.QRCode;

    if (qrCode) {
      const qrImage = `data:image/jpeg;base64, ${qrCode}`;

      // Save the base64 image to a file (optional)
      base64Img.imgSync(qrImage, '', 'qrcode');

      console.log('QR Code generated successfully.');
      console.log('Image saved as qrcode.jpeg');
    } else {
      console.error('An error occurred. Please try again later.');
    }
  })
  .catch(error => {
    console.error(error.message || 'An error occurred. Please try again later.');
  });
