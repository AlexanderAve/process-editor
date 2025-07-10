import { Outlet } from "react-router";
import style from './app.module.css'

export function App() {
 return (
    <div className={style.root}>
    <Outlet />
    </div>
 ) 
}


