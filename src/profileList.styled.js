
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items:center;
max-width: 100%;
border-radius:1rem;
border:1rem gray;
`;

export const Box = styled.div`
display: flex;
width: 70%;
flex-direction: column;
padding: 1rem;
margin: 1rem;
background-color: ${props => props.bgColor};
height: 100%;
`;

export const BoxTitle = styled.h3`
color: #333;
font-size: 2rem;
text-align: center;
font-size: 1rem;
`;

export const BoxText = styled.p`
margin-top: 0.3rem;
color: #666;
font-size: 1rem;
`;