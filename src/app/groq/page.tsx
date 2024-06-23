"use client";

import React, { useRef, useEffect } from "react";
import MarkdownRenderer from "@/components/markdown-renderer";
import { useChat } from "@ai-sdk/react";

const Groq: React.FC = () => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat/groq",
  });

  useEffect(() => {
    // Scroll to the bottom of the message container when new messages are added
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="bg-gradient-to-br from-black via-[#1f1f1f] to-black flex flex-col items-center justify-between h-screen p-3 px-5 md:px-52 overflow-y-hidden">
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#1f1f1f] bg-opacity-70 backdrop-blur-md rounded-lg overflow-y-scroll scrollbar-thin scrollbar-webkit">
        {messages.length === 0 ? (
          <>
            <h1 className="text-white text-3xl font-bold mb-2">
              Start Chatting with
            </h1>
            <h1 className="text-white text-3xl font-bold">
              <span className="text-orange-500 text-4xl">groq</span> Now!
            </h1>
          </>
        ) : (
          <div className="w-full h-full flex flex-col text-white">
            <div className="flex-1 p-4">
              {messages.map((message, index) => (
                <div
                  className={`chat ${
                    message.role === "assistant"
                      ? "chat-start"
                      : "chat-start md:chat-end"
                  }`}
                  key={index}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt={`${
                          message.role === "assistant" ? "groq" : "User"
                        } Avatar`}
                        src={
                          message.role === "assistant"
                            ? "https://avatar.iran.liara.run/public/87"
                            : "https://avatars.jakerunzer.com/asdf"
                        }
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    {message.role === "assistant" ? "groq" : "User"}
                  </div>
                  <div
                    className={`text-white chat-bubble ${
                      message.role === "assistant"
                        ? "bg-[rgba(34,40,49,0.8)]"
                        : "bg-transparent md:bg-[rgba(214,90,49,0.8)]"
                    } max-w-2xl`}
                  >
                    <MarkdownRenderer content={message.content} />
                  </div>
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col items-start justify-center h-20 mt-5">
        <form
          className="w-full flex items-center bg-[#1f1f1f] bg-opacity-70 backdrop-blur-md rounded-md px-4 py-2 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            id="input"
            placeholder="Enter your prompt"
            className="bg-transparent text-white outline-none flex-grow"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md ml-4"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Groq;
