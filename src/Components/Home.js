import styled from "styled-components";

function Home() {
	return (
		<Container>
			<TextBox
            placeholder="Digite o CEP"
            blank="borda"
            name="CEP"
            required
            ></TextBox>
            <Search>
                <ion-icon name="search-outline"></ion-icon>
            </Search>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextBox= styled.input`
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
    ::blank {
    border: 3px solid red;
    }
    cursor: text;
    ::placeholder{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    }
`;
const Search = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 5px;
    width: 55px;
    height: 55px;
    cursor: pointer;
    background-color: blue;
        ion-icon{
            width: 23px;
            height: 23px;
            color: #FFFFFF;
        }
`;

export default Home;