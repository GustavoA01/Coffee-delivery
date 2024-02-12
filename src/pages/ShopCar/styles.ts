import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    margin: 9.4rem 16rem 0 16rem;
    gap: 3.2rem;
`

export const Delivery = styled.div`
    display: flex;
    flex-direction: column;

    svg{
        margin-right: 0.8rem;
        color: ${(props => props.theme['yellow-dark'])};
        background: transparent;
    }

    h1{
        margin-left: 4rem;
        margin-top: -4rem;
        
    }

    h2{
        margin:4rem 0 1rem 4rem;
        background: transparent;
    }

    p{
        background: transparent;
        margin-left: 4rem;
    }

    margin-top: 3.2rem;
    width: 64rem;
    height: 33rem;
    background: ${(props => props.theme['base-card'])};
    border-radius: 6px;
    font-size: 1.4rem;
`

export const FormAddress = styled.form`
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    margin: 3.2rem 4rem 4rem 4rem;
    gap: 1.2rem;
    
    input{
        width: 27rem;
        border-radius: 4px;
        border: none;
        background: ${(props => props.theme['base-button'])};
        padding: 1.2rem;

        &:last-of-type{
            width: 55rem;
        }
    }

`

export const Payment = styled.div`
    width: 64rem;
    height: 40rem;
    border-radius: 6px;
    margin-bottom: 3rem;
    background: ${(props => props.theme['base-card'])};
    font-size: 1.4rem;
    svg{
        color: ${(props => props.theme['purple'])} !important;
    }
    
    div{
        background: transparent;
        display: flex;
        padding: 4rem 4rem 4rem 4rem;
        gap: 1.2rem;
        justify-content: center;
        align-items: center;
    }

    button{
        width: 17.8rem;
        height: 5rem;
        border: none;
        border-radius: 6px;
        background: ${(props => props.theme['base-button'])} !important;
        font-size: 1.4rem;
        &:hover{
            background: ${(props => props.theme['base-hover'])} !important;
            cursor: pointer;
        }
        
        &:focus{
            border: 2px solid;
            border-color: ${(props => props.theme['purple-dark'])} !important;
            background: ${(props => props.theme['base-hover'])} !important;
        }
        
    }
`

export const Request = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
    margin-bottom: 5rem;

    
    .cards{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .finish{
        display: flex;
        flex-direction: column;
        height: 36rem;
        background: ${(props => props.theme['base-card'])};
        padding: 4rem;
        gap: 2.4rem;
        width:37rem ;
        height: 25rem;
        border-radius: 6px;
        
        .container{
            display: flex;
            flex-direction: column;
            gap:1.2rem ;
            height: 9.2rem;
            background: transparent;
            
            div{
                background: transparent;
                display: flex;
                font-size: 1.8rem;
                justify-content: space-between;
                span,strong{
                    
                    background: transparent;
                }
            }
            
        }
        
        button,a{
            display: block;
            height: 4.6rem;
            border-radius: 6px;
            width: 100%;
            color: ${(props => props.theme['white'])};
            background: ${(props => props.theme['yellow'])};
            border: none;
            cursor: pointer;

            &:hover{
                background: ${(props => props.theme['yellow-dark'])}
            }

            &:disabled{
                cursor: not-allowed;
            }

        }
        
        a{
            text-decoration: none;
            display: flex;
            justify-content: center;
            width: 100%;
    
            &:disabled{
                cursor: not-allowed;
            }
        }
    }
`