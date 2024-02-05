import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
 
    // const styles = {
    //     // Add your CSS styles here
    //     backgroundColor: 'lightblue',
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     padding: '10px',
    //     display: 'flex',
    //     justifyContent: 'center',
    // }
 
 
 
    return (
        <><div style={{ position: "relative" }}>
            <div >
                <ul style={{ display: "flex", justifyContent: "right", paddingRight: "40px", listStyle: "none", gap: "5px" }}>
 
                    <li style={{ marginRight: "30px" }}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li style={{ marginRight: " 30px" }}>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li style={{ marginRight: " 30px" }}>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
 
                </ul>
            </div>
        </div>
        </>
    )
}
 
export default Navbar
