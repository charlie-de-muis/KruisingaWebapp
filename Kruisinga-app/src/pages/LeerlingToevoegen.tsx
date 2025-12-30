import React from 'react';
import { useNavigate } from 'react-router-dom';

function LeerlingToevoegen() {
    const navigate = useNavigate();

    return (
        <div>
            <form>
                <label htmlFor='naam'>Naam + voorletters</label>
                <input type='text' id='naam' name='naam'></input>
                <label htmlFor='roepnaam'>Roepnaam</label>
                <input type='text' id='roepnaam' name='roepnaam'></input><br></br>

                <label htmlFor='adres'>Adres</label>
                <input type='text' id='adres' name='adres'></input>
                <label htmlFor='postcode'>Postcode</label>
                <input type='text' id='postcode' name='postcode'></input><br></br>

                <label htmlFor='woonplaats'>Woonplaats</label>
                <input type='text' id='woonplaats' name='woonplaats'></input><br></br>  

                <label htmlFor='email'>Emailadres</label>
                <input type='text' id='email' name='email'></input><br></br>  

                <label htmlFor='telefoonnummer'>Telefoonnummer</label>
                <input type='text' id='telefoonnummer' name='telefoonnummer'></input>
                <label htmlFor='geboortedatum'>Geboortedatum</label>
                <input type='text' id='geboortedatum' name='geboortedatum'></input><br></br> 

                <label htmlFor='medisch'>Medische bijzonderheden</label>
                <input type='text' id='medisch' name='medisch'></input><br></br> 
                
                <label htmlFor='cbrnummer'>CBR nummer</label>
                <input type='text' id='cbrnummer' name='cbrnummer'></input>
                <label htmlFor='theoriedatum'>Theorie datum</label>
                <input type='text' id='theoriedatum' name='theoriedatum'></input><br></br> 
            </form>
            <button className='buttons' onClick={() => navigate("/")}>Confirm</button>
            <button className='homebuttons' onClick={() => navigate("/")}>Terug</button>
        </div>
    );
}




export default LeerlingToevoegen;