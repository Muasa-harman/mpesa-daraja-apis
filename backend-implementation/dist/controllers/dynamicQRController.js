// controllers/qrCodeController.ts
import axios from 'axios';
import base64Img from 'base64-img';
import DynamicQRCodeModel from '../models/DynamicQRCode'; // Import the model
const DynamicQRUrl = 'https://sandbox.safaricom.co.ke/mpesa/qrcode/v1/generate';
const MerchantName = 'UMESKIA TEST PAY';
const AccountNumber = 'umeskia1234';
const BusinessShortCode = '600997';
// Dynamic QR Code Generation Controller
export const generateDynamicQR = async (req, res) => {
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
        'Authorization': `Bearer your_access_token`, // Replace with your actual access token
    };
    try {
        const response = await axios.post(DynamicQRUrl, payload, { headers });
        const qrCode = response.data.QRCode;
        if (qrCode) {
            const qrImage = `data:image/jpeg;base64,${qrCode}`;
            // Save the base64 image to a file (optional)
            base64Img.imgSync(qrImage, '', 'qrcode');
            // Save QR code details to the database
            const dynamicQRCode = new DynamicQRCodeModel({
                merchantName: MerchantName,
                accountNumber: AccountNumber,
                amount: 10,
                trxCode: 'PB',
                businessShortCode: BusinessShortCode,
                qrCode: qrImage, // Save the generated QR code image
            });
            await dynamicQRCode.save();
            console.log('QR Code generated and saved successfully.');
            res.status(200).json({ message: 'QR Code generated successfully.', image: qrImage });
        }
        else {
            res.status(500).json({ error: 'An error occurred while generating the QR code. Please try again later.' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'An error occurred while processing your request.' });
    }
};
