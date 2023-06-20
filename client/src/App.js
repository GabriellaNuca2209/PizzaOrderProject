import Header from './components/header/Header';
import MainPage from './components/main/MainPage';
import { CartContextProvider } from './components/utils/cartContext';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Header/>
        <MainPage/>
      </div>
    </CartContextProvider>
  );
}

export default App;
