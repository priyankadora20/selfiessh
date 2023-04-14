import logo from './logo.svg';
import './App.css';
import Footer from "./pages/footer";
import Carousel from './pages/carousel';
import Baseimages from './pages/baseimages';


function App() {

  return (
    <>
    
      <div className="App">

      <h1> FROM OUR BLOG </h1>
        <Carousel/>
        <Baseimages/>
        

      
      </div>
      <Footer />
      
    </>
    
  );
}

export default App;
