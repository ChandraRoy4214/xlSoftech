import React from 'react';
import TitleStrip from './InvestorServices/TitleStrip';
import { HiMiniCalculator } from 'react-icons/hi2';

function DematUnlisted() {
  return (
    <div className=''>
      <TitleStrip title={'Demat Unlisted'} />

      <div className='w-[65%] p-4 bg-slate-200 mx-auto mt-10 font-normal'>
        <div className='flex gap-2 items-center border-b border-orange-600 text-orange-500'>
          <p className='text-xl mb-2 border-r border-orange-600'>
            <HiMiniCalculator />
          </p>
          <h1 className='text-xl mb-2 font-semibold'>
            Dematerialisation of Securities of Unlisted Public Limited Companies
          </h1>
        </div>

        <p className='mt-4'>
          Vide notification dated 10th September, 2018 Government of India,
          Ministry of Corporate Affairs has notified Amendment to The Companies
          (Prospectus and Allotment of Securities) Rules, 2014 making it
          mandatory for every Unlisted Publicly held Company to facilitate
          dematerialisation of all its existing securities.
        </p>

        <p className='mt-4'>
          Every unlisted public company making any offer for issue of any
          securities or buyback of securities or issue of bonus shares or rights
          offer shall ensure that before making such offer, entire holding of
          securities of its promoters, directors, key managerial persons has
          been dematerialised. Transfer of securities on or after 2nd October,
          2018 shall be effected only if such securities are dematerialised
          before the transfer.
        </p>

        <p className='mt-4'>
          A soft copy of captioned notification is available here for ready
          reference.
        </p>

        <p className='mt-4'>
          Xl Softech India Private Limited would be happy to help you in
          ensuring compliance with above requirement by assisting you in
          enrolling your Company with depositories (NSDL and CDSL) based on your
          requirements.
        </p>

        <p className='mt-4'>
          Xl Softech is a market leader in registry business for three decades
          and has been serving highest number of listed and unlisted companies
          as Registrar.
        </p>

        <p className='mt-4'>We look forward to an opportunity to serve you.</p>
      </div>
    </div>
  );
}

export default DematUnlisted;
