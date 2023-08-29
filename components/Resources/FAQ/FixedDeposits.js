'use client';
import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { MdArrowRight } from 'react-icons/md';
import { Collapse } from 'react-collapse';

function Index() {
  const [open, setOpen] = useState(true);

  return (
    <div className='text-gray-600'>
      <div className='w-[65%] mx-auto mt-10 mb-40'>
        <One open={open} setOpen={setOpen} />
        <Two open={open} setOpen={setOpen} />
        <Three open={open} setOpen={setOpen} />
        <Four open={open} setOpen={setOpen} />
        <Five open={open} setOpen={setOpen} />
        <Six open={open} setOpen={setOpen} />
        <Seven open={open} setOpen={setOpen} />
        <Eight open={open} setOpen={setOpen} />
        <Nine open={open} setOpen={setOpen} />
        <Ten open={open} setOpen={setOpen} />
        <Eleven open={open} setOpen={setOpen} />
        <Twele open={open} setOpen={setOpen} />
        <Thirteen open={open} setOpen={setOpen} />
        <Fourteen open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

const One = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 1 ? setOpen(null) : setOpen(1);
        }}
      >
        <h1> Are Company FDs transferable?</h1>

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
          <p>No. Company FDs are non- transferable.</p>
        </div>
      </Collapse>
    </div>
  );
};
const Two = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 2 ? setOpen(null) : setOpen(2);
        }}
      >
        <h1> Can I avoid TDS deduction, if I am not a Tax payer?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 2 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 2} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            {` On the home page you would find the block 'IPO Allotment Status '.
            Click on and you would get the page. Select the desired company.
            Choose the option depending on whether your account is with NSDL or
            CDSL. Enter the details as per the option whether you want full
            details or only allotment details. Submit the same, and within
            moments the results would be displayed to you on the screen`}
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Three = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 3 ? setOpen(null) : setOpen(3);
        }}
      >
        <h1>Can I withdraw the fixed deposit amount before maturity?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 3 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 3} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            There are two regulations for book building process as Regulation
            6(1)& 6(2). As per Regulation 6(1), the reservations are QIB- 50%,
            HNI-15% & RETAIL- 35% of the net issue. As per Regulation 6(2), the
            reservations are QIB- 75%, HNI-15% & RETAIL- 10% of the net issue.
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Four = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 4 ? setOpen(null) : setOpen(4);
        }}
      >
        <h1>
          Do special categories like Senior citizens, Employees, Shareholders
          etc. get any extra benefit on the FD?
        </h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 4 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 4} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            {` The latest SEBI Circular ,mandates SCSBs to ensure that the unblock process for non-allotted/partially allotted applications is completed by the closing hours of one Working Day subsequent to the finalisation of the Basis of Allotment. In case the funds are still blocked in the applicants accounts, they can approach the respective SCSBs/ Registrar to ensure their funds are unblocked immediately

`}
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Five = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 5 ? setOpen(null) : setOpen(5);
        }}
      >
        <h1> Is Loan facility available under Company FD?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 5 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 5} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            1. Retail Individual Investors are those who invest not more than
            Rs.2 lakh in an issue.
          </p>
          <p>
            {' '}
            2. Non-Institutional Investors who are investors who invest Rs.2
            lakh or above in an issue.
          </p>
          <p>
            {' '}
            3. Qualified Institutional Buyers (QIB) which includes mutual funds,
            financial institutions, scheduled commercial banks, alternative
            investment funds etc.
          </p>
          <p>
            {' '}
            4. Anchor Investors are Qualified Institutional Buyers who make an
            application for a value of Rs. 10 crore or more in a public issue on
            the main board made through the book building process.
          </p>
          <p> 5. Shareholders of the promoter group companies.</p>
          <p>
            {' '}
            6. Employees: In case of a new issuer, persons who are in the
            permanent and full-time employment of the promoting companies
            excluding the promoters and an immediate relative of the promoter of
            such companies.
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Six = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 6 ? setOpen(null) : setOpen(6);
        }}
      >
        <h1>Is PAN Card compulsory for applying for a Company FD Schemes?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 6 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 6} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            {`Please ensure your Demat Account Number and PAN is clearly written without any smudging or overwriting. Your payment details like account number in case of ASBA / UPI ID, etc. are clearly written. Your bid is for the proper bid lot and a price within the bid range. The order of names in the application is the same as in your DP account. The application form is signed.

`}
          </p>
        </div>
      </Collapse>
    </div>
  );
};

const Seven = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 7 ? setOpen(null) : setOpen(7);
        }}
      >
        <h1> Is TDS applicable on Fixed Deposit?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 7 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 7} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          The first public offer of shares made by a company is called an
          Initial Public Offer(IPO). An IPO is made by a company whose shares
          are not listed on a stock exchange. Once the IPO is made, the shares
          have to be compulsorily listed and the shares become available for
          trading on the stock exchange. An IPO can either be a fresh issue of
          shares or it can be an Offer for Sale (OFS) of existing shares by any
          of the existing share holder.
        </div>
      </Collapse>
    </div>
  );
};
const Eight = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 8 ? setOpen(null) : setOpen(8);
        }}
      >
        <h1> Is there a nomination facility available on FD?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 8 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 8} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            An SCSB is a Self Certified Syndicate Bank, who has systems in
            place, including the ability to upload the BID to the stock exchange
            system. Can a retail investor revise his/her bid? Yes, a retail
            investor can revise his/her bid any number of times during the issue
            period
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Nine = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 9 ? setOpen(null) : setOpen(9);
        }}
      >
        <h1> Is there any auto renewal facility available on FD?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 9 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 9} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            A Bid-lot is the pre-determined number of shares which have to be
            applied for by an investor. It is different for each issue. There is
            a minimum lot size which is pre-decided by the company and mentioned
            in the application form. Eg: Minimum bid lot in IPO of XYZ co. - 10
            Bid-lot Multiples of 10 Price Band - 100-120. It means that a retail
            investor cannot apply for less than 10 shares in that particular
            issue. The application for more than 10 shares has to be in
            multiples of 10 like 20,30,40,etc
          </p>
        </div>
      </Collapse>
    </div>
  );
};

