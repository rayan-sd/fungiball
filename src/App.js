import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Skills from './components/Skills';
import Series from './components/Series';
import Roadmap from './components/Roadmap1';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {

  const dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-245796793-1');
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Navbar />
        <Hero />
        <Collection />
        <Skills />
        <Series />
        <Roadmap />
        <Team />
        <Faq />
        <Footer />
      {/* </header> */}
      {/* <Hero />
      <Collection />
      <Skills />
      <Series/>
      <Roadmap />
      <Team />
      <Faq />
      <Footer /> */}
    </div>
  );
}

export default App;
