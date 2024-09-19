import { useState } from "react";
import s from "./hamburger-dropdown.module.css";
import Hamburger from "./burgericon";
import { Link } from "react-router-dom";

export default function Burgermenu() {
    
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () =>{
        setBurgerOpen(!burgerOpen)
    }
    
    return (
        <div className={s.menu}>
            <div onClick={toggleBurger}>
                    <Hamburger />
                    <style jsx>
                        {`
                        .bar {
                            display: ${burgerOpen ? "flex" : "none"};
                            flex-direction: column;
                            justify-content: center;
                        }
                            `}
                    </style>
                </div>
            <div className="bar">
                <Link to = "/" className={s.select}><nav>Home</nav></Link>
                <Link to = "/about_me" className={s.select}><nav>About Me</nav></Link>
                <Link to = "/education" className={s.select}><nav>Education</nav></Link>
                <Link to = "/work_experience" className={s.select}><nav>Work Experience</nav></Link>
                <Link to = "/skills" className={s.select}><nav>Skills</nav></Link>
                <Link to = "/websites_created" className={s.select}><nav>Websites Created</nav></Link>
                <Link to = "/contact_me" className={s.select}><nav>Contact Me</nav></Link>
            </div>
        </div>
)}