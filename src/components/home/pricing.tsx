import Link from "next/link";
import { BiCheck } from "react-icons/bi";

const freePointers = ["Access to all ChatBots", "Limited features of Gemini Vision"];

const advancePointers = [
  "More features coming soon"
];

function Pricing() {
  return (
    <>
      <div id="pricing" className="bg-neutral-950">
        <section className="max-w-5xl mx-auto w-full px-10 py-10">
          <div className="flex items-center justify-center flex-col gap-y-2 py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg font-medium text-slate-400/70">
              Discover how our service can benefit you
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full md:w-[80%] mx-auto">
            <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-1 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col items-center gap-y-3.5">
                <p className="font-bold text-xl text-white">Free</p>
                <h2 className="font-bold mt-4 text-4xl text-white">$0</h2>
                <Link href="#chatbots" passHref>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
                    Start Chatting
                  </button>
                </Link>
                <ul className="text-left mt-4">
                  {freePointers.map((p, k) => (
                    <li key={k} className="mt-2 text-white flex items-center">
                      <BiCheck className="w-4 h-4 text-green-500 mr-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-1 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col items-center gap-y-3.5">
                <div className="badge badge-secondary badge-sm absolute text-white mt-1 ml-1 left-2 top-2">
                  Most Popular
                </div>
                <p className="font-bold text-xl text-white">Advance</p>
                <div className="flex items-center justify-center">
                  <h2 className="font-bold mt-4 text-4xl text-white inline-block">
                    $8
                  </h2>
                  <span className="text-xs align-middle font-light text-slate-500 ml-1">
                    /monthly
                  </span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-red-600 hover:via-red-700 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-opacity-70 active:bg-red-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
                  Subscribe
                </button>
                <ul className="text-left mt-4">
                  {advancePointers.map((p, k) => (
                    <li key={k} className="mt-2 text-white flex items-center">
                      <BiCheck className="w-4 h-4 text-green-500 mr-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Pricing;
