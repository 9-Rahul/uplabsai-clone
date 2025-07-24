
import './App.css';
import Header from './myComponents/Header';
import Banner from './myComponents/Banner';
import BgVid from './myComponents/BgVid';
import Form from './myComponents/Form';

function App() {
  return (
    <>
      <BgVid />
      <div className="App">
        <Header />
        <Banner />
        <Form />
      </div>
    </>
  );
}

export default App;
