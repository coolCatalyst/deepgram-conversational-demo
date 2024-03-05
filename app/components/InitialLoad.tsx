import { ExclamationIcon } from "./icons/ExclamationIcon";
import { Headphones } from "./Headphones";
import { isBrowser, isIOS } from "react-device-detect";
import Image from "next/image";

export const InitialLoad = ({ fn }: { fn: () => void }) => {
  return (
    <>
      <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10 p-3 mb-1/2">
        <button
          onClick={() => fn()}
          type="button"
          className="relative block w-full glass p-12 rounded-xl"
        >
          <span className="inline-block h-8 w-8 flex-shrink-0 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M11.1,24H1c-0.4,0-0.5-0.4-0.3-0.6l6.5-6.2c0.1-0.1,0.2-0.1,0.3-0.1h3.7c2.9,0,5.3-2.1,5.4-4.8c0.1-2.8-2.3-5.2-5.3-5.2H7.4
	v4.6c0,0.2-0.2,0.4-0.4,0.4H0.4c-0.2,0-0.4-0.2-0.4-0.4V0.4C0,0.2,0.2,0,0.4,0h10.9C18.4,0,24.1,5.5,24,12.2
	C23.9,18.8,18.1,24,11.1,24z"
              />
            </svg>
          </span>
          <h2 className="font-favorit mt-2 block font-bold text-xl text-gray-100">
            Welcome to Deepgram&apos;s AI Agent Demo.
          </h2>
          <div className="flex justify-center mt-2">
            <ul className="list-disc list-inside marker:text-[#13EF93]">
              <li className="text-center">Nova-2 Speech-to-Text</li>
              <li className="text-center">Aura Text-to-Speech</li>
            </ul>
          </div>
          <span className="mt-4 block text-sm text-gray-100/70">
            <Headphones /> For optimal enjoyment, we recommend using headphones
            while using this application.
          </span>
          {isIOS && (
            <span className="mt-4 block text-sm text-[#ffb02e]">
              <ExclamationIcon /> Text-to-speech audio playback is currently
              disabled on iOS mobile devices.
            </span>
          )}
          <span className="mt-8 block font-semibold">
            <span className="bg-white text-black rounded m-px px-6 py-3 font-semibold">
              {isBrowser ? "Click" : "Tap"} here to start
            </span>
          </span>
        </button>
      </div>
    </>
  );
};
