import React, { useEffect, useState, useRef } from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/Button";
// import { Select } from "antd";
// import "antd/dist/antd.css";
import "./App.css";
function App() {
  return <div>
  <Button className='custom' size={ButtonSize.Large} onClick={() => {
    alert('1')
  }}>222</Button>
  <Button btnType={ButtonType.Link} href="http://www.baidu.com" target='_blank'>2</Button>
  </div> 
}

export default App;
