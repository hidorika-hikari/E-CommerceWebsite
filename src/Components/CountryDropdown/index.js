import Button from '@mui/material/Button'
import { FaAngleDown } from 'react-icons/fa';

const CountryDropdown =() => {
    return(
        <>
        <Button className='countryDrop'>
            <div className='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                <span className='name'>India</span>
            </div>
            <span className='ms-auto'><FaAngleDown/></span>
        </Button>
        </>
    )
}

export default CountryDropdown;