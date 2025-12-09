import React from 'react';
import { useNavigate } from 'react-router-dom';
import achteruitFile from '../assets/Videos edudrive/Achteruit_fileparkeren.mp4';
import vooruitFile from '../assets/Videos edudrive/Vooruit_fileparkeren.mp4';
import bochtAchteruit from '../assets/Videos edudrive/bocht_achteruit.mp4';
import rechtAchteruit from '../assets/Videos edudrive/recht_achteruit.mp4'

function VideoPage() {
  const navigate = useNavigate();

  return (
    <div>

      <h2>Achteruit fileparkeren</h2>
      <div>
        <video controls>
          <source src={achteruitFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2>Vooruit fileparkeren</h2>
      <div>
        <video controls>
          <source src={vooruitFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2>Recht achteruit</h2>
      <div>
        <video controls>
          <source src={rechtAchteruit} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2>Achteruit bocht</h2>
      <div>
        <video controls>
          <source src={bochtAchteruit} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      
      <button className='homebuttons' onClick={() => navigate("/")}>Terug</button>
    </div>
  );
}

export default VideoPage;
