import './App.css';
import Nav from './Comps/Nav'
import Started from './Comps/Started';
import Features from './Comps/Features';
import Quality from './Comps/Quality';
import Steps from './Comps/Steps';
import Value from './Comps/Value';
import Pricing from './Comps/Pricing';
import Testimon from './Comps/Testimon';
import data from './data';
import FAQ from './Comps/FAQ';
function App() {
  return (
    <div className="App">
      <Nav />
      <Started />
      <Features />
      <Quality />
      <Steps />
      <Value />
      <Pricing />
      <Testimon data={data} />
      <FAQ />
    </div>
  );
}

export default App;
