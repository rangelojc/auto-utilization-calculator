import './css/App.css';

import StandardPage from './pages/standard';
import AdvancedPage from './pages/advanced';

function App() {

  const urlParams = window.location.search.slice(1)
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});;

  const isAdvanced = urlParams.advanced === "true";

  return (
    <div className="App">
      {
        isAdvanced ? <AdvancedPage /> : <StandardPage />
      }
    </div >
  );
}

export default App;
