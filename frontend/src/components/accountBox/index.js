import React from "react";
import styled from "styled-components"
import { LoginForm } from "./loginForm";

const BoxContainer = styled.div`
    width: 300px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    paddiing: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled.div`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(24,150,185);
    background: linear-gradient(
        180deg, 
        rgba(24,150,185,1) 0%, 
        rgba(24,179,185,1) 35%, 
        rgba(21,218,203,1) 100%
    );
`;

const HeaderContainer = styled.h2`
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
`;

const HeaderText = styled.h2`
        font-size: 30px;
        font-weight: 500;
        line-height: 1.25;
        font-family: var(--font-family);
        color: #fff;
        z-index: 10;
        margin: 0;
`;

const SmallText = styled.h5`
        color: #fff;
        font-weight: 400;
        font-size: 11px;
        z-index: 10;
        margin-top: 7px;
`;

const InnerContainer = styled.div`
        width: 100%;
        display: flex; 
        flex-direction: column;
        padding: 0 1em;
`;

export function AccountBox(props) {
    return<BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer >
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            <LoginForm>

            </LoginForm>
        </InnerContainer>
    </BoxContainer>
}