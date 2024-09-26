import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import {IoIosMenu} from "react-icons/io";
import { FaAngleDown } from 'react-icons/fa6';
import { CiHome } from "react-icons/ci";
import { GiFruitBowl } from "react-icons/gi";
import { LuCarrot } from "react-icons/lu";
import { FaRegLemon } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiThermometerCold } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";






const Navigation = () => 
{
    return (
        <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 navPart1">
                            <Button className="allCatTab">
                                <span className='icon1 mr-2'><IoIosMenu/></span>
                                <span class="text">ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>
                        </div>

                        <div className='col-sm-9 navPart2 d-flex aligin-items-center'>
                            <ul className='list list-inline w-100 ml-auto'>
                                <li className='list-inline-item'>
                                    <Link to="/"> 
                                        <CiHome />Trang chủ
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to="/"> 
                                        <FaRegLemon /> Trái cây
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to="/">
                                        <LuCarrot /> Rau củ 
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to="/">
                                        <FaLeaf /> Hữu cơ 
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to="/">
                                        <FaLocationDot />Đặc sản
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to="/"> 
                                        <PiThermometerCold />Đông lạnh
                                    </Link>
                                </li>

                                <li className='list-inline-item'>
                                    <Link to="/"> 
                                        <MdHealthAndSafety /> Sức khỏe
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navigation;