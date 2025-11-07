import React from "react";
import { Input } from "antd";

function InputClima({ inputRef, onPressEnter }) {
  return <Input ref={inputRef} onPressEnter={onPressEnter} size="large" placeholder="Buscar cidade" className="w-3/5"/>;
}

export default InputClima;
