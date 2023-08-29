import React from 'react';
import { BiSolidHandRight } from 'react-icons/bi';

function Sidebar() {
  const data = [
    'Know Your Entitlement',
    'Application Format - Plain Paper',
    'Check Allotment Status',
  ];

  return (
    <div>
      <div>
        {data?.map((item, ind) => {
          return (
            <div
              key={ind}
              className='flex my-4 hover:underline items-center cursor-pointer text-orange-600 hover:text-[#4353ff] text-2xl tracking-wider  '
            >
              <p className='font-semibold'>
                <BiSolidHandRight />
              </p>
              <p> {item} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
