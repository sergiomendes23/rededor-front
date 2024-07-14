import Form from "./Form";
import DataCEP from "./DataCEP";
import pesquisador from "../Assets/Images/pesquisador.png";
import {
    Container
} from "../Styles/homeStyle";

function Home() {
	return (
		<Container>
			<img src={pesquisador} />
            <Form />
			<DataCEP />
		</Container>
	);
}

export default Home;