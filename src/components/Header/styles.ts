import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin: 3.2rem 16rem 0 16rem;
    display: flex;
    justify-content: space-between;

    #logo{
        width: 8.5rem;
        height: 4rem;
    }

    a{
        text-decoration: none;
    }
    
    div{
        display: flex;
        gap: 1.2rem;
        
        #local{
            svg{
                width: 1.5rem;
                height: 2.1rem;
                color: ${(props => props.theme['purple'])};
                background: transparent;
            }
            
            span{
                background: transparent;
                color: ${(props => props.theme['purple-dark'])};
            }
            
            background: ${(props => props.theme['purple-light'])};
            display: flex;
            border: none;
            border-radius: 6px;
            align-items: center;
            padding: 0.8rem;
            gap: 0.5rem;

            &:hover{
                cursor: pointer;
            }
        }
    }
`