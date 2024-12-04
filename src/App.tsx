import NavBar from './Navigation/NavBar';
import Products from './Products/Products'
// import Recommended from './Recommend/Recommended';
import Subnav from './Navigation/Subnav';

const App: React.FC = () => {

  return (
    <div className="w-full h-screen">
      <NavBar/>
      <Subnav/>
      <Products/>      
    </div>
  );
};

export default App;
