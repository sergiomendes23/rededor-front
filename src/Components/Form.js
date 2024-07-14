import { useState } from "react";
import { useContext } from "react";
import InputMask from 'react-input-mask';
import getCEP from "../Service/api";
import cepContext from "../Context/cepContext";
import loadingContext from "../Context/loadingContext";
import {
    Box,
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
                    <InputMask 
                    placeholder="Digite o CEP"
                    type = "text"
                    name="cep"
                    mask = "99999-999"
                    maxLength="9"
                    value={cep}
                    maskChar ={null}
                    disabled={loading}
                    onChange={e => setCep(e.target.value)}
                    required
                    ></InputMask>
                    <Search type="submit" disabled={loading}>
                        <ion-icon name="search-outline"></ion-icon>
                    </Search>
                </Box>
        </>
    )
}

export default Form;