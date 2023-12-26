// import React from 'react'
// import style from "./navbar.module.css"
 import {Link} from "react-router-dom"
const Menu = () =>{
    return(
        // <ol id={style.MenuBlock}>
        //     <li><a href="">Explore Work</a></li>
        //     <li><a href="">Hire Talents</a></li>
        //     <li><a href="">Challenges</a></li>

        // </ol>
        <div>
        <Link to="/explore">Explore</Link> 
         <Link to="/hire">Hire</Link>
         <Link to="/challenge">Challenge</Link>
         </div>
    )

    }
    export default Menu
