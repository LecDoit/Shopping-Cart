import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Shop from "./Shop";
import Navbar from "./Navbar";



const RouteSwitch = () =>{
    return(
        <BrowserRouter>
                <Navbar />
            <Routes>

                <Route path='/' element={<Landing/>} />
                <Route path='/shop' element={<Shop/>} />
            </Routes>
        
        </BrowserRouter>
    )
}

export default RouteSwitch