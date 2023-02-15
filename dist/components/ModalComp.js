import React from 'react';
import "./ModalComp.css";
export default function ModalComp({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modalComp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modalComp__content"
  }, /*#__PURE__*/React.createElement("p", null, "Employee Created !"), /*#__PURE__*/React.createElement("button", {
    className: "modalComp__button",
    onClick: () => onClose()
  }, "X")));
}