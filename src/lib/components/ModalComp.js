import React from 'react';
import "./ModalComp.css";

export default function ModalComp({ onClose, content, modalStyle }) {
    return (
        <div className="modalComp">
            <div style={modalStyle} className="modalComp__content">
                <p>{content}</p>
                <button className="modalComp__button"
                    onClick={() => onClose()}>X</button>
            </div>
        </div>
    )
}