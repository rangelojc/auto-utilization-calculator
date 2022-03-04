import './css/App.css';

import styled from "styled-components";

import MetaForm from "./components/forms/meta";
import FuelForm from "./components/forms/fuel";
import BasicReport from "./components/reports/basic";
import PurchaseReport from "./components/reports/purchase";
import FuelReport from "./components/reports/fuel";

import { Wrapper } from './components/components';
import SummaryReport from './components/reports/summary';

const Body = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  width: 100%;
`

const Columns = styled.div`
  h2{
    margin-bottom: 10px;
  }
`

const CalculationCol = styled(Columns)`
  width: 60%;
  margin-right: 20px;
`

const ReportCol = styled(Columns)`
  width: 40%;
  margin-left: 20px;
  background: #f1f1f1;
  border-radius: 0px;
  padding: 0 20px 20px;
`

function App() {


  return (
    <div className="App">
      <Wrapper>
        <h2>Automotive Utilization Calculator</h2>
        <p>Calculate expenses of your car based on its overall costs.</p>

        <Body>
          <CalculationCol>
            <h3>Properties</h3>
            <MetaForm />
            <FuelForm />

          </CalculationCol>

          <ReportCol>
            <h3>Reports</h3>
            <br></br>
            <BasicReport />
            <br></br>
            <PurchaseReport />
            <br></br>
            <FuelReport />
            <br></br>
            <SummaryReport />
          </ReportCol>

        </Body>
      </Wrapper>


    </div>
  );
}

export default App;
