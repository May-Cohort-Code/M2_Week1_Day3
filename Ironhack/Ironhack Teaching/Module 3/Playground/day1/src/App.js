import logo from './logo.svg';
import './App.css';
import Headline from './components/Headline';
import Footer from './components/Footer'
// App is a functional
function App() {
  // React components return jsx
  // inside of the return is what we see on the page
  return (
    <div className="App">
     <h1>First application</h1>
     <h2>Hello Cam</h2>
     <Headline />
     <Footer/>

    </div>
  );
}


// Default export
export default App;
