import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import "./styles.css";

const Success = () => {
  return (
    <div id="success-page">
      <div className="success-message">
        <FiCheckCircle size={100} color="#34cb79" />
      </div>
      <h1 className="success-info">Cadastro concluído!</h1>
    </div>
  );
};

export default Success;
