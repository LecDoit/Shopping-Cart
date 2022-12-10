/* eslint-disable */
import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group'


const Navbar = () =>{


    const [hei, setHei] = useState('1vh')

// function hoverOver(event){
    
//         if (event.target._reactName='onMouseEnter'){

//             console.log('red')
            
//         } else if (event.target.className=='onMouseOver'){

//             console.log('green')
//         };

//         console.log(event._reactName)

      
//         };


    return(
        <div 
         style={{
            fontSize : '200%',
            display: "grid",
            gridTemplateColumns: '1fr 1fr',
            textAlign: "center",
            // height: "10vh",
            height: `${hei}`,
            justifyContent:"center",
            // transition: "height 1s ease-out 1s";

            
        }} id="nav"onMouseEnter={()=> setHei('10vh')}
             onMouseLeave={()=> setHei('1vh')} >
                <Link to={"/"}>
                    <div  id="home--page--button">Home Page</div>
                </Link>
                <Link to={'/shop'}>
                    <div id="shop--page--button">Shop</div>
                </Link>
        </div>
    )
}

export default Navbar