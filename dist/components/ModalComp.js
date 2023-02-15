import React from 'react';
import "./ModalComp.css";
export default function ModalComp({
  onClose,
  modalContent,
  modalStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modalComp"
  }, /*#__PURE__*/React.createElement("div", {
    style: modalStyle,
    className: "modalComp__content"
  }, /*#__PURE__*/React.createElement("p", null, modalContent ? modalContent : "Modal content"), /*#__PURE__*/React.createElement("button", {
    className: "modalComp__button",
    onClick: () => onClose()
  }, "X")));
}