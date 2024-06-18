import { FiSend } from "react-icons/fi";
import { LuImagePlus } from "react-icons/lu";

export default function GeminiVison() {
  return (
    <div className="h-screen bg-base-100">
      <div className="h-screen md:rounded-3xl md:mx-96 bg-base-300 p-2 overflow-hidden flex flex-col justify-between">
        <h1 className="h-10 mx-auto w-60 px-1 rounded-full text-2xl font-bold border-2 border-white mb-5">
          Gemini Vision👁️🧩
        </h1>

        {/* Chats */}
        <div className="h-full overflow-y-scroll scrollbar-thin scrollbar-webkit">
          {/* Ai chat  */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Gemini Avatar"
                  src="https://avatar.iran.liara.run/public/87"
                />
              </div>
            </div>
            <div className="chat-header">Gemini</div>
            <div className="chat-bubble chat-bubble-primary max-w-2xl">
              Hola I am Gemini. Pick an image and ask a question!
            </div>
          </div>

          {/* User chat  */}
          <div className="chat chat-start md:chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://avatars.jakerunzer.com/asdf"
                />
              </div>
            </div>
            <div className="chat-header">User</div>
            <div className="chat-bubble max-w-md break-words">
              Hi Gemini, How are you?
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="h-20 flex gap-2">
          <button className="btn btn-square btn-accent btn-outline rounded-2xl">
            <LuImagePlus size={25} />
          </button>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full rounded-full"
          />
          <button className="btn btn-square btn-primary rounded-2xl">
            <FiSend size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}
