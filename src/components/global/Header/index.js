import { Flex, Button } from 'antd';
import AuthProfileDropDown from '../../sheard/AuthProfileDropDown';
import './index.css';

const Header = () => {
  return (
    <div className="main_header">
      <Flex justify="space-between" align="center">
        <p>Logo</p>

        <div>
          <AuthProfileDropDown />
        </div>
      </Flex>
    </div>
  )
};

export default Header;