import { CardContainer, PaymentCardContainer } from './styles'
import coffee from '../../assets/images/coffee_1.svg'
import { Button } from '../Buttton'
import { Plus, Minus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ProductContext } from '../../Contexts/contextCard'

export interface CardProps {
    payment: boolean
    title: string
    description: string
    category: string[]
    counter?: number
}


export function Card({ payment, title, description, category, counter }: CardProps) {

    const [count, setCount] = useState(0)
    const { products, setNewProduct, RemoveProduct } = useContext(ProductContext)

    function handleCountPlus() {
        setCount(state => state + 1)
    }

    function handleCountMinus() {
        if (count > 0) {
            setCount(state => state - 1)
        }

    }

    function createObject() {


        const newProduct = {
            title: title,
            description: description,
            category: category,
            counter: count,
        };
        setNewProduct(newProduct);
    }

    function handleAddCar() {
        let isRepeated
        products.map(product => {
            if (product.title === title) {
                isRepeated = true
                return product.counter = count
            }
        })

        if (!isRepeated) {
            createObject()
        }

    }

    function handleRemove() {
        const newCar = products.filter(product => product.title !== title)
        RemoveProduct(newCar)
        products.forEach(element => {
            console.log(element.title)
        });
    }

    if (payment) {
        return (
            <PaymentCardContainer >
                <img src={coffee} alt="" />
                <div className='money-form'>
                    <h1>{title}</h1>
                    <section>
                        <div>
                            <span>{counter}</span>
                        </div>
                        <div>
                            <button className='trash' onClick={handleRemove}><Trash />Remover</button>
                        </div>
                    </section>
                </div>
                <section className='price'>
                    <span className='money'>R$</span>
                    <span className='price'>9,90</span>
                </section>
            </PaymentCardContainer>
        )
    }

    return (
        <CardContainer>
            <img src={coffee} alt="" />
            <div className='category'>
                {category.map(cat => {
                    return <span>{cat}</span>
                })}
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='money-form'>
                <span className='money'>R$</span>
                <span className='price'>9,90</span>
                <div>
                    <button onClick={handleCountMinus}>
                        <Minus />
                    </button>
                    <span>{count}</span>
                    <button onClick={handleCountPlus}>
                        <Plus />
                    </button>
                </div>
                <Button onClick={handleAddCar} card />
            </div>
        </CardContainer>
    )
}