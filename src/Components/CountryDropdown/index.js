import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const CountryDropdown =() => {

    const [isOpenModel, setisOpenModel] = useState(false);
    const [selectedTab, setsetlectTab] = useState(null);
    const [countryList, setcountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry = (index) =>{
        setsetlectTab(index);
        setisOpenModel(false);
    }

    useEffect(()=>{
        setcountryList(context.countryList);
    },[])

    const filterList=(e) =>{
        const keyword = e.target.value.toLowerCase();

        if (keyword !== ""){
            const list = countryList.filter((item) =>{
                return item.country.toLowerCase().includes(keyword);
            });
            setcountryList(list);
        } else {
            setcountryList(context.countryList);
        }
    }

    return(
        <>
        <Button className='countryDrop' onClick={()=>setisOpenModel(true)}>
            <div className='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                <span className='name'>India</span>
            </div>
            <span className='ms-auto'><FaAngleDown/></span>
        </Button>

        <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)} className='locationModel' TransitionComponent={Transition}>
            <h4 className='mb-0'>Choose your Delivery Location</h4>
            <p>Enter your address and we'll specify the offer for your area.</p>
            <Button className='close_' onClick={()=>setisOpenModel(false)}><MdClose/></Button>

            <div className='headerSearch w-100'>
                <input type='text' placeholder='Search your area...' onChange={filterList}/>
                <Button><IoIosSearch/></Button>
            </div>

            <ul className='countryList mt-3'>
            {
                countryList?.length!==0 && countryList?.map((item,index)=>{
                    return(
                        <li key={index}><Button onClick={()=>selectCountry(index)} 
                        className={`${selectedTab === index ? 'active' : ''}`}
                        >{item.country}</Button></li>
                    )
                })
            }
            </ul>
        </Dialog>

        </>
    )
}

export default CountryDropdown;