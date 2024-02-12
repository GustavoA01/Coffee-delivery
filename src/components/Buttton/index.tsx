import { CardButton, HeaderButton } from "./styles"
import shop_car from "../../assets/icons/shop_car.svg"
import { ShoppingCart } from "phosphor-react"

interface ButtonProps {
    card: boolean
    onClick?:()=>void
}

export function Button({ card,onClick }:ButtonProps) {

    if (card) {
        return (
            <CardButton onClick={onClick}>
                <ShoppingCart />
            </CardButton>
        )
    }

    return (
        <HeaderButton>
            <img src={shop_car} alt="" />
        </HeaderButton>
    )

}