
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';

const ProvinceDropDown  = () =>
{
    return (
        <>
            <Button className="provinceDrop">
                    <div className="info d-flex flex-column">
                            <span className='label'> Vị Trí Của Bạn</span>
                            <span className='name'>Hà Nội</span>
                    </div>
                    <span className='ml-auto'><FaAngleDown /></span>
            </Button>
        </>
    )
}

export default ProvinceDropDown;