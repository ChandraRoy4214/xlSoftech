'use client';
import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import {
  aboutUs,
  investorServices,
  clientServices,
  resources,
} from '../../utils/enums';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../imgs/logo.png';
import { Collapse } from 'react-collapse';

function Navbar() {
  const [hoverOn, setHoverOn] = useState(null);

  return (
    <article className='sticky left-0 top-0 z-10 w-full text-black bg-gray-100 font-semibold text-lg'>
      <section className='flex justify-around mx-auto w-[95%] h-20 items-center'>
        <section className='w-1/2 pl-10'>
          <div className=''>
            <Link href={'/'}>
              <Image
                alt='abcd'
                src={Logo}
                width={200}
                height={1}
                unoptimized={true}
                className='overflow-hidden max-h-[100vh] object-cover'
              />
            </Link>
          </div>
        </section>
        <section className='w-1/2 flex justify-around'>
          <div
            className='relative cursor-pointer'
            onMouseEnter={() => {
              setHoverOn(1);
            }}
            onMouseLeave={() => {
              setHoverOn(null);
            }}
          >
            <p className='flex items-center px-4 py-10'>
              About Us
              <span className='mt-0.5'>
                <AiFillCaretDown />
              </span>
            </p>
            {hoverOn == 1 ? (
              <HoverItem hoverOn={hoverOn} data={aboutUs} />
            ) : (
              false
            )}
          </div>
          <div
            className='flex items-center relative cursor-pointer'
            onMouseEnter={() => {
              setHoverOn(2);
            }}
            onMouseLeave={() => {
              setHoverOn(null);
            }}
          >
            <p className='flex items-center px-4 py-10'>
              Investor Services
              <span className='mt-0.5'>
                <AiFillCaretDown />
              </span>
            </p>

            {hoverOn == 2 ? (
              <HoverItem hoverOn={hoverOn} data={investorServices} />
            ) : (
              false
            )}
          </div>
          <div
            className='flex items-center relative cursor-pointer'
            onMouseEnter={() => {
              setHoverOn(3);
            }}
            onMouseLeave={() => {
              setHoverOn(null);
            }}
          >
            <p className='flex items-center px-4 py-10'>
              Client Services
              <span className='mt-0.5'>
                <AiFillCaretDown />
              </span>
            </p>

            {hoverOn == 3 ? (
              <HoverItem hoverOn={hoverOn} data={clientServices} />
            ) : (
              false
            )}
          </div>

          <div
            className='flex items-center relative cursor-pointer'
            onMouseEnter={() => {
              setHoverOn(4);
            }}
            onMouseLeave={() => {
              setHoverOn(null);
            }}
          >
            <p className='flex items-center px-4 py-10'>
              Resources
              <span className='mt-0.5'>
                <AiFillCaretDown />
              </span>
            </p>
            {hoverOn == 4 ? (
              <HoverItem hoverOn={hoverOn} data={resources} />
            ) : (
              false
            )}
          </div>
        </section>
      </section>
    </article>
  );
}

const HoverItem = ({ data }) => {
  return (
    <div className='absolute top-16 mt-4 bg-white pl-4 py-2 text-black font-normal rounded-lg w-72 text-base'>
      <Collapse isOpened={true} checkTimeout={1000}>
        <div className='w-full'>
          {Object.keys(data)?.map((item) => {
            return (
              <Link href={`${data?.[item]}`} key={item}>
                <h1 className='hover:text-[#4353ff] mb-2 font-medium transition-all duration-200 hover:text-xl hover:underline'>
                  {item}
                </h1>
              </Link>
            );
          })}
        </div>
      </Collapse>
    </div>
  );
};

export default Navbar;
