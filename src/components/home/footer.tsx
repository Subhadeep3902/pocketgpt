import Link from "next/link";
import { FiGithub, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-slate-100">
          <div>
            <h3 className="text-xl font-bold mb-4">Chatbots</h3>
            <ul>
              <li>
                <Link href="/groq" className="hover:underline">
                  Groq
                </Link>
              </li>
              <li>
                <Link href="/gemini" className="hover:underline">
                  Gemini
                </Link>
              </li>
              <li>
                <Link href="/chat-gpt" className="hover:underline">
                  ChatGPT Chatbot
                </Link>
              </li>
              <li>
                <Link href="/gemini-vision" className="hover:underline">
                  Gemini Vision
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Socials</h3>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:underline">
                  <FiTwitter className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  <FiFacebook className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  <FiLinkedin className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">GitHub</h3>
            <ul>
              <li>
                <Link
                  href="https://github.com/Subhadeep3902/pocketgpt"
                  className="hover:underline"
                >
                  <FiGithub className="w-6 h-6 inline-block mr-2" />
                  Pocket GPT GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-slate-500 mt-12">
          <p>&copy; 2024 Pocket GPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
