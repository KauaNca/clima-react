import { Alert } from "antd";

function Alerta({ message, type, onClose }) {
  return (
    <Alert
      message={message}
      type={type}
      showIcon
      closable
      onClose={onClose}
      className="mt-4"
    />
  );
}


export default Alerta;
