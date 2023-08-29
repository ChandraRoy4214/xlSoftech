'use client';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { SlBookOpen } from 'react-icons/sl';
import { clientServices, investorServices, resources } from '../utils/enums';
import Link from 'next/link';

function Cards() {
  const data = [
    {
      //   image: basic_img1,
      heading: 'Public Issues',
      //   number: analytics?.avg_rally_length,
    },
    {
      //   image: basic_img2,
      heading: 'Rights Issues',
      //   number: analytics?.match_intensity,
    },
    {
      //   image: basic_img3,
      heading: 'Tax',
      //   number: analytics?.longest_rally,
    },
    {
      //   image: basic_img4,
      heading: 'Client List',
      //   number: analytics?.total_shots,
    },
    {
      //   image: basic_img1,
      heading: 'Public Issues',
      //   number: analytics?.avg_rally_length,
    },
    {
      //   image: basic_img2,
      heading: 'Rights Issues',
      //   number: analytics?.match_intensity,
    },
    {
      //   image: basic_img3,
      heading: 'Tax',
      //   number: analytics?.longest_rally,
    },
    {
      //   image: basic_img4,
      heading: 'Client List',
      //   number: analytics?.total_shots,
    },
  ];

  return (
    <div>
      <section className='max-w-[1470px] w-[70%] 2xl:gap-6 mx-auto'>
        <div className='mb-10'>
          <h1 className='px-10 py-3 border border-gray-200 font-bold mx-auto max-w-fit text-[#4353ff] text-xl'>
            Investor Services
          </h1>
          <div className='grid grid-cols-2 gap-2 lg:gap-8 xl:gap-2 my-5 lg:my-10 justify-around'>
            {Object.keys(investorServices)?.map((item, index) => {
              return (
                <Card item={item} category={investorServices} key={index} />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className='px-10 py-3 shadow-lg border border-gray-200 font-bold mx-auto max-w-fit text-[#4353ff] text-xl '>
            Client Services
          </h1>
          <div className='grid grid-cols-2 gap-2 lg:gap-8 xl:gap-2 my-5 lg:my-10 justify-around'>
            {Object.keys(clientServices)?.map((item, index) => {
              return <Card item={item} category={clientServices} key={index} />;
            })}
          </div>
        </div>
        <div>
          <h1 className='px-10 py-3 shadow-lg border border-gray-200 font-bold mx-auto max-w-fit text-[#4353ff] text-xl'>
            Resources
          </h1>
          <div className='grid grid-cols-2 gap-2 lg:gap-8 xl:gap-2 my-5 lg:my-10 justify-around'>
            {Object.keys(resources)?.map((item, index) => {
              return <Card item={item} category={resources} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ category, item }) {
  const [state, setState] = useState(false);

  return (
    <Link href={category[item]}>
      <div
        className={`flex justify-start gap-10 shadow-lg hover:shadow-2xl px-10 py-8 rounded-lg border border-gray-100 transition-all duration-500 cursor-pointer w-full hover:text-[#4353ff] ${
          state ? '' : 'items-center'
        } `}
        onMouseEnter={() => {
          setState(true);
        }}
        onMouseLeave={() => {
          setState(false);
        }}
      >
        <p
          className={`text-5xl grid place-items-center rounded-full text-gray-600 mt-1`}
        >
          <SlBookOpen />
        </p>

        <div className='px-4 '>
          <h1 className=' font-semibold text-xl'>{item}</h1>

          <Collapse isOpened={state} checkTimeout={1000}>
            <div className='text-gray-600'>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
