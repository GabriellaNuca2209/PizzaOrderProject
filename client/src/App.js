import Header from './components/header/Header';
import MainPage from './components/main/MainPage';
import Slider from './components/slider/Slider';
import { CartContextProvider } from './components/utils/cartContext';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header/>
        <Slider/>
        <MainPage/>
      </div>
    </CartContextProvider>
  );
}

export default App;
