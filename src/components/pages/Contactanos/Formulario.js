import React from "react";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './Formulario.css';

function Formulario() {
    return (
        <>

        <div className="containerBox">
            <input type="text" id="name" name="name" placeholder="EMAIL" required
            minlength="4" maxlength="8" className="input" ></input>
            <input type="text" id="name" name="name" placeholder="ASUNTO" required
            minlength="4" maxlength="8" className="input"></input>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="TU MENSAJE" required>
            </textarea>

            <button className="btn btn--primary btn--wide orange">Contáctanos</button>

            <div className="flex-container space-between">
                <a href=""><AiOutlineWhatsApp size={20}/></a>
                <a href=""><MdEmail size={20}/></a>

            </div>
        </div>

        </>
    );
}

export default Formulario;
