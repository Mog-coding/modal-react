import React from 'react';
import "./ModalComp.css";
export default function ModalComp({
  onClose,
  modalContent,
  modalStyle,
  buttonStyle,
  containerStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyle,
    className: "modalComp"
  }, /*#__PURE__*/React.createElement("div", {
    style: modalStyle,
    className: "modalComp__content"
  }, modalContent && /*#__PURE__*/React.createElement("p", null, modalContent), /*#__PURE__*/React.createElement("button", {
    style: buttonStyle,
    className: "modalComp__button",
    onClick: () => onClose()
  }, "X")));
}