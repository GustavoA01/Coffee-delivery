import { HomeContainer, MainContainer } from "./styles";
import { Header } from "../../components/Header";
import { Card } from "../../components/Cards"
import shopCar from '../../assets/icons/icon_shop_car.svg'
import box from '../../assets/icons/icon_box.svg'
import watch from '../../assets/icons/watch.svg'
import coffee from '../../assets/icons/coffee.svg'
import main_img from '../../assets/images/main_img.svg'

export function Home() {

    return (
        <HomeContainer>

            <Header />
            <MainContainer>
                <div id="text">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver,
                        a qualquer hora
                    </p>

                    <div>
                        <div>
                            <img src={shopCar} alt="" />
                            <span>Compra simples e segura</span>
                        </div>

                        <div>
                            <img src={box} alt="" />
                            <span>Embalagem mantém o café intacto</span>
                        </div>

                        <div>
                            <img src={watch} alt="" />
                            <span>Entrega rápida e rastreada</span>
                        </div>

                        <div>
                            <img src={coffee} alt="" />
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </div>
                </div>

                <img id="coffee-img" src={main_img} alt="" />
            </MainContainer>

            <h1 className="cards-title">Nossos cafés</h1>

            <div className="cards">
                <Card
                    key={1}
                    payment={false}
                    title={'Tradicional'}
                    description={'O Tradiconal café feito com água quente e grãos moidos'}
                    category={['Tradicional']}
                />

                <Card
                    key={2}
                    payment={false}
                    title={'Expresso Americano'}
                    description={'Expresso diluído, menos intenso que o tradicional'}
                    category={['Tradicional']}
                />

                <Card
                    key={3}
                    payment={false}
                    title={'Expresso Cremoso'}
                    description={'Café expresso tradicional com espuma cremosa e com leite'}
                    category={['Tradicional', 'Com leite']}
                />

                <Card
                    key={4}
                    payment={false}
                    title={'Expresso Gelado'}
                    description={'Bebida preparada com café expresso e cubos de gelo'}
                    category={['Tradicional', 'Gelado']}
                />

            </div>
        </HomeContainer>
    )
}