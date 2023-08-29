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
      </div>
    </div>
  );
}

const One = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 1 ? setOpen(null) : setOpen(1);
        }}
      >
        <span className='mr-1'>I.</span>

        <h1> On KYC compliance </h1>

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
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>How can I make my folio KYC Compliant? </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              {' '}
              We would like to draw your attention to Circular No.
              SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/37 dated March 16, 2023,
              issued by SEBI, on Common and Simplified Norms for processing
              Investor’s Service Request by RTAs. SEBI vide this Circular has
              mandated the furnishing of PAN, Address with PIN code, Email
              address, Mobile No., Bank Account details, Specimen Signature &
              Nomination by holders of physical securities and that “From
              January 1, 2022, RTAs shall not process any service requests or
              complaints received from the holder(s)/claimant(s), till PAN, KYC
              and Nomination documents/details are received”.{' '}
            </p>
            <p>
              {' '}
              {`The relevant Forms for registering/changing KYC details and Nomination, viz. Forms ISR-1, ISR-2, ISR-3, SH-13, SH-14 as well as the SEBI circulars are available on our website at https://www.linkintime.co.in -> KYC-Formats In order to make the folio KYC compliant, the holder is required to submit the duly completed Forms along with supporting documents as indicated therein.`}{' '}
            </p>
            <p>
              Please note that SEBI vide its circular no.
              SEBI/HO/MIRSD/MIRSD_RTAMB/P/CIR/2022/8 dated January 25, 2022
              states that ‘listed companies shall henceforth issue the
              securities in dematerialized form only’ (vide Gazette Notification
              no. SEBI/LAD-NRO/GN/2022/66 dated January 24, 2022) while
              processing requests for
            </p>

            <div className='mt-2'>
              <p> 1) Issue of duplicate securities certificate </p>
              <p>2) Claim from Unclaimed Suspense Account</p>
              <p> 3) Renewal / Exchange of securities certificate</p>
              <p>4) Endorsement </p>
              <p>5) Sub-division / Splitting of securities certificate</p>
              <p>6) Consolidation of securities certificates / folios</p>
              <p>7) Transposition</p>
              <p>8) Transmission</p>
            </div>

            <p className='mt-4'>
              For Investor Request covered by serial Nos 1 to 7, the holder(s)
              are requested to submit [ Form ISR-4 ]. Alongwith Form ISR-4,
              kindly download [ Form A to B ]
            </p>
            <p>
              {' '}
              For Transmission request as per serial no 8, Legal
              Heirs(s)/Claimants should submit [Form ISR-5]. Alongwith Form
              ISR-5, kindly download [ Annexure-D,E,F ].{' '}
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};
const Two = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 2 ? setOpen(null) : setOpen(2);
        }}
      >
        <span className='mr-1'>II.</span>

        <h1> On Transfer </h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>Can I transfer physical securities to my name? </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              Please note that as per SEBI circular dated 27th March 2019,
              w.e.f. April 01, 2019 fresh requests for effecting transfer of
              securities shall not be processed unless the securities are held
              in dematerialized form with a depository.
            </p>
            <p>
              You are, therefore, requested to co-ordinate with the
              transferor(s) to convert the physical shares into dematmode and
              subsequently arrange to transfer the shares into your demat
              account.
            </p>
            <p>
              In case of securities of unlisted private limited companies,
              transfer can be effected for which you need to :
            </p>

            <div className='mt-2'>
              <p> 1) Submit duly executed Form SH-4. </p>
              <p>2) Submit original certificates for the securities </p>
              <p>
                {' '}
                3) Attach self- attested copy of the PAN Card of the
                transferor(s) as well as of the transferee(s)
              </p>
              <p>
                4) Frank / affix stamp duty on the Form SH-4 @ 0.25% of the
                market value or the consideration amount (whichever is higher).
                Calculation of market value of the securities must be as on the
                execution date mentioned on the Form SH-4.{' '}
              </p>
            </div>

            <p className='mt-4'>
              • In case of debentures / bonds, where the market value is not
              available, stamp duty is to be calculated on the face value of the
              securities being transferred.
            </p>
            <p>
              For securities held in electronic form, please contact your
              depository participant.
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};

const Three = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 3 ? setOpen(null) : setOpen(3);
        }}
      >
        <span className='mr-1'>III.</span>

        <h1> On Transposition </h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>Can I interchange the order of names for my holdings? </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              Yes, you can interchange the order of names for full holding. For
              securities held in physical form, please ensure that your folio is
              KYC compliant. For more details on KYC compliance, please refer to
              point I above.
            </p>

            <p>For KYC compliant folio, please submit the following:-</p>

            <div className='mt-2'>
              <p>
                {' '}
                1. Application Form for Transposition duly completed and signed
                by ALL the holders as per the specimen signatures recorded with
                the Company. This form can be downloaded from our website.{' '}
              </p>
              <p>2. Original certificates for the securities.</p>
              <p>
                3. Self-attested copies of the PAN Cards of all the holders.{' '}
              </p>

              <p>
                4. Original cancelled cheque of the first holder as per the
                transposed order.{' '}
              </p>

              <p>
                {`5. Duly completed Form ISR-1,Form SH-13 / Form ISR-3 and { Form ISR-4 ].`}{' '}
              </p>
            </div>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};

