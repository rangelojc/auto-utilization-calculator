
import styled from 'styled-components';
import Switch from "react-switch";
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../store/configReducer';

const DarkModeSwitch = styled.label`
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
    position: absolute;
    top: 5px; right: 5px;

    span{
        font-size: 11px;
        margin-right: 5px;
        font-weight: 500;
    }

    .react-switch{
        vertical-align: middle;
    }
`

export default () => {
    const dispatch = useDispatch();

    const darkMode = useSelector(state => state.config.darkMode);

    return (
        <DarkModeSwitch>
            <Switch
                className="dark-mode-switch"
                onColor="#111"
                onHandleColor="#333"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
                onChange={() => { dispatch(setDarkMode(!darkMode)) }}
                checked={darkMode} />
        </DarkModeSwitch>
    )
}