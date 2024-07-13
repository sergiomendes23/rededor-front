import { useState } from "react";
import { useContext } from "react";
import getCEP from "../Service/api";
import cepContext from "../Context/cepContext";
import loadingContext from "../Context/loadingContext";
import {
    Box,
    TextBox,
    Search
} from "../Styles/FormStyle";

function Form() {

    const [cep, setCep] = useState("");
    const { setResponseCep } = useContext(cepContext);
    const { setLoading } = useContext(loadingContext);


    async function submitCep(e) {
        e.preventDefault();
        console.log('aaaaaa', setResponseCep)

        try {
            const cepData = await getCEP(cep)
            console.log(cepData)
            setResponseCep(cepData)
            setLoading(false)
            setCep("")
        } catch (error) {
            setCep("")
            setLoading(false)
            alert(error)
        }
    }
    
    return(
        <>
            <Box onSubmit={submitCep}>
                    <TextBox 
                    placeholder="Digite o CEP"
                    type = "text"
                    id="cep"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    maxLength="8"
                    required
                    ></TextBox>
                    <Search type="submit">
                        <ion-icon name="search-outline"></ion-icon>
                    </Search>
                </Box>
        </>
    )
}

export default Form;