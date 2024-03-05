"use client";

import Conversation from "./components/Conversation";
import Image from "next/image";

export const runtime = "edge";
import * as FullStory from "@fullstory/browser";
import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BoltIcon } from "./components/icons/BoltIcon";
import { XIcon } from "./components/icons/XIcon";
import { FacebookIcon } from "./components/icons/FacebookIcon";
import { LinkedInIcon } from "./components/icons/LinkedInIcon";

export default function Home() {
  useEffect(() => {
    FullStory.init({ orgId: "5HWAN" });
  }, []);

  return (
    <>
      <div className="h-full overflow-hidden">
        {/* height 4rem */}
        <div className="bg-gradient-to-b from-black/50 to-black/10 backdrop-blur-[2px] h-[4rem] flex items-center">
          <header className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between">
            <div>
              <a className="flex items-center" href="/">
                <h1 className="mr-2 -mb-px font-favorit text-xl font-semibold text-white/60">
                  Powered by
                </h1>
                <Image
                  className="w-auto h-6 mb-1"
                  src="/deepgram.svg"
                  alt="Deepgram Logo"
                  width={0}
                  height={0}
                  priority
                />
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-white rounded">
                <a
                  href="https://github.com/deepgram-devs/deepgram-conversational-demo"
                  target="_blank"
                  className="hidden sm:inline-block bg-white text-black rounded m-px px-4 py-2 font-semibold"
                >
                  View the code
                </a>
              </span>

              <span className="gradient-shadow bg-gradient-to-r to-[#13EF93]/50 from-[#149AFB]/80 rounded">
                <a
                  href="https://console.deepgram.com/signup?jump=keys"
                  target="_blank"
                  className="hidden md:inline-block bg-black text-white rounded m-px px-4 py-2 font-semibold"
                >
                  Get an API Key
                </a>
              </span>
            </div>
          </header>
        </div>

        {/* height 100% minus 8rem */}
        <main className="mx-auto max-w-7xl  px-4 md:px-6 lg:px-8 h-[calc(100%-8rem)]">
          <Conversation />
        </main>

        {/* height 4rem */}
        <div className=" backdrop-blur-[2px] h-[4rem] flex items-center">
          <footer className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-center gap-4 md:text-xl font-inter font-semibold text-[#4e4e52]">
            <span>share it</span>
            <a
              href="#"
              onClick={(e) => {
                window.open(
                  "https://twitter.com/intent/tweet?text=%F0%9F%94%A5%F0%9F%8E%89%20Check%20out%20this%20awesome%20%23AI%20demo%20by%20%40Deepgram%20and%20%40lukeocodes%0A%0A%20https%3A//aura-tts-demo.deepgram.com",
                  "",
                  "_blank, width=600, height=500, resizable=yes, scrollbars=yes"
                );

                return e.preventDefault();
              }}
              target="_blank"
            >
              <XIcon />
            </a>
            <a
              href="#"
              onClick={(e) => {
                window.open(
                  "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//aura-tts-demo.deepgram.com&title=Excellent review on my website reviews",
                  "",
                  "_blank, width=600, height=500, resizable=yes, scrollbars=yes"
                );

                return e.preventDefault();
              }}
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              onClick={(e) => {
                window.open(
                  "https://www.facebook.com/sharer/sharer.php?u=https%3A//aura-tts-demo.deepgram.com",
                  "",
                  "_blank, width=600, height=500, resizable=yes, scrollbars=yes"
                );

                return e.preventDefault();
              }}
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <div className="border-l border-current w-px h-7">&nbsp;</div>
            <a href="https://deepgram.com/contact-us" target="_blank">
              contact us
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
