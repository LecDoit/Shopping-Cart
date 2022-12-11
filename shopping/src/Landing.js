
import background from './bg.jpg'
import {Link} from 'react-router-dom'

const Landing = () =>{

    let btnStyle = {
        backgroundColor:'rgb(1, 1, 1, 0.6)',
        width:"200px",

        fontSize: "1vw",

    }


    return(

        <div style={{

            height:"100vh",
            color: 'white',
            fontSize:`3vw`,
            paddingLeft: "5vw"
        }}>
            <h1 style={{
                fontSize:'5vw',
                marginTop:"20vh",
                marginBottom:'4vh'
            }}>Fortnite Shop</h1>

            <h2>purchase your banner here!</h2>

            <Link to={"/shop"}>
            <button style={btnStyle} className='button'>Shop Now!
            </button>
            </Link>
        </div>
    )
}

export default Landing