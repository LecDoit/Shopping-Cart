const Sidebar = (props) =>{

    let sbStyle = {
        position: 'fixed',
        right:"10px",
        display:'grid',
        backgroundColor: "rgb(244,244,244,0.2)",
        gap:'50px'
    }

    let btnStyle = {
        backgroundColor:'rgb(1, 1, 1, 0.6)',
        width:"200px",
        // display:'block',
        // margin:'left',
        fontSize: "1vw",

    }
    return(
        <div style={sbStyle}>
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
    )
}

export default Sidebar