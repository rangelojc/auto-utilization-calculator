
import styled from 'styled-components';
import Switch from "react-switch";
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../store/configReducer';

const DarkModeSwitch = styled.div`
    position: absolute;
    top: 5px; right: 5px;

    span{
        font-size: 11px;
        margin-right: 10px;
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
                className="react-switch"
                onColor="#111"
                onHandleColor="#444"
                offColor="#e0e0e0"
                offHandleColor="#b9b9b9"
                checkedIcon={<img src="./assets/moon.png" style={{ height: "18px", margin: "1px 0 0 10px" }} />}
                uncheckedIcon={<img src="./assets/sun.png" style={{ height: "20px", margin: "0px 0 0 3px" }} />}
                handleDiameter={20}
                height={20}
                width={50}
                onChange={() => { dispatch(setDarkMode(!darkMode)); }}
                checked={darkMode} />
        </DarkModeSwitch>
    )
}