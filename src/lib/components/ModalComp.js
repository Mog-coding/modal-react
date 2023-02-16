import React from 'react';
import "./ModalComp.css";

export default function ModalComp({ onClose, modalContent, modalStyle, buttonStyle, containerStyle }) {
    return (
        <div style={containerStyle} className="modalComp">
            <div style={modalStyle} className="modalComp__content">
                <p>{modalContent ? modalContent : "Modal content"}</p>
                <button style={buttonStyle} className="modalComp__button"
                    onClick={() => onClose()}>X</button>
            </div>
        </div>
    )
}