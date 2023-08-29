'use client';
import React from 'react';
import DropDown from '../../HelperComponents/DropDown';
import Sidebar from './Sidebar';
import TitleStrip from '../TitleStrip';

function RightsIssues() {
  const list = [
    { label: 'Demat', value: false },
    { label: 'Physical', value: false },
    { label: 'CAF/Serial No.', value: false },
  ];

  return (
    <div className=''>
      <TitleStrip title={'Rights Issues'} />
      <div className='flex gap-10 justify-center items-center h-[50vh]'>
        <Sidebar />
        <article className='p-10 w-[550px] max-w-[550px] bg-blue-50'>
          <h1>Please Select Company:</h1>
          <DropDown />

          <div className='my-6 flex gap-4'>
            {list?.map((item, ind) => {
              return (
                <div key={ind} className='flex gap-2 items-center'>
                  <RadioButton item={item} />
                  <p className='text-sm truncate'> {item?.label} </p>
                </div>
              );
            })}
          </div>

          <InputField placeholder={'Enter'} />

          <button className='h-12 text-orange-600 hover:text-white w-40 grid place-items-center border border-orange-600 hover:bg-orange-600 font-semibold mt-10'>
            SUBMIT
          </button>
        </article>
      </div>
    </div>
  );
}

const RadioButton = ({ item, handleOnChange }) => {
  return (
    <div className=''>
      <input
        type={'checkbox'}
        // checked={item?.value}
        className='w-7 border-2 h-7 rounded-full'
        // onChange={(e) => {
        //   handleOnChange(item?.label, e.target.checked);
        // }}
      />
    </div>
  );
};

const InputField = ({ value, placeholder }) => {
  return (
    <>
      <input
        // value={value || ''}
        // onChange={(e) => {
        //   setSelUser((prev) => {
        //     return {
        //       ...prev,
        //       [key]: e.target.value?.trim(),
        //     };
        //   });
        // }}

        type='string'
        className='w-full border focus:border-gray-500 border-gray-300 h-11 mt-1 rounded-md focus:outline px-2 py-2'
        placeholder={placeholder}
      />
    </>
  );
};

export default RightsIssues;
