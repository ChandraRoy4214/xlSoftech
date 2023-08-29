import React from 'react';
import { HiMiniCalculator } from 'react-icons/hi2';
import TitleStrip from '../TitleStrip';

function ServiceStandards() {
  return (
    <div className=''>
      <TitleStrip title={'Service Standards'} />
      <div className='w-[65%] p-4 bg-slate-200 mx-auto mt-40 font-normal'>
        <div className='flex gap-2 items-center border-b border-orange-600 text-orange-600'>
          <p className='text-xl mb-2 border-r border-orange-600'>
            <HiMiniCalculator />
          </p>
          <h1 className='text-xl mb-2 font-semibold '>
            Service Parameters and Turnaround Time for Various Services
          </h1>
        </div>

        <p className='mt-2'>
          Xl Softech believes in providing quality services to their clients and
          investors with the highest level of professionalism, respect,
          integrity and commitment.
        </p>

        <p>
          The turnaround time in the normal course of business for the various
          services rendered to Investors on receipt of valid and duly complied
          documents are as under:
        </p>

        <table className='w-full mt-6'>
          <thead className='bg-orange-500 h-11 text-white '>
            <tr>
              <th>
                <p className='text-left pl-4'> Investor Services </p>
              </th>
              <th>
                <p className='text-left'> Turn Around Time </p>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className='h-10'>
              <th>
                <p className='font-normal text-left pl-4'>
                  Securities Transfer Requests
                </p>
              </th>
              <th>
                <p className='font-normal text-left'> 15 days </p>
              </th>
            </tr>
            {/* =================================================== */}
            <tr className='h-10 bg-gray-100 '>
              <th>
                <p className='font-normal text-left pl-4'>
                  Securities Transmission Requests
                </p>
              </th>
              <th>
                <p className='font-normal text-left'> 21 days </p>
              </th>
            </tr>
            {/* =================================================== */}
            <tr className='h-10'>
              <th>
                <p className='font-normal text-left pl-4'>
                  Dematerialisation Requests
                </p>
              </th>
              <th>
                <p className='font-normal text-left'> 15 days </p>
              </th>
            </tr>
            {/* =================================================== */}
            <tr className='h-10 bg-gray-100 '>
              <th>
                <p className='font-normal text-left pl-4'>
                  Issue of Securities Certificate Requests
                </p>
              </th>
              <th>
                <p className='font-normal text-left'> 30 days </p>
              </th>
            </tr>
            {/* =================================================== */}
            <tr className='h-10'>
              <th>
                <p className='font-normal text-left pl-4'>
                  Investor Correspondence
                </p>
              </th>
              <th>
                <p className='font-normal text-left'> 30 days </p>
              </th>
            </tr>
            {/* =================================================== */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceStandards;
