import React from 'react'
import { useNavigate } from 'react-router-dom';
import kruisinga_logo from '../assets/kruisinga_logo.png'

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <img src={kruisinga_logo}/>
            <button className='homebuttons'>Leskaarten bekijken</button>
            <button className='homebuttons'>Leerling toevoegen</button>
            <button className='homebuttons'>Archief bekijken</button>
            <button className='homebuttons'>Leskaarten downloaden</button>
            <button className='homebuttons' onClick={() => navigate('/videos')}>Video's bekijken</button>
            <button style={{color: 'grey'}}>DB uploaden</button>
        </div>
        </>
    )
}

export default HomePage