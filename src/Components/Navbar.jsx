import React from 'react'
import Logo from "./Logo"
import Menu from "./Menu"
import Button from "./Button"
import style from "./navbar.module.css"

const Navbar = () => {
return(
    <section id={style.nav}>
        <article>
            <div className={style.Logo}><Logo/></div>
            <div className={style.Menu}><Menu/></div>
            <div className={style.Btn}><Button/></div>
        </article>
    </section>
)
}
export default Navbar