import React from "react"
import '../componenets/Movies.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import King from '../Assets/aaa.jpg';
import { Icon } from "@mui/material";

function MovieList () {
    return(
        <div>
            <section>
            <Bar/>  
            </section>
        <section className="MovieList">
           
            <Movies/>
            <Movies/>
            <Movies/>
            <Movies/>
            <Movies/>
            <Movies/>
            <Movies/>
        </section>
        </div>
    )
}   

const Bar = () => {
    return(
        <h1>ABC</h1>
    )

}
const Movies = () =>{

    return(
        <article className="Movies">
            <Image></Image>
            <Title></Title>
            <Views></Views>
        </article>
    )
}

const Image = () => {
    return(
        
        <div>
    <img className="img"
        src={King}
        alt=''
    
    />
    </div>
    )
}

const Title = () => {
    return(
    <h1>Pushpa</h1>
    )
}

const Views = () => {
    return (
        
            
        <section className="section">
            <div className="son">
            <RemoveRedEyeIcon/>
        <h4> 60.5k Views</h4>
        </div>
        <div className="daughter">
            <AccessTimeIcon/>
        <h5> 2 months ago</h5>
        </div>
           
            
            
        </section>
       
       
    )
}

export default MovieList