/* eslint-disable react/prop-types */
const QRcode = ({ isQRcodeVisible, setIsQRcodeVisible }) => {
  return (
    <div className="qrcode-wrapper">
      <span
        className="close"
        onClick={() => setIsQRcodeVisible(!isQRcodeVisible)}
      >
        X
      </span>
      <p>
        Scan the QR code with your phone. Within 1-3 seconds the AR function
        opens on your phone.
      </p>
      <hr />
      <img
        className="qrcode"
        src="/QRcode.png"
        alt="qr code"
      />
    </div>
  );
};

export default QRcode;
