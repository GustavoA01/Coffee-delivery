import { Header } from "../../components/Header"
import watch from '../../assets/icons/watch.svg'
import money from '../../assets/icons/circle$.svg'
import local from '../../assets/icons/circleLocation.svg'
import moto from '../../assets/images/moto.svg'
import { ConfirmedContainer } from "./styles"
import { useContext } from "react"
import { InfoContext } from "../../Contexts/contextAddress"
import { ContextPayment } from "../../Contexts/contextPayment"


export function Confirmed() {

    const {userInfo} = useContext(InfoContext)
    const {pay} = useContext(ContextPayment)

    return (
        <ConfirmedContainer>
            <Header />

            <main>
                <div>

                    <h1>
                        Uhu! Pedido confirmado
                    </h1>

                    <h2>Agora é só aguardar que logo o café chegará até você</h2>

                    <section>
                        <div>
                            <img src={local} alt="" />
                            <p>Entrega em: <strong>Rua {userInfo.street}</strong></p>
                        </div>

                        <div>
                            <img src={watch} alt="" />
                            <p>Previsão de entrega: <strong>20 min- 30 min</strong></p>
                              
                        </div>

                        <div>
                            <img src={money} alt="" />
                            <p>Pagamento na entrega: <strong>{pay.card}. Total: R$ {((pay.total).toFixed(2)).replace(/\./g, ',')} </strong></p>
                        </div>
                    </section>
                </div>

                <img src={moto} alt="" />
            </main>
        </ConfirmedContainer>
    )
}