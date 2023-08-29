import React from 'react';
import TitleStrip from '../../InvestorServices/TitleStrip';
import { BsDot } from 'react-icons/bs';

function TermsAndConditions() {
  return (
    <div className='mb-20'>
      <TitleStrip title={'Terms and Conditions & Refund Policy'} />

      <section className='w-[65%] mx-auto text-gray-700'>
        <h1 className='underline mt-16 font-semibold mb-4'>Online Payments</h1>

        <p>
          This online payment system is provided by XL-SOFTECH. XL-SOFTECH may
          update these terms from time to time and any changes will be effective
          immediately on being set out here. Please ensure you are aware of the
          current terms. The country of domicile for XL-SOFTECH is India.
        </p>

        <div className='flex flex-col gap-3'>
          <h1 className='underline mt-8 font-semibold'>Terms & Conditions</h1>

          <p>
            Please read these terms carefully before using the online payment
            facility. Using the online payment facility on this website
            indicates that you accept these terms. If you do not accept these
            terms do not use this facility.
          </p>

          <p> All payments are subject to the following conditions:-</p>

          <p>
            The description of services of match making are specific to your
            need, when you log in with your unique password. Normally payment is
            required in advance (i.e. before you commence your activity).
          </p>

          <p>
            All Fees quoted are in Indian Rupees. The XL-SOFTECH reserves the
            right to change the fees at any time.
          </p>

          <div className='flex items-center'>
            <span className='text-3xl'>
              <BsDot />
            </span>
            <p>
              Your payment will normally reach the XL-SOFTECH account to which
              you are making a payment within two working days.
            </p>
          </div>
          <div className='flex items-center'>
            <span className='text-3xl'>
              <BsDot />
            </span>
            <p>
              We cannot accept liability for a payment not reaching the correct
              XL-SOFTECH account due to you quoting an incorrect account number
              or incorrect personal details. Neither can we accept liability if
              payment is refused or declined by the credit/debit card supplier
              for any reason.
            </p>
          </div>
          <div className='flex items-center'>
            <span className='text-3xl'>
              <BsDot />
            </span>
            <p>
              If the card supplier declines payment the XL-SOFTECH is under no
              obligation to bring this fact to your attention. You should check
              with your bank/credit/debit card supplier that payment has been
              deducted from your account.
            </p>
          </div>
          <div className='flex items-center'>
            <span className='text-3xl'>
              <BsDot />
            </span>
            <p>
              In no event will the XL-SOFTECH be liable for any damages
              whatsoever arising out of the use, inability to use, or the
              results of use of this site, any websites linked to this site, or
              the materials or information contained at any or all such sites,
              whether based on warranty, contract, tort or any other legal
              theory and whether or not advised of the possibility of such
              damages.
            </p>
          </div>
        </div>

        <div>
          <h1 className='underline mt-8 font-semibold mb-4'>Refund Policy</h1>

          <div className='flex items-center'>
            <span className='text-3xl'>
              <BsDot />
            </span>
            <p>
              If the Customer leaves the XL-SOFTECH before they complete their
              service period, there shall be no entitlement to a refund of paid
              service fees.
            </p>
          </div>
          <div className='flex items-center'>
            <span className='text-3xl'>
              <BsDot />
            </span>
            <p>
              Refunds, if applicable, at the discretion of the Management, will
              only be made to the debit/credit card used for the original
              transaction. For the avoidance of doubt nothing in this Policy
              shall require the XL-SOFTECH to refund the Fees (or part thereof)
              unless such Fees (or part thereof) have previously been paid.
            </p>
          </div>
        </div>

        <div>
          <h1 className='underline mt-8 font-semibold mb-4'>Privacy Policy</h1>

          <p>
            This Privacy Policy applies to all of the products, services and
            websites offered by XL-SOFTECH. Sometimes, we may post product
            specific privacy notices or Help Centre materials to explain our
            products in more detail.
          </p>

          <p>
            If you have any questions about this Privacy Policy, please feel
            free to contact us through our website or write to us at
            accounts@linkintime.co.in
          </p>

          <p>
            Information we collect and how we use it for would be at sole
            discretion of XL-SOFTECH.
          </p>
        </div>

        <div>
          <h1 className='underline mt-8 font-semibold mb-4'>
            Changes to our Privacy Policy
          </h1>

          <p>
            XL-SOFTECH reserves the entire right to modify/amend/remove this
            privacy statement anytime and without any reason. Nothing contained
            herein creates or is intended to create a contract/agreement between
            XL-SOFTECH and any user visiting the XL-SOFTECH website or providing
            identifying information of any kind.
          </p>
        </div>

        <div>
          <h1 className='underline mt-8 font-semibold mb-4'>
            Contact Details:
          </h1>

          <p className='text-orange-600'>
            <span className='text-gray-600'> Email: </span> example@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;
