import styled from "styled-components";

export const Box= styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    }
`;
export const TextBox= styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 500px;
    height: 50px;
    padding-left: 10px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    cursor: text;
    ::placeholder{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    }
`;
export const Search = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 5px;
    width: 55px;
    height: 55px;
    border: none;
    cursor: pointer;
    background-color: blue;
        ion-icon{
            width: 23px;
            height: 23px;
            color: #FFFFFF;
        }
`;