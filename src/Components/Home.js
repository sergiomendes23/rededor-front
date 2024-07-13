import Form from "./Form";
import DataCEP from "./DataCEP";
import {
    Container
} from "../Styles/homeStyle";

function Home() {
	return (
		<Container>
            <Form />
			<DataCEP />
		</Container>
	);
}

export default Home;