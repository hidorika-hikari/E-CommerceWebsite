import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import ProductModel from "./Components/ProductModel";

const MyContext = createContext();

function App() {

  const [countryList,setCountryList] = useState([]);
  const [selectedCountry,setselectedCountry] = useState('');
  const [isOpenProductModel,setIsOpenProductModel] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModel,
    setIsOpenProductModel
  }
  return (  
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/cat/:id" exact={true} element={<Listing/>}/>
      </Routes>
      <Footer/>
      {
        isOpenProductModel === true && <ProductModel/>
      }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}