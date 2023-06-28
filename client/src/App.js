import About from './components/about/About';
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
      </div>
    </CartContextProvider>
  );
}

export default App;
