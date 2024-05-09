import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import modalStyles from "../../../../app/styles/modal.module.scss"; // Adjust the path as needed
import { grey } from "@mui/material/colors";
import { InfluencersContainer } from "entities/Influencers";
import { useParams } from "react-router-dom";
import { influencersData } from "../../../../entities/Influencers/ui/Influencers";
import { RegisterData } from "pages/InfluencerPages/ui/InfluencerDetail/InfluencerMain";

interface MessageModalProps {
  [x: string]: any;
  className?: string;
  isOpen: boolean;
  onRequestClose: () => void;
  recipientName: string;


}

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onRequestClose, recipientName, image, }) => {
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [paymentCode, setPaymentCode] = useState("");

  const handlePayClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/messages/create",
        {
          senderEmail: "pmptestmail777@gmail.com",
          receiverEmail: "shahen.grigoryan@gmail.com",
          externalReceiverEmail: "shahen.grigoryan@gmail.com",
          topic: topic,
          sentText: description,
          receivedText: paymentCode,
          subj: subject,
          price: 1,
          shelfLife: "23.08.2023",
          isActual: true,
        }
      );

      // Handle the response as needed
      console.log("Response from server:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error while sending request:", error);
    }
  };



  return (

    < Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Message Modal"
      className={modalStyles.modal} // Apply modal styles
      overlayClassName={modalStyles.overlay} // Apply overlay styles
      ariaHideApp={false}
    >
      {/* Flex container for the header content */}
      < div className={modalStyles.headerContainer} >
        <h2>Send a message</h2>
      </div >
      <p className={modalStyles.responseText}>
        Approximate expected response: 1 - 5 days
      </p>
      <div className={modalStyles.totalPrice}>
        <p>Total Price</p><h1>$ </h1>  {/* Replace with the actual total price */}
      </div>
      <div className={modalStyles.recipients}>
        <p>Recipients:</p>
        <div className={modalStyles.recipients_data}>

          <img src={image} />
          <p>{recipientName}</p>
        </div>
      </div>
      <select
        className={modalStyles.dropdown}
        onChange={(e) => setTopic(e.target.value)}
      >
        <option value="Business inquiry">Business inquiry</option>
        <option value="General questions">General questions</option>
        <option value="Ask for a suggestion">Ask for a suggestion</option>
      </select>
      {/* Subject input */}
      <div className={modalStyles.modalInput}>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          maxLength={30}
          className={modalStyles.input}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      {/* Description textarea */}
      <div className={modalStyles.modalInput}>
        <textarea
          id="description"
          maxLength={200}
          className={modalStyles.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="enter text"
        />
      </div>
      {/* Payment - Idram code input */}
      <div className={modalStyles.modalInput}>
        <label htmlFor="payment">Payment</label>
        <input
          type="text"
          id="payment"
          className={modalStyles.input_card}
          value={paymentCode}
          onChange={(e) => setPaymentCode(e.target.value)}
        />
      </div>
      {/* Pay button */}

      {/* Back to Profile link */}
      <p>
        <a href="#" onClick={onRequestClose} className={modalStyles.link}>
          <button className={modalStyles.payButton} onClick={handlePayClick}>
            Pay $ 5.99
          </button>
        </a>
      </p>
    </Modal >
  );
};




export default MessageModal;