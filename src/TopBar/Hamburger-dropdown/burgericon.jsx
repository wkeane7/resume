import s from "./hamburger-dropdown.module.css";

export default function Hamburger() {
    return (
        <>
            <nav className={s.burgericon}>
                <div className={s.lines}></div>
                <div className={s.lines}></div>
                <div className={s.lines}></div>
            </nav>
        </>
    )
}