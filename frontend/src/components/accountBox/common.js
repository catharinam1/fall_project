import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%,
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(190, 190, 190);
    font-weight: 500;
    text-decoration: none;
    padding: 10px;
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(24,150,185);
    font-weight: 500;
    text-decoration: none;
`;

export const Input = styled.input`
    height: 40px;
    width: 100%;
    margin: 5px 0px 0px 0px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    box-sizing: border-box;
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.3);
    color: rgba(150, 150, 150, 1);

    &::placeholder  {
        color: rgba(190, 190, 190);
    }
    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.5);
    }
    &:focus {
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    border: none;
    font-size: 14px;
    font-weight: 300;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 1s ease-in-out;
    background: rgb(24,150,185);
    background: linear-gradient(
        90deg, 
        rgba(24,150,185,1) 0%, 
        rgba(24,179,185,1) 35%, 
        rgba(21,218,203,1) 100%
    );

    &:hover {
        background: rgba(21,218,203,1);
        background: linear-gradient(
            90deg,
            rgba(21,218,203,1) 0%,  
            rgba(24,179,185,1) 35%, 
            rgba(24,150,185,1) 100%
        );
    }
    
`;

