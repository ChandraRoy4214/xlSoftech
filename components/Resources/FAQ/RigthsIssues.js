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
        <h1> Are PAN details compulsory? </h1>

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
          <p>
            Irrespective of the application amount, PAN is to be compulsorily
            mentioned in the application form for all holders
          </p>
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
        <h1> Can a rights issue application made through ASBA? </h1>

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
            Yes, one can apply for rights like in an IPO through ASBA. However,
            Please note that all Eligible Equity Shareholders (other than
            renouncees and holding equity shares in physical form) who are QIBs,
            Non-Institutional Investors (including all companies and body
            corporates) and other retail Applicants whose application amount
            exceeds Rs.2,00,000 can participate in the Issue only through the
            ASBA process
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
        <h1>
          Have you to apply in the CAF sent to you or can you use any other
          form?
        </h1>

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
            It is not necessary to apply only in the CAF sent. The shareholder
            can apply on plain paper format, which should contain all the
            essential fields. Forms can also be downloaded from the company’s or
            Link Intime’s website.
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
        <h1> What are the general rules regarding renouncement?</h1>

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
            Renouncement can be for part or for full portion of the entitlement
            In case shareholder renounces full / part of his holding, he becomes
            ineligible to apply for additional shares.
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
        <h1> What is a CAF? </h1>

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
          CAF is the acronym for Composite Application Form. The CAF is sent to
          all the shareholders as on the record date, informing about their
          holding, the number of shares to which they are entitled to apply as
          rights, and the price of the rights shares. The CAF also contains part
          B C & D, which contains the parts where the renouncee can apply, and
          the part containing the split request.
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
        <h1> What is a renouncement?</h1>

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
            A shareholder can renounce (or forego) the total or part of his/her
            entitlement in favour of a third party, who then becomes the
            renouncee.
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
        <h1> What is a split request?</h1>

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
          In the event a shareholder wishes to renounce a part of his / her
          entitlement or wishes to renounce the full entitlement in favour of
          more than one third party, a request can be made to split the
          entitlement form (CAF) into as many denominations as required. For eg:
          if there is an entitlement for 5000 shares as rights, a split request
          can be made for 5 forms of 1000 shares each.
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
        <h1>
          {' '}
          What is the period during which the Rights Issue has to be kept open?
        </h1>

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
            As per current norms, a Rights Issue has to be open for a minimum
            period of 15 days
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
        <h1>What is the Record Date in the context of a Rights Issue?</h1>

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
            A record date is reference date for freezing list of shareholders
            who become eligible to receive corporate benefit like rights
            entitlement, Bonus shares, dividend etc. . Investors holding shares
            in demat mode have to ensure that their DP account shows shares held
            as on that date.
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
        <h1> Where and how can you get a Split CAF?</h1>

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
            Applicants will have to send Original CAF duly signed by registered
            shareholder in Part ‘D’ meant for split, specifying the denomination
            of split of the entitlement and send the same to the Registrar’s
            office, within the time specified.
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
        <h1> Where and how do you get a duplicate CAF?</h1>

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
            You can get a duplicate CAF by addressing a letter or request to the
            Registrars.
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
        <h1>
          {' '}
          Whether entitlement can be renounced through plain paper format?
        </h1>

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
            No. Shareholders cannot renounce their entitlement when applying
            through plain paper format
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
          Why is demat account details significant for a rights issue applicant?
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
            The DP-ID + Client ID, is a 16 digit definitive identification of
            the applicant. It is based on the Demat Account, that allotted
            shares are credited and refunds, if any, are processed. A wrong but
            valid demat account no. can result in shares being credited to a
            different account and refund if any being sent to that account
            holder. Thus it is very important that the Demat Account Number is
            stated correctly in the application form. However in case of Rights
            Issue , if the Demat Account is inactive or invalid , the shares are
            allotted in Physical format
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default Index;
