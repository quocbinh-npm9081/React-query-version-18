import { Routes,Route } from "react-router";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Pagination from "../views/Pagination";
export default function MainRoute(){
    return (
        <Routes>
            <Route path="/pagination" element={<Pagination></Pagination>} />
            <Route path="/detail/character/:id" element={<Detail></Detail>} />
            <Route path="/" element={<Home></Home>} />
        </Routes>
    )
}