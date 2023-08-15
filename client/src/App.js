import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
   <ChakraProvider>
    <Router>
      <Navbar />
      {/* main lists all the components we can route to. It is the content of the page */}
      <main> {/* <Routes></Routes> */} </main>
    </Router>
   </ChakraProvider>
  );
}

export default App;
