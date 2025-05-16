import { FormGroup } from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from 'range-slider-input';
import 'range-slider-input/dist/style.css';
import { useState } from "react";
import Slider from '@mui/material/Slider';


const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);

    return (
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>PRODUCT CATEGORIES</h6>
                    <div className="scroll">
                        <ul style={{ paddingLeft: 0 }}>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Men"/>
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Women"/>
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Beauty"/>
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Kids"/>
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Men"/>
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Women"/>
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Beauty"/>
                            </li>
                            <li>
                                <FormControlLabel className="w-100" control={<Checkbox/>} 
                                label="Kids"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>FILTER BY PRICE</h6>

                    <Slider
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                    valueLabelDisplay="auto"
                    min={100}
                    max={60000}
                    step={5}
                    />

                    <div className="d-flex justify-content-between mt-2">
                        <span>From: <strong className="text-success">Rs: {value[0]}</strong></span>
                        <span>To: <strong className="text-success">Rs: {value[1]}</strong></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
