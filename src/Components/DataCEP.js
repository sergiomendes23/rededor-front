import { useContext } from "react";
import cepContext from "../Context/cepContext";
import loadingContext from "../Context/loadingContext";
import { ThreeDots } from 'react-loader-spinner'
import {
    Container,
    ContainerBox,
    BoxInfo,
    Name,
    AdressInfo,
    Status,
    MessageStatus,
    ContainerStatus
} from "../Styles/dataCEPStyle";

function DataCEP () {

    const { responseCep } = useContext(cepContext);
    const { code, state, city, district, address, message } = responseCep;
    const { loading} = useContext(loadingContext);

    return (
        <Container>
            {loading?<ThreeDots color="grey" />:null}
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
            {(responseCep.status === 404 || responseCep.status === 400 || responseCep.status === 500)  && !loading?
            <ContainerStatus>
                <Status>Status</Status>
                <MessageStatus>{message}</MessageStatus> 
            </ContainerStatus>
            : null}
        </Container>
    )
    
} 

export default DataCEP;