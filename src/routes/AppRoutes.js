import {Route, Routes} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/SignUp";

const AppRoutes = (props) => {
    return(
        <Routes>
            <Route path="/" element={<Home user={props.user}/>}></Route>
            <Route path="/Login" element={<Login user={props.user} setUser={props.setUser}/>}></Route>
            <Route path="/SignUp" element={<SignUp user={props.user}/>}></Route>
        </Routes>
    );
}

export default AppRoutes;