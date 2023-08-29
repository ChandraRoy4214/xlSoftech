'use client';
import React, { useState } from 'react';
import TitleStrip from '../TitleStrip';
import { BsDot } from 'react-icons/bs';
import { MdArrowRight } from 'react-icons/md';
import { Collapse } from 'react-collapse';

function Index() {
  const [open, setOpen] = useState(true);

  return (
    <div className='text-gray-600'>
      <TitleStrip title={'Investor Charter'} />

      <div className='w-[65%] mx-auto mt-10 mb-40'>
        <Vision open={open} setOpen={setOpen} />
        <Mission open={open} setOpen={setOpen} />
        <ServiceProvided open={open} setOpen={setOpen} />
        <RightsOfInvestors open={open} setOpen={setOpen} />
        <DosAndDonts open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

const Vision = ({ open, setOpen }) => {
  return (
    <div>
      <div
        className='flex items-center text-orange-600 font-semibold cursor-pointer'
        onClick={() => {
          open === 1 ? setOpen(null) : setOpen(1);
        }}
      >
        <span className='text-3xl'>
          <BsDot />
        </span>

        <h1> Vision </h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 1 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 1} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <p>
            To be a trusted, transparent and prompt service provider to the
            investors, conforming to the highest standards of compliance,
            confidentiality and professionalism in conduct, to meet the
            obligation towards investors in Indian capital markets.
          </p>
        </div>
      </Collapse>
    </div>
  );
};

const Mission = ({ open, setOpen }) => {
  return (
    <div className='my-1'>
      <div
        className='flex items-center text-orange-600 font-semibold cursor-pointer'
        onClick={() => {
          open === 2 ? setOpen(null) : setOpen(2);
        }}
      >
        <span className='text-3xl'>
          <BsDot />
        </span>
        <h1> Mission </h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 2 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 2} checkTimeout={1000}>
        <section>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              To maintain high standard of integrity in the conduct of business
              by fulfilling obligations in a prompt, ethical and professional
              manner.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              To comply with all regulatory requirements in a time bound manner
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              To facilitate prompt service to investors by and through
              streamlining the process and harnessing technology
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              To facilitate easy approach, communication and interface with
              investors so as to resolve their queries / grievances
            </p>
          </div>
        </section>
      </Collapse>
    </div>
  );
};

const ServiceProvided = ({ open, setOpen }) => {
  return (
    <div className='my-1'>
      <div
        className='flex items-center text-orange-600 font-semibold cursor-pointer'
        onClick={() => {
          open === 3 ? setOpen(null) : setOpen(3);
        }}
      >
        <span className='text-3xl'>
          <BsDot />
        </span>
        <h1> Service Provided </h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 3 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 3} checkTimeout={1000}>
        <section>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Providing details of allotment and clarification on allotment.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Processing change in /updation of the KYC details of the investors
              for physical holdings like change of address/bank account details/
              e-mail address /telephone/mobile/ nomination and PAN.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Processing and updating investor holding/title change requests viz
              name deletion, transmission, transposition, issue of duplicate
              shares, dematerialization and rematerialisation of securities.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Processing of other requests, viz., recording of declaration
              w.r.t. exemption / lower tax rates for TDS on dividend/interest,
              revalidation and reissue of dividend and interest instruments.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Execution and intimation of other corporate actions viz., ESOPs,
              Dividend payment, Stock split, Bonus issue and Merger/Demerger
              activities.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Mandatory execution of transfer of shares and dividends to IEPF
              and transfer of undelivered share certificates to Suspense
              account.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Process grievance received through mails and Letters and those
              through SCORES also.
            </p>
          </div>
        </section>
      </Collapse>
    </div>
  );
};

const RightsOfInvestors = ({ open, setOpen }) => {
  return (
    <div className='my-1'>
      <div
        className='flex items-center text-orange-600 font-semibold cursor-pointer'
        onClick={() => {
          open === 4 ? setOpen(null) : setOpen(4);
        }}
      >
        <span className='text-3xl'>
          <BsDot />
        </span>
        <h1> Rights Of Investors </h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 4 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 4} checkTimeout={1000}>
        <section>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Receive all the benefits/ material information declared by the
              Company.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              Actively participate in the AGM / EGM of the company & E-voting
              events so as to be a part of the decision making of the Company’s
              business resolutions.
            </p>
          </div>
          <div className='flex pl-10 pt-1'>
            <span className='text-3xl -mb-1'>
              <BsDot />
            </span>
            <p>
              In case of any grievances, approach Link Intime India Pvt Ltd.,
              Depository, Company, Stock Exchange or SEBI for resolution within
              prescribed timelines.
            </p>
          </div>
        </section>
      </Collapse>
    </div>
  );
};

const DosAndDonts = ({ open, setOpen }) => {
  return (
    <div className='my-1'>
      <div
        className='flex items-center text-orange-600 font-semibold cursor-pointer'
        onClick={() => {
          open === 5 ? setOpen(null) : setOpen(5);
        }}
      >
        <span className='text-3xl'>
          <BsDot />
        </span>

        <h1> {`DO's and DON'Ts for Investor`} </h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 5 && 'rotate-90'
          }`}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 5} checkTimeout={1000}>
        <section className='grid grid-cols-2 gap-10 ml-16 '>
          <section className='col-span-1 flex flex-col gap-6'>
            <h1 className='text-black'> Do`s </h1>
            <p>
              Encash dividend/Interest regularly to avoid transfer of unclaimed
              amount/underlying securities to IEPF.
            </p>

            <p>
              Follow up diligently and promptly if you have not received
              allotment intimation/ certificate / dividend / interest etc.
            </p>
            <p>
              Ensure that your PAN is registered with Link Intime for all your
              physical holdings.
            </p>
            <p>
              Ensure nomination is registered for all your securities to
              smoothen the transmission.
            </p>
            <p>
              Ensure that all KYC details viz full postal address with PIN,
              mobile number, e-mail address, etc. are updated to facilitate Link
              Intime for sending communication.
            </p>
            <p>
              Ensure that correct and complete Bank details are recorded with
              Link Intime in respect of physical holdings to facilitate prompt
              electronic credit of dividend / interest / redemption amounts and
              eliminate possibility of unclaimed amounts / underlying securities
              being transferred to IEPF.
            </p>
            <p>
              Promptly inform Link Intime in writing quoting the Unit Name and
              Folio Number and complete required formalities in case of loss of
              securities.
            </p>
            <p>
              Ensure that the documents provided for availing any investor
              service request are complete in all respects and keep copies of
              documents sent to the office of Link Intime.
            </p>
            <p>
              Monitor all corporate announcements pertaining to investments
              made.
            </p>
          </section>
          <section className='col-span-1 flex flex-col gap-6'>
            <h1 className='text-black'> Don`ts </h1>
            <p> Do not keep your folios without PAN.</p>
            <p> Do not keep your folios without nomination </p>
            <p>
              Do not deal with unauthorized persons for any investor service
              requests such as change in / updation of address, e-mail address,
              mobile number and bank details.
            </p>
            <p>
              Do not share security details, viz. folio number, certificate
              number, distinctive number(s), bank details, specimen signature,
              KYC documents, etc. with unknown person(s).
            </p>
          </section>
        </section>
      </Collapse>
    </div>
  );
};

export default Index;
