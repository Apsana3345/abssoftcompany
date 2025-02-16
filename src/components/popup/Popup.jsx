import React,{useState} from 'react'
import imagePopup from '../../assets/popup.png'
import './Popup.css'
const Popup = () => {


    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
      // e.stopPropagation();
        setIsOpen(false);
      };



  return (
   




<>

 <div id="pup" className={`popup-container ${isOpen ? "show" : ""}`}>
<img src={imagePopup} alt="" width="600px" height="600px" />



        <div className="overlay" onClick={closePopup}></div>
        <div className="popup">
          <span className="close-icon" onClick={closePopup}>
            &times;
          </span>


      
    </div>
   
   </div>
    </>
  )
}

export default Popup
