import styled from "styled-components";

export const Container = styled.div`
	width: 400px;
	height: 260px;
    margin-top: 30px;
`;

export const ContainerBox = styled.div`
	width: 100%;
	height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const BoxInfo = styled.div`
    width: 400px;
    height: 50px;
    margin: 10px;
    display: flex;
    border-radius: 5px;
    border: 1px solid grey;
`;
export const Name = styled.div`
	width: 30%;
	height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: blue;
    border-radius: 5px 0px 0px 5px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
`;
export const AdressInfo = styled.div`
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
`;

export const ContainerStatus = styled.div`
	width: 400px;
	height: 50px;
    display: flex;
    border-radius: 5px;
    border: 1px solid grey;
`;

export const Status = styled.div`
	width: 30%;
	height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: blue;
    border-radius: 5px 0px 0px 5px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
`;

export const MessageStatus = styled.div`
	width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
`;