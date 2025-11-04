import React from "react";
import { Input } from "antd";

function InputClima({ inputRef }) {
  return <Input ref={inputRef} size="large" placeholder="Buscar cidade" className="w-3/5"/>;
}

export default InputClima;
