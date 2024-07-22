import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import logo from '../../assets/logo-bg-white.png';
import { APP_CONFIG, ROUTES } from '../../constants';

const Logo: React.FC = () => {
  return (
    <Link to={ROUTES.DASHBOARD}>
      <Image src={logo} width={'100px'} alt={APP_CONFIG.APP_NAME} />
    </Link>
  );
};

export default Logo;
