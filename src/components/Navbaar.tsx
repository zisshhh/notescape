import { NavLink } from "react-router-dom"
import { Home } from "./Home"

export const Navbaar = () => {
    return (
        <div className="flex flex-row gap-10 place-content-evenly">
            <NavLink to={"/"}>
                Home
            </NavLink>
            <NavLink to={"/pastes"}>
                Pastes
            </NavLink>
        </div>
    )
}