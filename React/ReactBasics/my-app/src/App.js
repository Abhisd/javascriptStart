import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserProfile from './Components/UserProfile';
import MyComponent from './Components/MyComponent';
import { Counter } from './Components/Counter';
import UserGreetings from './Components/UserGreetings';

function App() {
  return (
    <>
    <Header />
    <Counter/>
    <UserProfile name="Abhi" age="25" Occupation="Developer"/>
    <UserProfile name="Ram" age="45" Occupation="Developer"/>
    <UserProfile name="MSD" age="42" Occupation="GOAT"/>
    <UserProfile name="Dn" age="25" Occupation="Dongiri"/>
    <UserGreetings/>
    <MyComponent/>

    <Footer />
    
    </>
    
  );
}

export default App;
