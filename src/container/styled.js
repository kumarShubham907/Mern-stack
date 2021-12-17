import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { Button } from "./button"
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
`
export const Container = styled.div`
position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    
`
export const UnList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border: 1px solid ${({UnOrderLine})=>UnOrderLine};
    padding: 0.5rem;
    border-radius: 4px;
    margin: 10px 0;
`
export const List = styled.li`
    width: 100%;
`
export const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #111;
    padding: 0.3rem 0.5rem;
`
export const ButtonStyed = styled(Button)`
    padding: 0.4rem 0.9rem;
    background: none;
    outline: none;
    border: none;
    border: 1px solid ${({border})=>border};
    color: ${({color})=>color};
    cursor: pointer;
    background: ${({bg})=>bg};
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    &:hover{
        background: ${({bghover})=>bghover};
        color: ${({colorhover})=>colorhover};
        border: 1px solid ${({borderhover})=>borderhover};
    }
`

