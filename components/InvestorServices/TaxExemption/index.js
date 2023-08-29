'use client';
import React from 'react';
import DropDown from '../../HelperComponents/DropDown';
import TitleStrip from '../TitleStrip';

function TaxExemption() {
  const list = [
    { label: 'Folio. No.', value: false },
    { label: 'DP/Client ID', value: false },
  ];

  return (
    <div className=''>
      <TitleStrip title={'Submission of Form 15G/15H/10F'} />
      <div className='grid place-items-center my-40'>
        <article className='p-10 w-[850px] max-w-[850px] bg-blue-50'>
          <h1>Please Select Company:</h1>
          <DropDown />

          <div className='mt-6 mb-3 flex gap-4'>
            {list?.map((item, ind) => {
              return (
                <div key={ind} className='flex gap-2 items-center'>
                  <RadioButton item={item} />
                  <p className='text-sm truncate'> {item?.label} </p>
                </div>
              );
            })}
          </div>

          <InputField placeholder={'enter'} />

          <div className='mt-4 text-sm'>
            <h1> PAN </h1>
            <InputField placeholder={'enter'} />
          </div>
          <div className='mt-4 text-sm'>
            <h1>Select Financial year *</h1>
            <DropDown />
          </div>
          <div className='mt-4 text-sm'>
            <h1>Select Exemption Form *</h1>
            <DropDown />
          </div>

          <div className='mt-4 text-sm'>
            <p>
              KYC Document - PAN
              <span className='text-xs text-gray-700'>
                (Only PDF/JPG/JPEG/PNG/GIF. Max file size 1 MB)
              </span>
              *
            </p>
            <InputFile />
          </div>
          <div className='mt-4 text-sm'>
            <p>
              Form 15G / Form 15H / Form 10F
              <span className='text-xs text-gray-700'>
                (Only PDF/JPG/JPEG/PNG/GIF. Max file size 1 MB) *
              </span>
            </p>
            <InputFile />
          </div>
          <div className='mt-4 text-sm'>
            <p>
              Any Supporting Document
              <span className='text-xs text-gray-700'>
                (Only PDF/JPG/JPEG/PNG/GIF. Max file size 1 MB)
              </span>
            </p>
            <InputFile />
          </div>

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
        //   value={value || ''}
        //   onChange={(e) => {
        //     setSelUser((prev) => {
        //       return {
        //         ...prev,
        //         [key]: e.target.value?.trim(),
        //       };
        //     });
        //   }}
        type='string'
        className='w-full border focus:border-gray-500 border-gray-300 h-11 mt-1 focus:outline px-2 py-2'
        placeholder={placeholder}
      />
    </>
  );
};
const InputFile = ({ value, placeholder }) => {
  return (
    <>
      <input
        //   value={value || ''}
        //   onChange={(e) => {
        //     setSelUser((prev) => {
        //       return {
        //         ...prev,
        //         [key]: e.target.value?.trim(),
        //       };
        //     });
        //   }}
        type='file'
        className='w-full border focus:border-gray-500 border-gray-300 h-11 mt-1 rounded-md focus:outline px-2 py-2 text-sm'
        placeholder={placeholder}
      />
    </>
  );
};

export default TaxExemption;
