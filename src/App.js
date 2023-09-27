import './App.css';
import Nav from './Comps/Nav'
import Started from './Comps/Started';
import Features from './Comps/Features';
import Quality from './Comps/Quality';
import Steps from './Comps/Steps';
import Value from './Comps/Value';
import Pricing from './Comps/Pricing';
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
    </div>
  );
}

export default App;