const Four = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 4 ? setOpen(null) : setOpen(4);
        }}
      >
        <span className='mr-1'>IV.</span>

        <h1> On Nomination </h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>Can I avail of the nomination facility? </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              Yes, you can. For securities held in physical form, please ensure
              that your folio is KYC compliant. For more details on KYC
              compliance, please refer to point I above.
            </p>

            <p>
              For KYC compliant folio, you may nominate person(s) by completing
              Form No.SH-13 and registering the same with us. Kindly download
              Form SH-13
            </p>

            <p> Important points to be noted</p>

            <p>
              Investors are informed that after verification of the documents
              submitted and in case of any differences observed, additional
              procedures / documents, may be further called as part of KYC.
            </p>
            <p>
              For securities held in electronic form, please contact your
              Depository Participant
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};
const Five = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 5 ? setOpen(null) : setOpen(5);
        }}
      >
        <span className='mr-1'>V.</span>

        <h1> On Change of specimen signature </h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>
              Over a period of time, my signature has changed, what should I do
              to register my new signature in your records?
            </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              For securities held in physical form, please ensure that your
              folio is KYC compliant. For more details on KYC compliance, please
              refer to point I above.
            </p>

            <p>
              To register your new signature for securities held in physical
              form, Form ISR-2 is required to be completed and forwarded to us
              along with original cancelled cheque leaf bearing the name of the
              first holder.
            </p>

            <p> Important points to be noted</p>

            <p>
              Investors are informed that after verification of the documents
              submitted and in case of any differences observed, additional
              procedures / documents, may be further called as part of KYC.
            </p>
            <p>
              For securities held in electronic form, please contact your
              Depository Participant.
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};

const Six = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 6 ? setOpen(null) : setOpen(6);
        }}
      >
        <span className='mr-1'>VI.</span>

        <h1> On Change of Address </h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>How do I record a change in my address?</p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              For securities held in physical form, please ensure that your
              folio is KYC compliant. For more details on KYC compliance, please
              refer to point I above.
            </p>

            <p>For KYC compliant folio, please submit the following:</p>

            <p>
              {' '}
              A written request for change in address in Form ISR-1, duly signed
              by the first holder as per the specimen signature recorded with
              the Company along with supporting documents as mentioned below-
            </p>

            <p>
              Self attested copy of any 1 of the following documents issued by a
              Government authority:
            </p>

            <p>
              {' '}
              a. Client Master List (CML) of your demat account, provided by the
              Depository Participant
            </p>
            <p>
              {' '}
              b. Valid Passport/Registered Lease or Sale Agreement of
              Residence/Driving License/Flat Maintenance Bill*
            </p>
            <p>
              {' '}
              c. Utility bills like telephone bill (only landline), electricity
              bill or gas bill (not more than 3 months old)
            </p>
            <p>
              {' '}
              d. Identity Card with photo/document with address, issued by
              Central/State Government and its Departments, Statutory/Regulatory
              Authorities, Public Sector Undertakings, Scheduled Commercial
              Banks, Public Financial Institutions
            </p>
            <p>
              {' '}
              e. For FII/subaccount, Power of Attorney given by FII/sub account
              to the Custodians (which are duly notarized and/or apostilled or
              consularised) that gives the registered address
            </p>
            <p> f. Proof of address in the name of the spouse*</p>
            <p>
              {' '}
              * Kindly provide additional self-attested copy of Identity Proof
              of the holder/claimant.
            </p>

            <p> Important points to be noted</p>
            <p>
              The identity and address proof should be legible and in the name
              of the first registered account holder.
            </p>
            <p>
              Investors are informed that after verification of the documents
              submitted and in case of any differences observed, additional
              procedures / documents, may be further called as part of KYC.
            </p>
            <p>
              For securities held in electronic form, please contact your
              depository participant.
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};

