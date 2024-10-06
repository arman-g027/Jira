import Header from "./components/global/Header";
import Register from "./pages/register";
import Login from "./pages/login";
import './styles/global.css';


const App = () => {
  return (
    <div id="div_container">
      <Header />
      <Register />
      <hr />
        <Login />
    </div>
  )
};

export default App;
