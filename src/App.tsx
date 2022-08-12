import React, { useEffect, useState, useRef } from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/Button";
import Alert, { AlertType } from "./components/Alert/Alert";
// import { Select } from "antd";
// import "antd/dist/antd.css";
import "./App.css";
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Alert
        className="zujian"
        closable
        type={AlertType.Danger}
        message={<div>215421512652161236125125125215215125125612361251251252152151251256123612512512521521512512561236125125125215215125125</div>}
        description={<div>215421512652161236125125125215215125125612361251251252152151251256123612512512521521512512561236125125125215215125125</div>}
      />
    </div>
  );
}

export default App;
