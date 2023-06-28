import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import MainPage from './components/main/MainPage';
import { CartContext, CartContextProvider } from './components/utils/cartContext';


function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <Header/>
        <MainPage/>
        <About/>
        <Contact/>
      </div>
    </CartContextProvider>
  );
}

export default App;
