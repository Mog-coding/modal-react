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
        {isClicked && <ModalComp onClose={closeModal} content={"Content of modal"} 
        modalStyle={{backgroundColor:'white', width:'35%' }}/> }
        <button
        onClick={handleClick}
        >Clic to open modal</button>
    </div>
  );
}