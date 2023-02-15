import React from 'react';
import "./ModalReact.css";

export default function ModalComp({ onClose }) {
    return (
        <div className="modalComp">
            <div className="modalComp__content">
                <p>Employee Created !</p>
                <button className="modalComp__button"
                    onClick={() => onClose()}>X</button>
            </div>
        </div>
    )
}