const Ten = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 10 ? setOpen(null) : setOpen(10);
        }}
      >
        <h1> What are the types of Companies which offer FD Schemes?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 10 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 10} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            A retail investor can bid at any price within the price band or can
            bid at cut-off. Cut-off means the investor is ready to pay whatever
            price is decided by the company at the end of the book building
            process. While making the application at Cut off, the investor is
            required to pay the amount at the highest price band.. The excess
            amount, in case the price discovered is lower, is refunded. Cut-off
            option can be exercised only by Retail Investors and Employees of
            the issuing company applying in the Employee Category
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Eleven = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 11 ? setOpen(null) : setOpen(11);
        }}
      >
        <h1> What are the usual Schemes under which Companies accept FDs?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 11 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 11} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            Unified Payments Interface (UPI) is a system that powers multiple
            bank accounts into a single mobile application (of any participating
            bank), merging several banking features, seamless fund routing &
            merchant payments into one hood. One can apply for IPO using UPI ID
            as a payment option on the National Stock Exchange (NSE) and Bombay
            Stock Exchange (BSE).
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Twele = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 12 ? setOpen(null) : setOpen(12);
        }}
      >
        <h1> What is a Company Fixed Deposit (FD)?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 12 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 12} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            A request (intimating the Retail Individual Investor, by way of a
            notification on the UPI linked mobile application as disclosed by
            SCSBs on the website of SEBI and by way of an SMS directing the
            Retail Individual Investor to such UPI linked mobile application) to
            the Retail Individual Investor using the UPI Mechanism initiated by
            the Sponsor Bank to authorize blocking of funds equivalent to the
            Bid Amount in the relevant ASBA Account through the UPI linked
            mobile application, and the subsequent debit of funds in case of
            Allotment
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Thirteen = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 13 ? setOpen(null) : setOpen(13);
        }}
      >
        <h1>
          {' '}
          What is the minimum deposit amount required for opening FD account?
        </h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 13 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 13} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            As per SEBI guidelines, all applicants are required to provide their
            PAN while applying in an Issue. Application without PAN or with
            invalid PAN is rejected. Investors are requested to ensure that
            their DP account is updated with proper PAN details
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Fourteen = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 14 ? setOpen(null) : setOpen(14);
        }}
      >
        <h1> When do I become liable for TDS?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 14 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 14} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            The DP-ID + Client ID, is the definitive identification of the
            applicant. Demat account fed into electronic bid file, is used to
            credit shares as well as remit refund. Registrar is required to
            process application based on bid file and in absence of any other
            possible validation, wrong but valid demat account, can lead to
            wrong refund / credit of shares. bid file, Thus it is very important
            that the Demat Account Number is stated correctly in the application
            form
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Fifteen = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 15 ? setOpen(null) : setOpen(15);
        }}
      >
        <h1> Who can invest in a Company FD?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 15 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 15} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            The DP-ID + Client ID, is the definitive identification of the
            applicant. Demat account fed into electronic bid file, is used to
            credit shares as well as remit refund. Registrar is required to
            process application based on bid file and in absence of any other
            possible validation, wrong but valid demat account, can lead to
            wrong refund / credit of shares. bid file, Thus it is very important
            that the Demat Account Number is stated correctly in the application
            form
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Sixteen = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 14 ? setOpen(null) : setOpen(14);
        }}
      >
        <h1>Who can invest in a Company FD?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 14 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 14} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            The DP-ID + Client ID, is the definitive identification of the
            applicant. Demat account fed into electronic bid file, is used to
            credit shares as well as remit refund. Registrar is required to
            process application based on bid file and in absence of any other
            possible validation, wrong but valid demat account, can lead to
            wrong refund / credit of shares. bid file, Thus it is very important
            that the Demat Account Number is stated correctly in the application
            form
          </p>
        </div>
      </Collapse>
    </div>
  );
};
const Seventeen = ({ open, setOpen }) => {
  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 14 ? setOpen(null) : setOpen(14);
        }}
      >
        <h1>Will I get a FD receipt?</h1>

        <span
          className={`text-3xl duration-300 transition-all ${
            open === 14 && 'rotate-90'
          } `}
        >
          <MdArrowRight />
        </span>
      </div>

      <Collapse isOpened={open === 14} checkTimeout={1000}>
        <div className='flex pl-10 pt-3'>
          <p>
            The DP-ID + Client ID, is the definitive identification of the
            applicant. Demat account fed into electronic bid file, is used to
            credit shares as well as remit refund. Registrar is required to
            process application based on bid file and in absence of any other
            possible validation, wrong but valid demat account, can lead to
            wrong refund / credit of shares. bid file, Thus it is very important
            that the Demat Account Number is stated correctly in the application
            form
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default Index;
