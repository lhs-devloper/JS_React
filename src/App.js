import './App.css';
import TestJson from './json/test.json';
import FilterProductTable from './components/FilterProductTable';
function App() {
  const products = TestJson;
  return (
    <FilterProductTable products={products}/>
  );
}

export default App;
