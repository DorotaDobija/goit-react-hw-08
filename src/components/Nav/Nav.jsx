import { NavLink } from "react-router-dom";
import css from "./Nav.module.css"

export const Nav = () => {
    return (<div className={css.nav_box}>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/phonebook'>Phonebook</NavLink>
    </div>)
}