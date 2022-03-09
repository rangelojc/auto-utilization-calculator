import './css/App.css';
import { useSelector } from 'react-redux';

import StandardPage from './pages/standard';
import AdvancedPage from './pages/advanced';

function App() {
  const urlParams = window.location.search.slice(1)
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  const isAdvanced = urlParams.advanced === "true";

  const darkMode = useSelector(state => state.config.darkMode)

  return (
    <div className={"App " + (darkMode ? "dark" : "")}>
      {
        isAdvanced ? <AdvancedPage /> : <StandardPage />
      }
    </div >
  );
}

export default App;
