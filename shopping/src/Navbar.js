/* eslint-disable */
import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group'


const Navbar = () =>{


    const [hei, setHei] = useState('1vh')



    return(
        <div 
         style={{
            fontSize : '200%',
            display: "grid",
            gridTemplateColumns: '1fr 1fr',
            textAlign: "center",

            justifyContent:"center",


            
        }} id="nav"
        onMouseEnter={()=> setHei('10vh')}
             onMouseLeave={()=> setHei('1vh')} 
             >
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