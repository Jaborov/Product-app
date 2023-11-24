import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
export function Menu() {

    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}