import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Shop from "./Shop";


const RouteSwitch = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/shop' element={<Shop/>} />

            </Routes>
        
        </BrowserRouter>
    )
}

export default RouteSwitch