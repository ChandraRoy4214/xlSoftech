import Link from 'next/link';
import React from 'react';

function InfoBanner() {
  return (
    <div className='flex justify-center gap-8 items-center h-40 bg-[#202A44] text-white'>
      <h1 className='text-5xl'> Looking for information? </h1>
      <Link href={'/about'}>
        <button className='h-14 text-white w-56 grid place-items-center border border-[#4353ff] bg-[#4353ff] rounded font-semibold '>
          About Us
        </button>
      </Link>
    </div>
  );
}

export default InfoBanner;
