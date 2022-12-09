import { Routes,Route } from "react-router";
import Home from "../views/Home";
import Detail from "../views/Detail";
export default function MainRoute(){
    return (
        <Routes>
            <Route path="/detail/character/:id" element={<Detail></Detail>} />
            <Route path="/" element={<Home></Home>} />
        </Routes>
    )
}