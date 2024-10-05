import { AuthNav } from "../AuthNav/AuthNav"
import { Nav } from "../Nav/Nav"
import css from './AppBar.module.css'

export const AppBar = () => {
    return (
        <div className={css.app_bar}>
        <Nav/>
        <AuthNav/>
        </div>
    )
}