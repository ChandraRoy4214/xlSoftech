'use client';
import React, { useState } from 'react';
import Shares from './Shares';
import Ipo from './Ipo';
import RigthsIssues from './RigthsIssues';
import FixedDeposits from './FixedDeposits';

function Index() {
  const [state, setState] = useState(1);

  return (
    <div className='min-h-screen py-20'>
      <div className='border-t border-b h-20 border-gray-300 flex items-center max-w-fit mx-auto cursor-pointer px-10'>
        <div>
          <h1
            onClick={() => {
              setState(1);
            }}
            className={`hover:text-[#4353ff] font-normal hover:font-semibold w-52 text-center ${
              state == 1 ? 'text-[#4353ff] font-semibold ' : ''
            } `}
          >
            Shares & Other Securities
          </h1>
        </div>
        <div>
          <h1
            onClick={() => {
              setState(2);
            }}
            className={`hover:text-[#4353ff] font-normal hover:font-semibold w-52 text-center ${
              state == 2 ? 'text-[#4353ff] font-semibold ' : ''
            } `}
          >
            IPO
          </h1>
        </div>
        <div>
          <h1
            onClick={() => {
              setState(3);
            }}
            className={`hover:text-[#4353ff] font-normal hover:font-semibold w-52 text-center ${
              state == 3 ? 'text-[#4353ff] font-semibold ' : ''
            } `}
          >
            Rights Issue
          </h1>
        </div>
        <div>
          <h1
            onClick={() => {
              setState(4);
            }}
            className={`hover:text-[#4353ff] font-normal hover:font-semibold w-52 text-center ${
              state == 4 ? 'text-[#4353ff] font-semibold ' : ''
            } `}
          >
            Company Fixed Deposits
          </h1>
        </div>
      </div>

      <section>
        {state === 1 ? (
          <Shares />
        ) : state === 2 ? (
          <Ipo />
        ) : state === 3 ? (
          <RigthsIssues />
        ) : state === 4 ? (
          <FixedDeposits />
        ) : (
          ''
        )}
      </section>
    </div>
  );
}

export default Index;
