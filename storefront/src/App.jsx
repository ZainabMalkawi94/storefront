import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import Categories from './Components/Categories/index';
import Products from './Components/Products/index';
import { Provider } from 'react-redux';
import store from './store/index';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Provider store={store}>
        <div className="content">
          <Categories />
          <Products />
        </div>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;