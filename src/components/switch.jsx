
import styled from 'styled-components';
import Switch from "react-switch";

const ItemizedExpensesSwitch = styled.label`
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;

    span{
        font-size: 11px;
        margin-right: 5px;
        font-weight: 500;
    }

    .react-switch{
        vertical-align: middle;
    }
`

export default ({ val, set }) => {
    return (
        <ItemizedExpensesSwitch>
            <span>Itemized?</span>
            <Switch
                className="react-switch"
                onColor="#e4cbe9"
                onHandleColor="#9c44ac"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                height={15}
                width={30}
                onChange={() => { set(!val) }}
                checked={!val} />
        </ItemizedExpensesSwitch>
    )
}