import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Botao({ onClick }) {
  return (
    <Button
      type="primary"
      className="ms-3"
      icon={<SearchOutlined />}
      size={"large"}
      onClick={onClick}
    >
      Buscar
    </Button>
  );
}
export default Botao;
