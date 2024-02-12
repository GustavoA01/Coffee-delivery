import { ReactNode, createContext,useState } from "react"

interface CardContextProps{
    children:ReactNode
}

interface ProductProps{
    products:object[]
    setNewProduct:(newProduct:object)=>void
    RemoveProduct:(newProduct:object)=>void
}

export const ProductContext = createContext({} as ProductProps)

export function CardContext({children}:CardContextProps) {
    const [products,setProduct] = useState([])

    function setNewProduct(newProduct:object){
        setProduct(state=>[...state,newProduct])
    }

    function RemoveProduct(newProduct:object){
        setProduct(newProduct)
    }

    return (
        <ProductContext.Provider 
        value={{products, setNewProduct,RemoveProduct}}>
            {children}
        </ProductContext.Provider>
    )
}