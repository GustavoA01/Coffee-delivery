import styled from "styled-components";

export const HomeContainer = styled.div`
    .cards-title{
        margin: 10rem 16rem 5rem;
        font-size:2.5rem;
    }

    .cards{
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-left: 16rem;
    }
`

export const MainContainer = styled.main`
    display: flex;
    margin: 9.4rem 16rem 0 16rem;


    #text{
        display: flex;
        flex-direction: column;
        font-size: 1.8rem;
        gap: 6rem;

        p{
            margin-top: -2.7rem;
        }

        div{
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;

            span{
                font-size: 1.6rem;
                margin: auto;
            }

        }
    }

    #coffee-img{
        width: 44.5rem;
        height: 33rem;
    }

`