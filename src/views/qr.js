import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QrCode() {
    return (
        <div><QRCodeSVG value="https://strong-licorice-9cc071.netlify.app" /></div>
    )
}

export default QrCode