import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <Header/>
      <Search />
      <Table />
    </div>
  );
}

export default App;
