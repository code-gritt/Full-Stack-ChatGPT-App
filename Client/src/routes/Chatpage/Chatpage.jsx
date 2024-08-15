import React from "react";
import "./Chatpage.css";
import NewPrompt from "../../components/NewPrompt/NewPrompt";

const Chatpage = () => {
  return (
    <>
      <div className="chatPage">
        <div className="wrapper">
          <div className="chat">
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <div className="message">Test message from ai</div>
            <div className="message user">Test message from user</div>
            <NewPrompt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatpage;
