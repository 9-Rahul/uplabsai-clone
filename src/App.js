
import './App.css';
import Header from './myComponents/Header';
import Banner from './myComponents/Banner';
import BgVid from './myComponents/BgVid';
function App() {
  return (
    <>
      <BgVid />
      <div className="App">

        <Header />
        <Banner />
      </div>
    </>
  );
}

export default App;
