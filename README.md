# Morgand's React modal

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
The ModalComp's Props onClose with the reference of function closeModal() is required. It allows to close the modal when it is displayed. 
It is done with modal's close button which call closeModal() from the modalComp child.
It is also required to declare function closeModal() in the modal's parent with the code provided.

## Props

### required

### not required