import React, { useState } from "react";
import "./faq.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function Faq() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleButton() {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className="faq-container" id="faq">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-paragraph">Got a question? We've got answers</p>
         <div className="details-container">
        <details>
         <summary onClick={toggleButton}>Is this a secured platform {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">Yes, all transactions are protected and not accessible by any third party.Above platform ensures that your data is protected. Our Platform is impenetrable, this makes your transactions secure. (We use 256bits SSL security encryption that prevents fraudsters from interfering with transactions)..</p>
            </details>
            <details>
         <summary onClick={toggleButton}>What days does Zircosoft work? {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">At Zircosoft,we work 24/7 and this is why we are unique-because of our commitment.At any time of the day or week,we are always available.</p>
            </details>
            <details>
         <summary onClick={toggleButton}>How do i know if my transaction has been processed? {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">for every transaction,we will display the status of your deposit or withdrawal order.Should incase we have urgent information we will use your phone number or mail to get across to you</p>
            </details>
            <details>
         <summary onClick={toggleButton}>How fast is the payment? {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">Transactions are instantly processed once your payment is confirmed.</p>
            </details>
            <details>
         <summary onClick={toggleButton}>Why is my transaction pending? {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph"> Transactions are processed instantly.A PENDING status means your transacion is queued and awaiting processing.This basically takes just a few minute to be completed.Kindly be patient.If your transaction is taking longer than usual,please contact the support team.  .</p>
            </details>
            <details>
         <summary onClick={toggleButton}>Im yet to recieve my withdrawal {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">99% of payments are received within a few minutes.Bank at times have issues with networks that can lead to delays in payment,kindly be patient and contact us if you dont get payment within 24 hours.Be rest assured you will always get your payment regardless..</p>
            </details>
            <details>
         <summary onClick={toggleButton}>What is the MINIMUM or MAXIMUM i can transact? {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">The minimum deposit and withdrawal on Deriv is $10 while other product are $11 and there is no maximum.</p>
            </details>
            <details>
         <summary onClick={toggleButton}>i cant access my deriv acct. for withdarwals via payment agent... {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">Chat Deriv through the live chat channel, request that payment through agent should be activated for you.</p>
            </details>
            <details>
         <summary onClick={toggleButton}>How do i transfer,make withdrawal from deriv using payment agent? {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">• Go to your Deriv / Binary platform and click on the cashier • Go to your "Payment Agent" section and select "Request withdrawal form. • Follow the email link and select Abovefx.ng(You don’t need to fill the Payment Agent ID box) • Fill in your desired amount. • Take a screenshot as proof of withdrawal and upload where neccessary • You will be credited instantly upon confirmation..</p>
            </details>
            <details>
         <summary onClick={toggleButton}>I cant remember my password, how do i recover it? {isOpen ? <KeyboardArrowUpIcon className="arrow" /> : <KeyboardArrowDownIcon className="arrow" />} </summary>
         <p className="details-paragraph">It's simple. Use the recover password option and a link to reset your password will be sent to your Email</p>
            </details>
            
            </div>
        </div>

    )
}

export default Faq;