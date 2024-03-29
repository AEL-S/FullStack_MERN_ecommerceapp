import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
   <ChakraProvider>
    <Router>
      <Navbar />
      {/* main lists all the components we can route to. It is the content of the page */}
      <main> 
        <Routes>
              <Route path='/products' element=    {<ProductsScreen />}> 
              </Route>  
              <Route path='/cart' element=    {<CartScreen />}> 
              </Route>  
        </Routes>
         </main>
    </Router>
   </ChakraProvider>
  );
}

export default App;
