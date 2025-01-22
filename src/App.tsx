// src/App.tsx
import Nav from './components/Nav/nav';
import Hero from './components/Hero/hero';
import Pricing from './components/pricing/services';
import './App.css'; // Import the CSS for styling

function App() {
  

  return (
    <main>
   
        <Nav />
     
    
        <Hero />
   
   
        <Pricing />
   
      {/* Add more sections as needed */}
    </main>
  );
}

export default App;