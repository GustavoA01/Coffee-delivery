import { Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ShopCar } from "./pages/ShopCar";
import { Confirmed } from "./pages/Confirmed";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ShopCar" element={<ShopCar/>}/>
            <Route path= "/confirmed" element={<Confirmed/>}/>
        </Routes>
    )
}