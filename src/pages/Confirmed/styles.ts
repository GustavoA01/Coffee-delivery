import styled from "styled-components";

export const ConfirmedContainer = styled.div`
    main{
        display: flex;
        margin: 16rem;
        gap: 10rem;

        h1{
            font-size: 2.9rem;
            font-family: 'Ballo 2',sans-serif;
            color: ${props=>props.theme['yellow-dark']};
            font-weight: 800;
        }

        h2{
            margin-top: 4rem;
            margin-bottom: 4rem;
            font-size: 1.9rem;
        }

        section{
            display: flex;
            flex-direction: column;
            gap: 3.2rem;

            div{
                display: flex;
                align-items: center;
                gap: 2rem;
                font-size: 1.8rem;
            }
        }
    }
`