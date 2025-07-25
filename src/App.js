
import './App.css';
import Header from './myComponents/Header';
import Banner from './myComponents/Banner';
import BgVid from './myComponents/BgVid';
import Form from './myComponents/Form';
import AIagentsSection from './myComponents/AIagentsSection';
import RPAsection from './myComponents/RPAsection';
import DataAnalytics from './myComponents/DataAnalytics';
import AbouUs from './myComponents/AbouUs';
import Footer from './myComponents/Footer';

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
        <DataAnalytics />
        <AbouUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
