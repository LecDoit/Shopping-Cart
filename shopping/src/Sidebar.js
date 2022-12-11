import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group'
import './sidebar.css'

const Sidebar = (props) =>{

    const [activeSide, setActiveSide] = useState('main')


    let btnStyle = {
        backgroundColor:'rgb(1, 1, 1, 0.6)',
        width:"200px",

        fontSize: "1vw",

    }
    return(
        <div>

            <CSSTransition 
            in={activeSide==='main'}
            unmountOnExit
            timeout={500}
            classNames='menu-primary' >
            
            <div className='menu'>
                <div>Items in Cart:
                    {(props.cart.length)}
                </div>


                <div>
                    {props.cart.map(item=>(
                        <div key={item + Math.random()}>{item}</div>
                    ))}
                </div>

                <div>
                    Total Value: {props.bucket}
                </div>
                <button style={btnStyle}
                >Pay</button>
            </div>
            </CSSTransition>
        </div>
    )
}

export default Sidebar