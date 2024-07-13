import { useState } from "react";
import { useContext } from "react";
import getCEP from "../Service/api";
import cepContext from "../Context/cepContext";
import loadingContext from "../Context/loadingContext";
import {
    Box,
    TextBox,
    Search
} from "../Styles/formStyle";

function Form() {

    const [cep, setCep] = useState("");
    const { setResponseCep } = useContext(cepContext);
    const { loading, setLoading } = useContext(loadingContext);


    async function submitCep(e) {
        e.preventDefault();

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
                    name="cep"
                    value={cep}
                    maxLength="8"
                    disabled={loading}
                    onChange={e => setCep(e.target.value)}
                    required
                    ></TextBox>
                    <Search type="submit" disabled={loading}>
                        <ion-icon name="search-outline"></ion-icon>
                    </Search>
                </Box>
        </>
    )
}

export default Form;