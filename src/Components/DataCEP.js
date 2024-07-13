import {
    Container,
    ContainerBox,
    BoxInfo,
    Name,
    AdressInfo
} from "../Styles/dataCEPStyle";
import { useContext } from "react";
import cepContext from "../Context/cepContext";
import loadingContext from "../Context/loadingContext";

function DataCEP () {

    const { responseCep } = useContext(cepContext);
    const { code, state, city, district, address } = responseCep;
    const { loading, setLoading } = useContext(loadingContext);
    return (
        <Container>
            {responseCep.status === 200 && !loading?
                <ContainerBox>
                    <BoxInfo>
                        <Name>CEP</Name>
                        <AdressInfo>{code}</AdressInfo> 
                    </BoxInfo>
                    <BoxInfo>
                        <Name>Estado</Name>
                        <AdressInfo>{state}</AdressInfo> 
                    </BoxInfo>
                    <BoxInfo>
                        <Name>Cidade</Name>
                        <AdressInfo>{city}</AdressInfo> 
                    </BoxInfo>
                    <BoxInfo>
                        <Name>Bairro</Name>
                        <AdressInfo>{district}</AdressInfo> 
                    </BoxInfo>
                    <BoxInfo>
                        <Name>Rua</Name>
                        <AdressInfo>{address}</AdressInfo> 
                    </BoxInfo>
                </ContainerBox>
            :null}
        </Container>
    )
} 

export default DataCEP;