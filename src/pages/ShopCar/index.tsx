import { Header } from "../../components/Header";
import { MapPin, CurrencyDollarSimple, Money, CreditCard } from "phosphor-react"
import { MainContainer, Delivery, FormAddress, Request, Payment } from "./styles";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Contexts/contextCard";
import { Card } from "../../components/Cards";
import { InfoContext } from "../../Contexts/contextAddress";
import { ContextPayment } from "../../Contexts/contextPayment";
import { Link } from "react-router-dom";


export function ShopCar() {

    const { products } = useContext(ProductContext);
    const { setInfo } = useContext(InfoContext)
    const { setPayment } = useContext(ContextPayment)
    const [totalItens, setTotal] = useState(0);
    const [totalToPay, setTotalToPay] = useState(0)
    const [isFilled, setIsFilled] = useState(false)
    const [isPaymentFormSelected, setIsPaymentFormSelected] = useState(false)

    useEffect(() => {
        const sum = products.reduce((accumulator, product) => {
            return accumulator + (product.counter || 0);
        }, 0);

        setTotal(sum);
    }, [products]);

    useEffect(() => {
        setTotalToPay(((totalItens * 9.90) + 3.50))
    }, [totalItens])

    function handleSubmit() {
        const streetValue = document.getElementById('street').value
        const cityValue = document.getElementById('city').value
        const complementValue = document.getElementById('complement').value
        const numberValue = document.getElementById('number').value
        const CEPValue = document.getElementById('cep').value
        const UFValue = document.getElementById('uf').value
        const neighborhoodValue = document.getElementById('neighborhood').value


       // if(
         //   numberValue===number CEPValue UFValue complementValue)

        const addressInfo = {
            street: streetValue,
            city: cityValue,
            complement: complementValue,
            CEP: CEPValue,
            UF: UFValue,
            neighborhood: neighborhoodValue,
            number: numberValue
        }

        setInfo(addressInfo)
    }

    function handleInfo() {
        const streetValue = document.getElementById('street').value
        const cityValue = document.getElementById('city').value
        const numberValue = document.getElementById('number').value
        const CEPValue = document.getElementById('cep').value
        const UFValue = document.getElementById('uf').value
        const neighborhoodValue = document.getElementById('neighborhood').value

        const isEmpty = ((streetValue && numberValue && neighborhoodValue && cityValue && UFValue && CEPValue) != "")
        setIsFilled(isEmpty)
    }

    function handlePayment() {
        const paymentForm = {
            card: event?.target.textContent,
            total: totalToPay
        }

        setPayment(paymentForm)
        setIsPaymentFormSelected(true)
    }

    return (
        <div>
            <Header />

            <MainContainer>
                <Delivery>
                    <h1>Complete seu pedido</h1>

                    <h2><MapPin />Endereço de entrega</h2>
                    <p>Informe o endereço onde quer receber seu pedido</p>

                    <FormAddress>

                        <input required onChange={handleInfo} id="street" type="text" placeholder="Rua" />
                        <input required onChange={handleInfo} id="number" type="text" placeholder="Número" />
                        <input id="complement" type="text" placeholder="Complemento" />
                        <input required onChange={handleInfo} id="neighborhood" type="text" placeholder="Bairro" />
                        <input required onChange={handleInfo} id="city" type="text" placeholder="Cidade" />
                        <input required onChange={handleInfo} id="uf" type="text" placeholder="UF" />
                        <input required onChange={handleInfo} id="cep" type="text" placeholder="CEP" />

                    </FormAddress>

                    <Payment>
                        <h2><CurrencyDollarSimple />Pagamento</h2>
                        <p>O pagamento é feito na entrega. escolha a forma que deseja pagar</p>

                        <div>
                            <button onClick={handlePayment}><CreditCard />CARTÃO DE CRÉDITO</button>
                            <button onClick={handlePayment}><CreditCard />CARTÃO DE DÉBITO</button>
                            <button onClick={handlePayment}><Money />DINHEIRO</button>
                        </div>
                    </Payment>

                </Delivery>


                <Request>

                    <div className="cards">

                        {products.map(product => {
                            return (
                                <Card
                                    payment
                                    title={product.title}
                                    description={product.description}
                                    category={product.category}
                                    counter={product.counter}
                                />
                            )
                        })
                        }

                    </div>

                    <section className="finish">
                        <div className="container">

                            <div>
                                <span>Total de itens</span>
                                <span>{totalItens}</span>
                            </div>

                            <div>
                                <span>Entrega</span>
                                <span>R$ 3,50</span>
                            </div>

                            <div>
                                <span><strong>Total</strong></span>
                                {products.length === 0 ? (
                                    <span>R$ 0</span>
                                ) : (
                                    <span>R$ {(totalToPay.toFixed(2)).replace(/\./g, ',')}</span>
                                )
                                }
                            </div>
                        </div>

                        {(products.length === 0 || (isPaymentFormSelected === false) || (isFilled === false)) ? (
                            <button id="confirm-button" disabled>CONFIRMAR PEDIDO</button>
                        ) : (
                            <Link to="/Confirmed">
                                <button id="confirm-button" onClick={handleSubmit}>CONFIRMAR PEDIDO</button>
                            </Link>
                        )
                        }

                    </section>

                </Request>

            </MainContainer>
        </div>
    )
}