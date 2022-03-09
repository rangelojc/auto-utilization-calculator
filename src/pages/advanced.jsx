import styled from "styled-components";
import { createPDFfromHTML } from "../utils/utils.js"
import { useSelector, useDispatch } from 'react-redux';

import Footer from "../components/footer";

import MetaForm from "../components/forms/meta";
import FuelForm from "../components/forms/fuel";
import InsuranceForm from "../components/forms/insurance";
import ServiceForm from "../components/forms/service";
import ModsForm from "../components/forms/mods";

import BasicReport from "../components/reports/basic";
import PurchaseReport from "../components/reports/purchase";
import FuelReport from "../components/reports/fuel";
import InsuranceReport from "../components/reports/insurance";
import ServiceReport from "../components/reports/service";
import ModsReport from "../components/reports/mods.jsx";

import { Wrapper } from '../components/components';
import SummaryReport from '../components/reports/summary';

import breakpoint from '../utils/breakpoints';

const Body = styled.div`
  width: 100%;
  margin-top: 20px;

  @media only screen and ${breakpoint.device.lg}{
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
  }
`

const Columns = styled.div`
  h2{
    margin-bottom: 10px;
  }
`

const CalculationCol = styled(Columns)`
  width: 100%;

  @media only screen and ${breakpoint.device.lg}{
    width: 60%;
    margin-right: 20px;
  }
`

const ReportCol = styled(Columns)`
  width: 100%;
  background: #f1f1f1;
  border-radius: 0px;
  padding: 0 20px 20px;
  margin-top: 50px;

  @media only screen and ${breakpoint.device.lg}{
    width: 40%;
    margin-left: 20px;
    margin-top: 0;
  }
`

const DownloadButton = styled.button`
    height: 40px;
    width: 100%;
    border: 0;
    border-radius: 0px;
    cursor: pointer;
    background: #9c44ac;
    font-size: 1.2em;

    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

`


function AdvancedPage() {
  const carInfo = useSelector(state => {
    if (!state.meta.year || !state.meta.make || !state.meta.model) return "Unnamed Car";
    else return `${state.meta.year} ${state.meta.make} ${state.meta.model}`
  })

  return (
    <Wrapper>
      <h2 style={{ color: "#9c44ac" }}>Automotive Utilization Calculator (Advanced)</h2>
      <p style={{ margin: "5px 0" }}>Calculate expenses of your car based on its overall costs including insurance and service history.</p>

      <Body>
        <CalculationCol>
          <MetaForm />
          <FuelForm />
          <InsuranceForm />
          <ServiceForm />
          <ModsForm />
        </CalculationCol>

        <ReportCol>
          <div id="reports_cont">
            <br></br>
            <BasicReport />
            <br></br>
            <PurchaseReport />
            <br></br>
            <FuelReport />
            <br></br>
            <InsuranceReport />
            <br></br>
            <ServiceReport />
            <br></br>
            <ModsReport />
            <br></br>
            <SummaryReport />
          </div>

          <DownloadButton onClick={() => { createPDFfromHTML(carInfo) }}>Download</DownloadButton>
        </ReportCol>
      </Body>
      <Footer></Footer>
    </Wrapper>
  );
}

export default AdvancedPage;
