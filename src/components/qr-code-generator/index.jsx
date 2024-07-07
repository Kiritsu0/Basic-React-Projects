import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="qr-code" placeholder="Enter your value here" />
        <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor={"#fff"} />
      </div>
    </div>
  )
}

export default QRCodeGenerator;