import styled from "styled-components";

export const Box= styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    }
    input {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 500px;
    height: 50px;
    padding-left: 10px;
    color: #000000;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    cursor: text;
        ::placeholder{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 20px;
            color: #000000;
        }
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
            width: 25px;
            height: 25px;
            color: #FFFFFF;
        }
`;