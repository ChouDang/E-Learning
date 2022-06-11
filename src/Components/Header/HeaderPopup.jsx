import React, { useState } from 'react'
import "./headerPopup.scss"
import { CloseOutlined } from '@ant-design/icons';

export const HeaderPopup = () => {
  const [hidePopup, setHidePopup] = useState(false);
  return (
    <div>
      <div className='headerline'></div>
      <div className={`headerPopup ${hidePopup ? "hide" : ""}`}>
        <div className="dialogueBox">
          <span className="title">Start Solving your challenge now </span>
          <span className="offer">
            | Enroll today and learn risk-free with our 30-day money-back
            guarantee.
          </span>
        </div>
        <div
          className="cross"
          onClick={() => {
            setHidePopup(true);
          }}
        >
          <CloseOutlined style={{ fontSize: 16 }} />
        </div>
      </div>
    </div>
  );
}


