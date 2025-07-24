
import './App.css';
import Header from './myComponents/Header';
import Banner from './myComponents/Banner';
import BgVid from './myComponents/BgVid';
import Form from './myComponents/Form';
import AIagentsSection from './myComponents/AIagentsSection';
import RPAsection from './myComponents/RPAsection';

function App() {
  return (
    <>
      <BgVid />
      <div className="App">
        <Header />
        <Banner />
        <Form />
        <AIagentsSection />
        <RPAsection />
      </div>
    </>
  );
}

export default App;
