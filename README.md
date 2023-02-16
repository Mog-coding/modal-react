# Morgand's Simple React modal
This is a student's project of modal using Create React App.

## Install
    npm install @morgand/modal-react

## Usage example

    import { useState } from "react";
    import ModalComp from "./lib/components/ModalComp";

    export default function App() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    }

    const closeModal = () => {
        setIsClicked(false);
    }

    return (
        <div>
            {isClicked && <ModalComp onClose={closeModal} /> }
            <button
            onClick={handleClick}
            >Clic to open modal</button>
        </div>
    );
    }

## Description
In the exemple, clic on open modal's button will open modal, and clic on modal's cross will close modal.
The ModalComp's Props onClose with the reference of function closeModal() is required. It allows to close the modal when it is displayed. 
It is done with modal's close button which call closeModal() from the modalComp child.
It is also required to declare function closeModal() in the modal's parent with the code provided.

## Props
### ○ required
     onClose={closeModal} 
     // Required props with reference of function closeModal().
     // function closeModal() must be declared in modal component's parent.

### ○ not required
    modalContent={"My custom content"}
    // Allow custom content.

    modalStyle={{backgroundColor:'white', width:'35%' }} 
    // Allow to customise modal's style.

    buttonStyle={{color:'green'}}
    // Allow to customise close button.

    containerStyle={{color:'green'}}
    // Allow to customise component's container.

## Import modal component
    import ModalComp from "./lib/components/ModalComp";

## Structure of modal component
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