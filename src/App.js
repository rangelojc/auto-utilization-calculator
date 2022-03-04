import './css/App.css';

import styled from "styled-components";

import MetaForm from "./components/meta-form";
import BasicReport from "./components/basic-report"
import { Wrapper } from './components/components';

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
        <p>Calculate expenses of your car based on its purchase, maintenance and fuel prices.</p>

        <Body>
          <CalculationCol>
            <h3>Properties</h3>
            <MetaForm />
          </CalculationCol>

          <ReportCol>
            <h3>Reports</h3>
            <br></br>
            <BasicReport />
          </ReportCol>

        </Body>
      </Wrapper>


    </div>
  );
}

export default App;
