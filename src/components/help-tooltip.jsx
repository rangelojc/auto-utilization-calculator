import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const HelpTooltipStyle = styled.span`
    height: 15px;
    width: 15px;
    display: inline-block;
    vertical-align: middle;
    margin-left: auto;
    cursor: pointer;
    flex-shrink: 0;

    img{
        height: 100%;
        width: 100%;
    }
`

export default ({ dataTip }) => {
    return (
        <>
            <HelpTooltipStyle data-tip={dataTip} data-multiline="true" >
                <img src='./assets/help.png'></img>
            </HelpTooltipStyle>
            <ReactTooltip></ReactTooltip>
        </>

    )
}