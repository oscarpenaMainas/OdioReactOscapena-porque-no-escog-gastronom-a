import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiWindowClose} from 'react-icons/bi'

const NavBar = () => {
    const [navBarOpen, setNavBarOpen] =useState(false);
 const links=[
    {
        id: 1,
        link: "Home"
    },
    {
        id: 2,
        link: "Services"
    },
    {
        id: 3,
        link: "Product"
    },
    {
        id: 4,
        link: " Contact"
    },

 ]
 


    return (
    <div className={!navBarOpen === true ? styles.navBar : styles.navOpen}>

         <div>
    {!navBarOpen && <p className={styles.logo}>SpordWeb </p>}
    {!navBarOpen ? <AiOutlineMenu onClick={()=>setNavBarOpen(!navBarOpen)} size={35}/>
     : <BiWindowClose onClick={()=>setNavBarOpen(!navBarOpen)} size={35}/>}
    {
        navBarOpen &&
        <ul>
        {links.map(x => (
        <div>
<Link
onClick={()=> setNavBarOpen(false)}
to={x.link}
smooth
duration={500}
className={styles.navLink}



>{x.link=== "contact"? "contact" :x.link}</Link>
</div>
        ))}
    </ul>
    }</div></div>
    )
};




export default NavBar