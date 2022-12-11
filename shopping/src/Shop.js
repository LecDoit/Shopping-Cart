import React, {useState, useEffect} from "react"
import Sidebar from "./Sidebar"


const Shop = () =>{

    useEffect(()=>{
        fetchItems()
    },[])

    const [items,setItems] = useState([]);
    const [bucket,setBucket] = useState(0)
    const [cart,setCart] = useState([])


    const fetchItems = async () =>{
       
        const data = await fetch('https://fortnite-api.com/v2/shop/br')

        const items = await data.json();
        

        setItems(items.data.daily.entries)
    }
    function handleAddItem(event){
        event.preventDefault();
        let price = event.target.getAttribute('data-price')
        let name = event.target.getAttribute('data-name')
        setBucket(Number(bucket) + Number(price))
        setCart(cart=>[...cart,name])
        console.log(cart)
    }

    let shopStyle ={
        display:"grid",
        gridTemplateColumns: '1fr 1fr',

        justifyContent : 'center',
        alignItems:"center",
        gap: "50px",
        height:'100vh'    ,

    }

    let itemStyle = {
        display:"grid",
        textAlign:'center',
        justifyContent:'center',

    }

    let imgStyle={
        display:'block',
        margin:'auto',
        backgroundColor:'rgb(200, 50, 235 ,0.1)'
    }
    
    let btnStyle = {
        backgroundColor:'rgb(1, 1, 1, 0.6)',
        width:"200px",
        display:'block',
        margin:'auto',

    }



    return(

        <div>
            <Sidebar bucket={bucket}
                    cart = {cart}/>
            <div style={shopStyle} id='items'>

                {items.map(item=>(
                    <div style={itemStyle}  key={item.regularPrice+Math.random()}>
                        <img style={imgStyle} key={item.regularPrice+Math.random()}src={item.items[0].images.smallIcon}></img>
                        <div >{item.devName}</div>
                        <div >Price:{item.regularPrice}</div>


                        <button style={
                            btnStyle
                        } data-price={item.regularPrice}
                            data-name={item.devName}
                                 onClick = {handleAddItem}>Add to Cart 
                                 </button>


                    </div>
                ))}

            </div>
        </div>
    )
}

export default Shop