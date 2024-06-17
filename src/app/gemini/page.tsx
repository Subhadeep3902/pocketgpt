"use client";

import React, { useState, FormEvent, useRef, useEffect } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  ChatSession,
} from "@google/generative-ai";

interface Message {
  text: string;
  type: "user" | "ai";
}

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.0-pro-001";

const Gemini: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState<ChatSession>();

  const genAI = new GoogleGenerativeAI(API_KEY);
  const generationConfig = {
    temperature: 0.5,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  useEffect(() => {
    const initChat = async () => {
      try {
        const newChat = genAI
          .getGenerativeModel({ model: MODEL_NAME })
          .startChat({
            generationConfig,
            safetySettings,
            history: messages.map((message) => ({
              text: message.text,
              role: message.type,
              parts: [],
            })),
          });
        setChat(newChat);
      } catch (error) {
        console.error(error);
      }
    };
    initChat();
  }, []);

  const getAIoutput = async () => {
    try {
      if (chat) {
        const result = await chat.sendMessage(inputValue);
        return result.response.text();
      }
      return "Failed to send message";
    } catch (error) {
      console.error("Failed to send message");
      return "Failed to send message";
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the message container when new messages are added
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleMessageSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | FormEvent
  ) => {
    event.preventDefault();
    const trimmedMessage = inputValue.trim();
    if (!trimmedMessage) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: trimmedMessage, type: "user" },
    ]);
    setInputValue("");
    const aiReply = await getAIoutput();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: aiReply, type: "ai" },
    ]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleMessageSubmit(event);
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-[#1f1f1f] to-black flex flex-col items-center justify-between h-screen p-3 px-5 md:px-52">
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#1f1f1f] bg-opacity-70 backdrop-blur-md rounded-lg">
        {messages.length === 0 ? (
          <>
            <h1 className="text-white text-3xl font-bold mb-2">
              Start Chatting with
            </h1>
            <h1 className="text-white text-3xl font-bold">
              <span className="text-orange-500 text-4xl">Gemini</span> Now!
            </h1>
          </>
        ) : (
          <div className="w-full h-full flex flex-col text-white overflow-hidden">
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.type === "ai"
                      ? "flex-row"
                      : "flex-row md:flex-row-reverse"
                  }`}
                >
                  <img
                    src={
                      message.type === "ai"
                        ? "https://avatar.iran.liara.run/public/87"
                        : "https://avatars.jakerunzer.com/asdf"
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div
                    className={`p-4 shadow-lg backdrop-blur-md ${
                      message.type === "ai"
                        ? "bg-[rgba(34,40,49,0.8)] text-gray-100 max-w-2xl ml-4 w-auto rounded-lg"
                        : "bg-transparent md:bg-[rgba(214,90,49,0.8)] text-white max-w-md w-auto ml-4 md:ml-0 mr-0 md:mr-4 rounded-lg md:rounded-3xl"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col items-start justify-center h-20 md:h-40 mt-5">
        <div className="md:flex space-x-4 mb-4 hidden">
          {[
            "Make Shorter",
            "Make longer",
            "More professional",
            "More casual",
            "Paraphrase",
          ].map((text, index) => (
            <button
              key={index}
              className="bg-[#1f1f1f] text-white px-4 py-2 rounded-md"
              onClick={() => setInputValue(text)}
            >
              {text}
            </button>
          ))}
        </div>

        <div className="w-full flex items-center bg-[#1f1f1f] bg-opacity-70 backdrop-blur-md rounded-md px-4 py-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter your prompt"
            className="bg-transparent text-white outline-none flex-grow"
          />
          <button
            type="submit"
            onClick={handleMessageSubmit}
            className="bg-orange-500 text-white px-4 py-2 rounded-md ml-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gemini;
