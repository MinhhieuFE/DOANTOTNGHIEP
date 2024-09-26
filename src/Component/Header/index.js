import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logo.jpg"
import Button from '@mui/material/Button';
import ProvinceDropDown from "../ProvinceDrop";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";




const Header = () => {
    return  (
        <>
         <div className="headerWrapper">
            <div className="top-strip bg-green">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Cảm ơn quý khách đã mua hàng tại <b>Vimart</b>! </p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={"/"}> <img src={Logo} alt="Logo" /></Link>
                        </div>

                        <div className="col-sm-10 d-flex align-items-center part2">
                                <ProvinceDropDown />

                                <SearchBox />

                                <div className="part3 d-flex align-items-center">
                                    <Button className="circle mr-3"> <FiUser /> </Button>
                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className="cart-title">Giỏ Hàng</span>
                                        <div className="position-relative">
                                            <Button className="circle"> <IoBagOutline/> </Button>
                                            <span className="count d-flex align-items-center justify-content-center">1</span>
                                        </div>
                                        <span className="price">$500 </span>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            <div>
            </div> 
            </header>

            <Navigation/>
            

        </div>
        </>
    )
}

export default Header;