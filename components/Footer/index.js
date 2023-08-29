import React from 'react';
import {
  aboutUs,
  clientServices,
  investorServices,
  resources,
} from '../../utils/enums';

function Footer() {
  return (
    <section className='py-20 h-[450px] bg-[#202A44] text-gray-300'>
      <section className='flex justify-center gap-20'>
        <div>
          <h1 className='font-semibold mb-1.5 text-white'> About Us </h1>
          <div className='text-sm'>
            {Object.keys(aboutUs)?.map((item) => {
              return (
                <h1
                  key={item}
                  className='hover:border-b border-gray-300 max-w-fit cursor-pointer mb-1'
                >
                  {item}
                </h1>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className='font-semibold mb-1.5 text-white'> Client Services </h1>
          <div className='text-sm'>
            {Object.keys(clientServices)?.map((item) => {
              return (
                <h1
                  key={item}
                  className='hover:border-b border-gray-300 max-w-fit cursor-pointer mb-1'
                >
                  {item}
                </h1>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className='font-semibold mb-1.5 text-white'>Investor Services</h1>
          <div className='text-sm'>
            {Object.keys(investorServices)?.map((item) => {
              return (
                <h1
                  key={item}
                  className='hover:border-b border-gray-300 max-w-fit cursor-pointer mb-1'
                >
                  {item}
                </h1>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className='font-semibold mb-1.5 text-white'> Resources </h1>
          <div className='text-sm'>
            {Object.keys(resources)?.map((item) => {
              return (
                <h1
                  key={item}
                  className='hover:border-b border-gray-300 max-w-fit cursor-pointer mb-1'
                >
                  {item}
                </h1>
              );
            })}
          </div>
        </div>

        <div className='font-semibold text-sm'>
          <h1 className='hover:border-b border-gray-300 max-w-fit cursor-pointer mb-1'>
            Contact Us
          </h1>
          <h1 className='hover:border-b border-gray-300 max-w-fit cursor-pointer mb-1'>
            Privacy
          </h1>
          <h1 className='hover:border-b border-gray-300 max-w-fit cursor-pointer mb-1'>
            Security
          </h1>
        </div>
      </section>
      <div className='border-t border-gray-600 w-7/12 mx-auto mt-4 flex justify-between py-2 '>
        <h1> xl Softech | Corporate Markets </h1>
        <h1> © Copyright 2023- AZ-01 - xl Softech Pvt Ltd </h1>
      </div>
    </section>
  );
}

export default Footer;
