import { HeaderContainer } from "./styles"
import { Button } from "../Buttton"
import { MapPin } from "phosphor-react"
import coffeeLogo from "../../assets/icons/coffeeLogo.svg"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { InfoContext } from "../../Contexts/contextAddress"

export function Header() {
    const {userInfo} = useContext(InfoContext)
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img id="logo" src={coffeeLogo} alt="" />
            </NavLink>

            <div>

                <NavLink to="/ShopCar">
                    <button id="local">
                        <MapPin />
                        {userInfo.city && userInfo.UF? (
                            <span>{userInfo.city}-{userInfo.UF}</span>
                        ):(
                            <span>Belo Horizonte - MG</span>
                        )}
                    </button>
                </NavLink>

                <NavLink to="/ShopCar">
                    <Button card={false} />
                </NavLink>


            </div>
        </HeaderContainer>
    )
}