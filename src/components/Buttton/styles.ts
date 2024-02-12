import styled from "styled-components";

const BaseButton = styled.button`
    width: 3.8rem;
    height: 3.8rem;
    border: none;
    border-radius: 6px;
`

export const HeaderButton = styled(BaseButton)`
    background-color: ${props=>props.theme['yellow-light']};
    
    img{
        background: transparent;
    }

    &:hover{
        cursor: pointer;
    }
`

export const CardButton = styled(BaseButton)`
    background-color: ${props=>props.theme['purple']};
    width: 3.8rem;
    height: 3.8rem;
    svg{
        background: transparent;
        width: 1.9rem;
        height: 1.9rem;
        color: ${props=>props.theme['white']};
    }
    
    &:hover{
        background-color: ${props=>props.theme['purple-dark']};
        cursor: pointer;
    }
`