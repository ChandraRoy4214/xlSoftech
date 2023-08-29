import React from 'react';
import Image from 'next/image';
// import InvestorCenter from './InvestorCenter';
import Banner from '../../imgs/banner.png';

function Header() {
  return (
    <div className=''>
      <div className='relative '>
        <Image
          alt='abcad'
          src={Banner}
          width={2100}
          height={1}
          unoptimized={true}
          className='overflow-hidden max-h-[100vh] object-cover'
        ></Image>
        {/* <InvestorCenter /> */}
      </div>
    </div>
  );
}

export default Header;
