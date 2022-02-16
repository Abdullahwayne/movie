import React from "react"
import '../componenets/Movies.css';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import MovieIcon from '@mui/icons-material/Movie';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Marriage from '../Assets/download.jpg';
import Iron from '../Assets/123.jpg';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Clean from '../Assets/clean.jpg';
import Uncharted from '../Assets/images.jpg';

import King from '../Assets/king.jpg';
import { Icon } from "@mui/material";

function MovieList () {
    return(
        <div>
            <section>
            <Bar/>  
            </section>
        <section className="MovieList">
           
            <Movies title="King" titleImg={King} views="60.6k" months="2"/>
            <Movies title="Marriage" titleImg={Marriage} views="55.6k" months="1"/>
            <Movies title="Iron Man" titleImg={Iron} views="50.6k" months="2.5"/>
            <Movies title="Clean" titleImg={Clean} views="44.1k" months="4"/>
            <Movies title="Uncharted" titleImg={Uncharted} views="10.6kk" months="5"/>
            <Movies title="King" titleImg={King} views="60.6k" months="2"/>
            <Movies title="Marriage" titleImg={Marriage} views="55.6k" months="1"/>
            <Movies title="Iron Man" titleImg={Iron} views="50.6k" months="2.5"/>
            <Movies title="Clean" titleImg={Clean} views="44.1k" months="4"/>
            <Movies title="Uncharted" titleImg={Uncharted} views="10.6kk" months="5"/>
            <Movies title="Clean" titleImg={Clean} views="44.1k" months="4"/>
            <Movies title="Uncharted" titleImg={Uncharted} views="10.6kk" months="5"/>
            
            
        </section>
        </div>
    )
}   

const Bar = () => {
    return(
        <div className="bar">
         <ToggleButtonGroup
      orientation="horizontal"
      
      exclusive
     
    >
    
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton >
        All
      </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup>
    <ToggleButton value="module" aria-label="module">
        <SlowMotionVideoIcon />
      </ToggleButton>
      <ToggleButton >
        Your Video
      </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
      <ToggleButton value="module" aria-label="module">
        <SportsEsportsIcon />
      </ToggleButton>
      <ToggleButton >
        Gaming
      </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
      <ToggleButton value="module" aria-label="module">
        <AudiotrackIcon />
      </ToggleButton>
      <ToggleButton >
        Music
      </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
      <ToggleButton value="module" aria-label="module">
        <MovieIcon />
      </ToggleButton>
      <ToggleButton >
        Movies
      </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
      <ToggleButton value="module" aria-label="module">
        <MovieIcon />
      </ToggleButton>
      <ToggleButton >
        News
      </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
      <ToggleButton value="module" aria-label="module">
        <SportsFootballIcon />
      </ToggleButton>
      <ToggleButton >
        Sports
      </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
      <ToggleButton value="module" aria-label="module">
        <TheaterComedyIcon />
      </ToggleButton>
      <ToggleButton >
        Comedy
      </ToggleButton>
      </ToggleButtonGroup>






   

    
    </div>
    
  );
}
  
const Movies = (props) =>{

    return(
        <div className="Movies">
          <div className="MovieImage">
          <img className="img"
        src={props.titleImg}
        alt=''/>
    
          </div>
  
    <h1 className="title">{props.title}</h1>
    <section className="section">
            <div className="son">
            <RemoveRedEyeIcon style={{color:"#7A726F",}}/>
        <h4 className="h4"> {props.views} Views</h4>   
        </div>
        <div className="daughter">
            <AccessTimeIcon style={{color:"7A726F"}}/>
        <h5 className="h5"> {props.months} months ago</h5>
        </div>
           
            
            
        </section>

           
        </div>
    )
}

// const Image = () => {
//     return(
        
//         <div>
    
//     </div>
//     )
// }

// const Title = () => {
//     return(
//     )
// }

// const Views = () => {
//     return (
        
            
       
       
       
//     )
// }

export default MovieList