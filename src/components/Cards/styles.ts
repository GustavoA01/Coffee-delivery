import styled from "styled-components";

const BaseCard = styled.div`
    margin-top:3.4rem;
    display: flex;
    padding: 0 2.4rem 2rem 2.4rem;
    flex-direction: column;
    width: 25.6rem;
    height: 31rem;
    background: ${(props => props.theme['base-card'])};
    border-radius: 10px;
    
    .category{
        margin: auto;
        margin-bottom: 1.6rem;
        margin-top: 1.2rem;
        background: transparent;
        span{
            margin-left: 1rem;
            padding: 0.4rem 0.8rem;
            font-size: 1.2rem;
            background: ${(props => props.theme['yellow-light'])};
            color: ${(props => props.theme['yellow-dark'])};
            border-radius: 100px;
        }
    }

    img{
        align-self: center;
        width: 12rem;
        height: 12rem;
        margin-top: -3rem;
        background: transparent;
    }

    h1{
        font-family: 'Baloo 2', sans-serif;
        background: transparent;
        text-align: center;
    }

    .money, p{
        font-size: 1.4rem;
        color: ${(props => props.theme['base-label'])};
        margin-top: 0.8rem;
        margin-bottom: 1rem;
        text-align: center;
        background: transparent;
    }

    .price{
        font-size: 2rem;
        font-weight: bold;
    }

    .money-form{
        display: flex;
        gap: 0.5rem;
        background: transparent;

        .price{
            background: transparent;
            margin: auto;
        }

        .money{
            margin: auto;
        }

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            width: 7.2rem;
            height: 3.8rem;
            margin: auto;
            background: ${(props => props.theme['base-button'])};
            svg{
                width: 2rem;
                height: 3.8rem;
                background: transparent;
                color: ${(props => props.theme['purple'])};
                
            }

            span{
                background: transparent;
                font-size: 1.7rem;
                margin: 0 0.5rem 0 0.5rem;
            }

            button{
                border: none;
                background: transparent;
                cursor: pointer;
                
            }
        }
    }
`

export const PaymentCardContainer = styled(BaseCard)`
    display: flex;
    flex-direction: row;
    width: 37rem;
    height: 14rem;
    align-items: center;
    justify-content: center;
    margin-bottom: -3.5rem;

    .money-form{
        display: flex;
        flex-direction: column;
        margin: auto;

        section{
            display: flex;
            background: transparent;
            gap: 0.3rem;

            .trash{
                display: flex;
                align-items: center;
                font-size: 1.1rem;
                width: 110%;
                padding:1rem;
                
                &:hover{
                    border-radius: 8px;
                }

                svg{
                    width: 2rem;
                }
            }

            
        }
    }

    h1{
        font-size: 1.9rem;
    }

    img{
        margin-top: 1rem;
        width: 6rem;
        height: 6rem;
    }

    .price{
       background: transparent;
       padding: 0.5rem;
       margin-top:1.5rem;
    }

`

export const CardContainer = styled(BaseCard)`
    margin-bottom:2rem;
`