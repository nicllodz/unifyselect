import React from 'react';
import Head from 'next/head'; // Used for setting the document title in Next.js

/**
 * A simple, generic Privacy Policy page component.
 * You should customize all sections (especially 3, 4, and 5) to accurately reflect your application's data practices.
 */
const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Next.js Head component for SEO and title */}
      <Head>
        <title>Privacy Policy | Unifyhc</title>
        <meta name="description" content="Read the privacy policy for Your App Name." />
      </Head>

      <div style={{ maxWidth: '80%', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header className='mb-10'>
          <h1 className="text-[42px] font-[Lato] mb-4">Privacy Policy</h1>
          <p>
            This privacy policy stated below applies to information collected online from users of this website. In this policy, 
            you can learn what kind of information we collect, when and how we might use that information, how we protect the information, 
            and the choices you have with respect to your personal information.
          </p>
        </header>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>1. Your Information. Your Rights. Our Responsibilities.</h2>
          <p>
            We are committed to safeguarding your personal and health information. Your protected health information (PHI) includes details about your past, 
            present, or future health or condition, the provision of healthcare, and payment for healthcare that can reasonably identify you.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>2. Your Information</h2>
          <p className='mb-3'>
            What personal information is collected through this website and how is it used?
          </p>
          <p className='mb-3'>
            We collect information about our users in three ways: directly from the user, from our Web server logs, and through cookies. 
            We use the information primarily to provide you with a personalized Internet experience that delivers the information, resources, 
            and services that are most relevant and helpful to you. We don’t share any of the information you provide with others, 
            unless we say so in this Privacy Policy, or when we believe in good faith that the law requires it.
          </p>
          <p className='mb-3'>
            User-supplied information: If you fill out a contact form on this website, we will ask you to provide some personal information 
            (such as an e-mail address, name, phone number and state).
          </p>
          <p>
            We only require that you provide an e-mail address on the contact form. Further, if chat is available through this site, 
            you may be asked to provide information if you participate in an online chat. Please do not submit any confidential, 
            proprietary or sensitive personally identifiable information (e.g. Social Security Number; date of birth; driver’s license number; 
            or credit card, bank account or other financial information) (collectively, “Sensitive Information”). If you submit any Sensitive Information, 
            you do so at your own risk, and we will not be liable to you or responsible for consequences of your submission.
          </p>          
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>3. Your Rights</h2>
          <p className='mb-5'>
            You have the right to:
          </p>
          <p className='mb-5 font-bold'>
            Access your medical records
          </p>
          <p className='mb-5'>
            You may request to view or receive an electronic or paper copy of your medical records. We will respond within 30 days and may charge a reasonable, cost-based fee.
          </p>
          <p className='mb-5 font-bold'>
            Request corrections
          </p>
          <p className='mb-5'>
            You can ask us to correct PHI you believe is incorrect or incomplete. We may deny the request, but we’ll explain why in writing within 60 days.
          </p>
          <p className='mb-5 font-bold'>
            Request confidential communications
          </p>
          <p className='mb-5'>
            You may request that we contact you by a specific method or at a different address. We will accommodate all reasonable requests.
          </p>
          <p className='mb-5 font-bold'>
            Limit what we use or share
          </p>
          <p className='mb-5'>
            You may opt out of any future contact from us at any time. Contact us via the phone number, or mailing address within this notice at any time to ask us not to share certain PHI.
          </p>
          <p className='mb-5 font-bold'>
            Get a list of disclosures
          </p>
          <p className='mb-5'>
            You can request a list of times we’ve shared your PHI for six years prior to your request (excluding disclosures for treatment, payment, or operations).
          </p>
          <p className='mb-5 font-bold'>
            Get a copy of this privacy notice
          </p>
          <p className='mb-5'>
            You may request a paper copy of this notice at any time.
          </p>
          <p className='mb-5 font-bold'>
            Choose someone to act for you
          </p>
          <p className='mb-5'>
            If someone is legally authorized to act for you (e.g., medical power of attorney), we will confirm their authority before we respond to their requests.
          </p>
          <p className='mb-5 font-bold'>
            File a complaint
          </p>
          <p className='mb-5'>
            You can file a complaint with us or with the U.S. Department of Health and Human Services if you believe your privacy rights have been violated. We will not retaliate against you.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>4. Your Choices</h2>
          <p className='mb-5'>
            For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information 
            in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.
          </p>
          <p className='mb-5'>
            You have the right to tell us to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
            <li>Share your information with family, friends, or others involved in your care.</li>
            <li>Share information in a disaster relief situation.</li>
          </ul>
          <p className='mb-5'>
              You must give us written permission to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
              <li>Use your information for marketing purposes.</li>
              <li>Sell your information.</li>
              <li>Share psychotherapy notes (in most cases).</li>
          </ul>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>5. Our Uses and Disclosures</h2>
          <p className='mb-5'>
            We typically use or share your PHI to:
          </p>    
            {/* <div className="w-full text-base font-sans"> */}
        
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Treat you
            </div>
            <div className="w-2/5 pr-4">
                 Share PHI with other healthcare professionals for the coordination of your care.
            </div>
            <div className="w-2/5 text-sm">
                <span className="font-semibold italic text-blue-700">Example:</span> A doctor treating you for an injury asks another doctor about your overall health condition.
            </div>
        </div>        
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                To service you
            </div>
            <div className="w-2/5 pr-4">
                Share PHI with unaffiliated third-parties in the fulfilment of our services to you.
            </div>
            <div className="w-2/5 text-sm">
                <span className="font-semibold italic text-blue-700">Example:</span> to agents, website vendors and/or contractors who may use it on our behalf or in connection 
                with their relationship with us or if we are unable to assist with your matter, but know an unaffiliated attorney or firm that may be able to help you, we may refer you 
                and share information you provided us with that party;
            </div>
        </div>        
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Run our organization
            </div>
            <div className="w-2/5 pr-4">
                Use PHI to manage operations, improve care, and communicate with you.
            </div>
            <div className="w-2/5 text-sm">
                <span className="font-semibold italic text-blue-700">Example:</span> We use health information about you to manage your treatment and services.
            </div>
        </div>
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Bill for services
            </div>
            <div className="w-2/5 pr-4">
                Share PHI to process payment with insurance plans or payers.
            </div>
            <div className="w-2/5 text-sm">
                <span className="font-semibold italic text-blue-700">Example:</span> We give information about you to your health insurance plan so it will pay for your services.
            </div>
        </div>        
        <p className='mb-5 mt-10'>
            We may also share your information in the following ways, as allowed or required by law:
        </p>           
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Public health and safety:
            </div>
            <div className="w-2/5 pr-4">
                    For disease prevention, recalls, adverse reaction reporting, abuse or neglect, and threats to health or safety.
            </div>
        </div>        
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Research:
            </div>
            <div className="w-2/5 pr-4">
                For approved health research under safeguards.
            </div>
        </div>        
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Compliance with the law:
            </div>
            <div className="w-2/5 pr-4">
                With HHS or other government entities for legal compliance.
            </div>
        </div>
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Organ and tissue donation:
            </div>
            <div className="w-2/5 pr-4">
                Share with appropriate organizations as needed.
            </div>
        </div>
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Medical examiner or funeral director:
            </div>
            <div className="w-2/5 pr-4">
                For death-related services.
            </div>
        </div>
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Workers&apos; compensation, law enforcement, and government functions:
            </div>
            <div className="w-2/5 pr-4">
                For claims, investigations, legal processes, or national security.
            </div>
        </div>
        <div className="flex py-4 border-t border-gray-300">
            <div className="font-bold w-1/5 pr-4 flex-shrink-0">
                Lawsuits and legal actions:
            </div>
            <div className="w-2/5 pr-4">
                Respond to subpoenas or court orders.
            </div>
        </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>6. How We Protect Your Information</h2>
          <p className='mb-5'>
            We are required by law to maintain the privacy and security of your protected health information. We take appropriate administrative, technical, 
            and physical safeguards to protect your PHI against unauthorized access or disclosure. This includes encryption, secure systems, access controls, 
            and regular audits.
          </p>
          <p className='mb-5'>
            However, no system is completely secure. In the event of a breach involving your unsecured PHI, we will notify you promptly as required by HIPAA. 
            We must follow the duties and privacy practices described in this notice and give you a copy of it. We will not use or share your information other 
            than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.
          </p>
          <p className='mb-5 font-bold'>
            Business Transfers
          </p>
          <p className='mb-5'>
            All Personal Data may be transferred to a third party if we undergo a merger, acquisition, bankruptcy, or other transaction in which that third party 
            assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your 
            information becomes subject to different privacy and security policies and practices.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>7. Use of Website Information and Cookies</h2>
          <p className='mb-5'>
            If you interact with us via our website, you may opt-in to save your name, email address, and website cookies. These are for your convenience so that 
            you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
          </p>
          <p className='mb-5'>
            If you visit our login page, we will set up a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and 
            is discarded when you close your browser.
          </p>
          <p className='mb-5'>
            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, 
            and screen options for cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, 
            the login cookies will be removed.
          </p>
          <p className='mb-5'>
            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates 
            the post ID of the article you just edited. It expires after 1 day.
          </p>
          <p className='mb-5'>
            Information that you provide to us through a contact form, or an online chat, will be used so that we may respond to your inquiry. We may also use the 
            information you provide us with to communicate with you in the future. If you do not wish to receive such communications, you may opt out (unsubscribe) 
            as described below.
          </p>
          <p className='mb-5'>
            Web server logs: When you visit our website, we may track information about your visit and store that information in web server logs, which are records of the activities on our sites. 
            The servers automatically capture and save the information electronically. Examples of the information we may collect include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
              <li>Your unique Internet protocol address;</li>
              <li>the name of your unique Internet service provider;</li>
              <li>the town/city, county/state and country from which you access our website;</li>
              <li>the kind of browser or computer you use;</li>
              <li>the number of links you click within the site;</li>
              <li>the date and time of your visit;</li>
              <li>the web page from which you arrived to our site;</li>
              <li>the pages you viewed on the site; and</li>
              <li>certain searches/queries that you conducted via our website(s).</li>
          </ul>
          <p className='mb-5'>
            The information we collect in web server logs helps us administer the site, analyze its usage, protect the website and its content from inappropriate use, 
            and improve the user&apos;s experience.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>Cookies:</span> In order to offer and provide a customized and personal service, our websites and applications may use cookies 
            to store and help track information about you. Cookies are simply small pieces of data that are sent to your browser from a Web server and stored on your 
            computer&apos;s hard drive. We use cookies to help remind us of who you are and to help you navigate our sites during your visits. Cookies allow us to save passwords 
            and preferences for you, so you won&apos;t have to re-enter them each time you visit.
          </p>
          <p className='mb-5'>
            The use of cookies is relatively standard. Most browsers are initially set up to accept cookies. However, if you prefer, you can set up your browser to either 
            notify you when you receive a cookie or refuse to accept cookies. You should understand that some features of many sites may not function properly if you don&apos;t accept cookies.
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>8. Contact, Access, and Changes</h2>
          <p className='mb-5'>
            You may contact us at any time to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-5">
              <li>Access or update your information.</li>
              <li>Revoke a previously given authorization.</li>
              <li>Request restrictions.</li>
              <li>File a complaint.</li>
          </ul>
          <p className='mb-5 font-bold'>
            Contact Information: info@unifyhc.com
          </p>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl mb-5'>9. Changes to This Notice</h2>
          <p className='mb-5'>
            We may update this notice to reflect changes in privacy practices or legal requirements. Updated versions will be posted on our website and available upon request.
          </p>
        </section>

      </div>
    </>
  );
};

export default PrivacyPolicyPage;