const Seven = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 7 ? setOpen(null) : setOpen(7);
        }}
      >
        <span className='mr-1'>VII.</span>

        <h1> On Loss of Security </h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>
              What should I do, if my security certificates are lost /
              misplaced?
            </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              For folio(s) which are not KYC Compliant, registered securities
              holder(s) should ensure to do the KYC Compliance first, by filling
              up Form ISR-1, ISR-2, Form SH-13/ ISR-3 as per SEBI Circular dated
              3rd November, 2021.
            </p>

            <p>
              For KYC compliant folio(s) held in physical form, kindly submit
              the following:-
            </p>

            <p>
              {' '}
              1. Investor Service Request-[Form ISR-4] As per SEBI Circular
              dated 25thJanuary, 2022, SEBI has mandated that all listed
              companies to issue securities in demat mode only. In this regard,
              you shall comply with the request for issue of Duplicate
              Securities Certificates as per the details mentioned in Form ISR-4
              which shall be duly completed and signed by all the registered
              holder(s) as per the specimen signature(s) recorded with the
              Company.
            </p>

            <p>
              2. Affidavit (Form-A): A Notarized Affidavit from the Registered
              holder(s) made on non-judicial stamp paper of appropriate value in
              the prescribed format, to the effect of identification and claim
              of legal ownership to the securities. In case of Joint Holder(s)
              Single Affidavit is to be executed by the registered holder(s).
            </p>
            <p>
              3. Indemnity Bond (Form-B): A Notarized Indemnity Bond made on
              non-judicial Stamp Paper of appropriate value in the prescribed
              format, indemnifying the Listed entity /Share Transfer Agent.
              Indemnity Bond is to be executed jointly by all the Registered
              Holder(s).
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};
const Eight = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 8 ? setOpen(null) : setOpen(8);
        }}
      >
        <span className='mr-1'>VIII.</span>

        <h1> On Bank Details / Electronic Remittance</h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>Do I have to register my bank details with the Company</p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              Yes. Please ensure that your folio is KYC compliant. For more
              details on KYC compliance, please refer to point I above.
            </p>

            <p>
              For securities held in physical form where the folio is KYC
              compliant, please submit the following to enable updation of
              change in bank details :-
            </p>

            <p>
              1. Form ISR-1 duly completed and signed by all the holders as per
              the specimen signature recorded with us furnishing the bank
              account details
            </p>

            <p>
              2. Original cancelled chequeleaf bearing the name of the first
              holder
            </p>
            <p>
              Bank attested legible copy of the first page of the Bank Passbook
              / Bank Statement bearing the names of the accountholders, address,
              same bank account number and type as on the cheque leaf and the
              full address of the Bank branch and, Bank attested legible copy of
              the last page of the Bank Passbook / Bank Statement showing the
              latest transaction which is not more than 3 months old.
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};

const Nine = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 8 ? setOpen(null) : setOpen(8);
        }}
      >
        <span className='mr-1'>IX.</span>

        <h1> On Tax Deduction</h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>How do I obtain a duplicate Tax Deduction certificate? </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>Please write, giving:-</p>

            <p>Details of the Tax Deduction Certificate that you require.</p>

            <p>Name of the Company in which you hold the securities.</p>

            <p>Your full name and address.</p>
            <p>Your Folio No. / DP id Client id.</p>
            <p>Payment date(s) and financial year.</p>
            <p>
              For any queries not covered herein, please refer to us for
              clarification, quoting your Folio No. / DP id Client id.
            </p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};
const Ten = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='border mb-2 p-2'>
      <div
        className='flex items-center  font-semibold cursor-pointer'
        onClick={() => {
          open === 8 ? setOpen(null) : setOpen(8);
        }}
      >
        <span className='mr-1'>X.</span>

        <h1> On Change of Name</h1>

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
          <span className='text-3xl -mb-1'>
            <BsDot />
          </span>
          <div
            className='flex items-center '
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>How do I apply for change of name? </p>
            <span
              className={`text-3xl duration-300 transition-all ${
                show && 'rotate-90'
              }`}
            >
              <MdArrowRight />
            </span>
          </div>
        </div>

        {show ? (
          <div className='pl-20 text-black '>
            <p>
              Please ensure that your folio is KYC compliant. For more details
              on KYC compliance, please refer to point I above.
            </p>

            <p>For KYC compliant folio, please submit the following:</p>

            <p>
              {' '}
              i. For Individuals, consequent to marriage / divorce / attaining
              majority
            </p>
            <p>
              {' '}
              1. Legible copy of the documents mentioned below, in respect of
              each name change, duly attested by Notary Public / Bank Manager /
              First Class Magistrate. Attestation by Notary Public / First Class
              Magistrate should mention their name, full address, registration
              number and affix their seal, Notarial / Court Fee stamps, as
              applicable. Attestation by Bank Manager should bear the name, full
              address and official stamp of the bank.
            </p>
            <p>
              The name on the documents submitted should be the same as that on
              the securities.
            </p>
            <p>
              {' '}
              Marriage- Legally recognized Marriage Certificate / Government
              Gazette
            </p>
            <p> 2. Original certificates for the securities.</p>

            <p>
              {' '}
              3.Application Form for Transmission duly completed and signed by
              the holder(s) whose signature(s) should be attested by his/their
              Bank Manager under his name, full address and official stamp of
              the bank. This form can be downloaded from our website.
            </p>
            <p> 4. Self-attested copy of PAN Card of the holder(s).</p>
          </div>
        ) : (
          ''
        )}
      </Collapse>
    </div>
  );
};

export default Index;
