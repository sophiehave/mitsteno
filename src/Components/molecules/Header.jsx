import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import Modal from "react-modal";
import { Link } from "react-router-dom";
import './CSS/Header.css';




export default function Header() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    
    // const navigate = useNavigate();
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    
    // const openModal = () => {
    //   setModalIsOpen(true);
    // };
    
    // const closeModal = () => {
    //   setModalIsOpen(false);
    // };
    // const handleClick = (route) => {
    //     navigate(route);
    //     closeModal();
    //   };
    return(
        <div className="header">
            <div className="menu">
                <h2 onClick={openModal}><AiOutlineMenu/>Menu</h2>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="headermodal"
            >
                <div className='noborder menulinje'>
                <h2>Menu</h2>
                <p className='noborder' onClick={closeModal}><AiOutlineClose/></p>
                </div>

                <div className='klikimenu'>
                    <Link to="/" onClick={closeModal} className="linkklik noborder">
                    <h3>Overblik</h3>
                    </Link>
                </div>

                <div className='klikimenu'>
                    <Link to="/mineinformationer" onClick={closeModal} className="linkklik noborder">
                        <h3>Mine informaner</h3>
                    </Link>
                    <Link to="/provesvar" onClick={closeModal} className="linkklik noborder">
                        <p>Prøvesvar</p>
                    </Link>
                    <Link to="/recept" onClick={closeModal} className="linkklik noborder">
                        <p>Recept</p>
                    </Link>
                    <Link to="/beskeder" onClick={closeModal} className="linkklik noborder">
                        <p>Beskeder</p>
                    </Link>
                    <Link to="/historik" onClick={closeModal} className="linkklik noborder">
                        <p className='noborder'>Historik</p>
                    </Link>
                </div>

                <div className='klikimenu'>
                <Link to="/kommendetider" onClick={closeModal} className="linkklik noborder">
                    <h3>Kommende tider</h3>
                </Link>
                <Link to="/kommendetider" onClick={closeModal} className="linkklik noborder">
                    <p>Se dine kommende tider</p>
                </Link>
                <Link to="/sporgeskema" onClick={closeModal} className="linkklik noborder">
                    <p>Spørgeskema</p>
                </Link>
                <Link to="/uploadinformation" onClick={closeModal} className="linkklik noborder">
                    <p className='noborder'>Upload data</p>
                </Link>
                </div>

                <div className='noborder klikimenu'>
                <Link to="/kontakt" onClick={closeModal} className="linkklik noborder"> 
                    <h3>Kontakt</h3>
                </Link>    
                <Link to="/skrivbesked" onClick={closeModal} className="linkklik noborder">
                    <p>Skriv en ikke akut besked til behandler</p>
                </Link>
                <Link to="/kontakt" onClick={closeModal} className="linkklik noborder">
                    <p>Ring til Steno</p>
                </Link>
                <Link to="/findvej" onClick={closeModal} className="linkklik noborder">
                    <p className='noborder'>Find vej</p>
                </Link>
                </div>

            </Modal>
            <Link to="/" className='logo'>
                <h1 className="logo">Mit Steno forløb</h1>
            </Link>
            <a href="https://steno.dk/">
            <button className="logud">Log ud</button>
            </a>
        </div>
    )
}


// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Header(props) {
    



//     const navigate = useNavigate();
//     const [modalIsOpen, setModalIsOpen] = useState(false);
  
  
//     return (
//       <div className="App-header">
  
//         <div className="menuknap">
//           <button className="openmenu" onClick={openModal}>
//             Menu
//           </button>
//         </div>
//         <Modal
//           onRequestClose={closeModal}
//           contentLabel="Update booking form"
//           className="menu-dropdown"
//           overlayClassName="menu-dropdown-overlay"
//         >
//           <ul className="bullets">
//             <li className="menu-dropdown-item"
//               onClick={() => {
//                 handleClick("/");
//               }}
//             >
//               Hjem
//             </li>
//             <li className="menu-dropdown-item"
//               onClick={() => {
//                 handleClick("/my-bookings");
//               }}
//             >
//               Mine bookinger
//             </li>
//             <li className="menu-dropdown-item"
//               onClick={() => {
//                 handleClick("/new-booking");
//               }}
//             >
//             Book lokale
//             </li>
//           </ul>
//         </Modal>
//       </div>
//     );


// }