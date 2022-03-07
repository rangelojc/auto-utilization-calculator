import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

const Foot = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 20px;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
`
const Links = styled.div`
    display: flex;
    flex-flow: column nowrap;
    font-size: 16px;
`

const Author = styled.div`
    margin-top: 50px;
    font-size: 17px;
`

function Footer() {
    const isAdvanced = useSelector(state => state.config.advanced);
    const _currencyParam = useSelector(state => state.config._currencyParam);
    const _unitParam = useSelector(state => state.config._unitParam);

    const config = `&currency=${_currencyParam}&unit=${_unitParam}`;

    return (
        <Foot>
            <Links>
                {
                    isAdvanced ? <span>Check out the <a href={`?advanced=false${config}`}>standard calculator</a>. </span>
                        : <span>Check out the <a href={`?advanced=true${config}`}>advanced calculator</a>. </span>
                }
                <div style={{ marginTop: 5 }}>
                    Calculator is available in&nbsp;
                    <a href={`?advanced=${isAdvanced}&currency=usd&unit=imperial`}>USD</a>,&nbsp;
                    <a href={`?advanced=${isAdvanced}&currency=gbp&unit=imperial`}>GBP</a>,&nbsp;
                    <a href={`?advanced=${isAdvanced}&currency=eur&unit=metric`}>EUR</a>&nbsp;and&nbsp;
                    <a href={`?advanced=${isAdvanced}&currency=php&unit=metric`}>PHP</a>.
                </div>
                <div style={{ marginTop: 5 }}>
                    Change measurement system:&nbsp;
                    <a href={`?advanced=${isAdvanced}&currency=${_currencyParam}&unit=metric`}>Metric</a>&nbsp;or&nbsp;
                    <a href={`?advanced=${isAdvanced}&currency=${_currencyParam}&unit=imperial`}>Imperial</a>&nbsp;
                </div>
            </Links>
            <Author>©️ Ramce Concepcion</Author>
        </Foot>
    );
}

export default Footer;
