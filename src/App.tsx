import NavBar from './Navigation/NavBar';
import Products from './Products/Products'
import Subnav from './Navigation/Subnav';


const App: React.FC = () => {
  
  return (
    <div className="w-auto ">
      
      <NavBar/>
      <Subnav/>
      <Products/>     
    </div>
  );
};

export default App;
