import React, { useState } from "react";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    icon: "/img/group-1437254537.png",
    isActive: true,
    bgImage: "/img/rectangle-5803.svg",
  },
  {
    id: "lookbook",
    label: "Lookbook",
    icon: null,
    isActive: false,
  },
  {
    id: "discover",
    label: "Discover",
    icon: "/img/discover-icon.png",
    isActive: false,
    bgImage: "/img/05.svg",
  },
];

const chatMessages = [
  {
    id: 1,
    type: "user",
    content: "I want outfit ideas for a concert on Saturday night.",
    timestamp: new Date(),
  },
  {
    id: 2,
    type: "ai",
    content:
      "Hey, that sounds fun! 🎶✨\nI'd love to help you put together something stylish!\nBut first — to recommend the best looks for you, can I get to know your style profile a bit better?",
    timestamp: new Date(),
  },
  {
    id: 3,
    type: "user",
    content: "Okay, sure, I'll answer that.",
    timestamp: new Date(),
  },
  {
    id: 4,
    type: "ai",
    content: "typing",
    timestamp: new Date(),
  },
];

export const Conversational = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Handle message submission
      console.log("Sending message:", inputValue);
      setInputValue("");
    }
  };

  const AIAvatar = () => (
    <div className="relative w-10 h-10 bg-[#e0f3f3] rounded-[83.33px]">
      <div className="h-10">
        <div className="w-10 h-10 rounded-[100px] overflow-hidden bg-[linear-gradient(162deg,rgba(198,248,255,1)_0%,rgba(0,122,247,1)_100%)]">
          <div className="relative w-8 h-8 top-[3px] left-[5px]">
            <div className="relative w-[27px] h-[26px] top-[3px] left-[3px]">
              <div className="h-[26px]">
                <div className="relative w-[27px] h-[26px]">
                  <div className="absolute w-[22px] h-[25px] top-px left-0">
                    <div className="relative h-[25px]">
                      <img
                        className="absolute w-[22px] h-[19px] top-1.5 left-0"
                        alt="Vector"
                        src="/img/vector-2.svg"
                      />
                      <img
                        className="absolute w-[13px] h-2 top-0 left-[5px]"
                        alt="Group"
                        src="/img/group-3.png"
                      />
                      <div className="absolute w-[11px] h-[13px] top-[9px] left-0.5">
                        <div className="relative h-[13px]">
                          <img
                            className="absolute w-2 h-[13px] top-0 left-0"
                            alt="Group"
                            src="/img/group-4.png"
                          />
                          <img
                            className="absolute w-2 h-[13px] top-0 left-[3px]"
                            alt="Group"
                            src="/img/group-5.png"
                          />
                        </div>
                      </div>
                      <img
                        className="absolute w-1 h-[13px] top-[9px] left-[15px]"
                        alt="Rectangle"
                        src="/img/rectangle-35-1.svg"
                      />
                      <img
                        className="absolute w-[5px] h-[13px] top-[9px] left-3.5"
                        alt="Rectangle stroke"
                        src="/img/rectangle-35-stroke-1.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="absolute w-2 h-2 top-px left-[19px]"
                    alt="Star"
                    src="/img/star-3-1.svg"
                  />
                  <img
                    className="absolute w-[3px] h-[3px] top-0 left-[17px]"
                    alt="Star"
                    src="/img/star-4-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TypingIndicator = () => (
    <div className="inline-flex relative flex-[0_0_auto] bg-grey-50 items-center justify-center px-4 py-3 rounded-2xl">
      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
        <div className="relative w-1.5 h-1.5 bg-grey-950 rounded-[3px]" />
        <div className="relative w-1.5 h-1.5 bg-grey-950 rounded-[3px]" />
        <div className="relative w-1.5 h-1.5 bg-grey-950 rounded-[3px]" />
      </div>
    </div>
  );

  return (
    <main
      className="relative w-[375px] h-[812px] bg-white rounded-[32px] overflow-hidden"
      data-model-id="1:42911"
      role="main"
      aria-label="Conversational AI Chat Interface"
    >
      {/* Bottom Navigation */}
      <nav
        className="flex w-[377px] h-[82px] items-start justify-between px-6 py-0 absolute top-[731px] -left-px bg-white border-t [border-top-style:solid] border-[#e6e6e6]"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <div key={item.id} className="relative w-[75px] h-[65px] bg-white">
            {item.id === "home" && (
              <div className="inline-flex flex-col items-center gap-2.5 relative left-[18px] bg-white">
                <img
                  className="relative w-10 h-0.5"
                  alt=""
                  src={item.bgImage}
                  aria-hidden="true"
                />
                <div className="inline-flex flex-col items-center gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-6 h-6">
                    <div className="relative w-5 h-5 top-0.5 left-0.5">
                      <div className="w-[21px] h-[21px] bg-[url(/img/vector.svg)] bg-[100%_100%] relative -top-px -left-px">
                        <img
                          className="absolute w-[13px] h-3 top-1 left-[5px]"
                          alt=""
                          src={item.icon}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-fit [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-[#20174f] text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </div>
            )}

            {item.id === "lookbook" && (
              <div className="inline-flex flex-col items-center gap-1.5 relative top-3 left-[15px]">
                <div className="relative w-6 h-6">
                  <div className="relative w-4 h-[19px] top-[3px] left-1">
                    <div className="w-[17px] h-5 relative -top-px -left-px">
                      <img
                        className="absolute w-[17px] h-[18px] top-0.5 left-0"
                        alt=""
                        src="/img/rectangle-5758.svg"
                        aria-hidden="true"
                      />
                      <img
                        className="absolute w-1.5 h-px top-[13px] left-1.5"
                        alt=""
                        src="/img/vector-17931.svg"
                        aria-hidden="true"
                      />
                      <div className="absolute w-[7px] h-1 top-[7px] left-[5px] rounded border-[1.3px] border-solid border-[#7e7d90]" />
                      <img
                        className="absolute w-4 h-1 top-0 left-0"
                        alt=""
                        src="/img/rectangle-5759.svg"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#7d7d90] text-[10px] tracking-[0] leading-[12.0px] whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            )}

            {item.id === "discover" && (
              <div className="relative w-[75px] h-[65px] bg-[url(/img/05.svg)] bg-[100%_100%]">
                <div className="inline-flex flex-col items-center gap-1.5 relative top-3 left-4">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[19px] h-[19px] top-0.5 left-0.5"
                      alt=""
                      src={item.icon}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="relative w-fit [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#7d7d90] text-[10px] tracking-[0] leading-[12.0px] whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Header */}
      <header className="flex flex-col w-[375px] items-start absolute top-0 left-0">
        <div className="relative self-stretch w-full h-11" />
        <div className="flex items-center justify-between pt-3 pb-1.5 px-6 relative self-stretch w-full flex-[0_0_auto]">
          <button
            className="relative w-10 h-10 rounded-[20px] border border-solid border-[#d9d9d9]"
            aria-label="Open menu"
          >
            <img
              className="absolute w-6 h-6 top-[7px] left-[7px]"
              alt=""
              src="/img/menu-01.svg"
              aria-hidden="true"
            />
          </button>
          <button
            className="relative w-10 h-10 rounded-[20px] border border-solid border-[#d9d9d9]"
            aria-label="View notifications"
          >
            <img
              className="absolute w-6 h-6 top-[7px] left-[7px]"
              alt=""
              src="/img/notification-01.svg"
              aria-hidden="true"
            />
          </button>
        </div>
      </header>

      {/* Chat Input */}
      <div className="flex flex-col w-[375px] items-start gap-2.5 px-6 py-0 absolute top-[639px] left-0">
        <form
          onSubmit={handleSubmit}
          className="flex h-[50px] items-center justify-between pl-4 pr-[3px] py-4 relative self-stretch w-full bg-white rounded-[100px] border border-solid border-[#eeeeee] shadow-[0px_10px_20px_#a1a0ab26]"
        >
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto] mt-[-1.50px] mb-[-1.50px]">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              className="relative w-fit mt-[-1.00px] font-body-text-body-3-regular font-[number:var(--body-text-body-3-regular-font-weight)] text-monochrome-600 text-[length:var(--body-text-body-3-regular-font-size)] tracking-[var(--body-text-body-3-regular-letter-spacing)] leading-[var(--body-text-body-3-regular-line-height)] whitespace-nowrap [font-style:var(--body-text-body-3-regular-font-style)] bg-transparent border-none outline-none"
              aria-label="Type your message"
            />
          </div>
          <button
            type="submit"
            className="relative w-11 h-11 mt-[-13.00px] mb-[-13.00px] bg-primary-950 rounded-[22px]"
            aria-label="Send message"
          >
            <div className="relative w-5 h-5 top-3 left-3 rotate-[180.00deg]">
              <img
                className="absolute w-2 h-[11px] top-1 left-1.5 rotate-[-180.00deg]"
                alt=""
                src="/img/arrow-right.png"
                aria-hidden="true"
              />
            </div>
          </button>
        </form>
      </div>

      {/* Chat Messages */}
      <div className="absolute top-[122px] left-0 w-[375px] px-6 space-y-4">
        {/* User Message 1 */}
        <div className="flex justify-end">
          <div className="flex w-[200px] items-center justify-center px-4 py-3 bg-blue600-primary rounded-2xl">
            <p className="relative flex-1 mt-[-1.00px] font-body-text-body-3-regular font-[number:var(--body-text-body-3-regular-font-weight)] text-basewhite text-[length:var(--body-text-body-3-regular-font-size)] tracking-[var(--body-text-body-3-regular-letter-spacing)] leading-[var(--body-text-body-3-regular-line-height)] [font-style:var(--body-text-body-3-regular-font-style)]">
              I want outfit ideas for a concert on Saturday night.
            </p>
          </div>
        </div>

        {/* AI Message 1 */}
        <div className="inline-flex items-end gap-3 mt-8">
          <AIAvatar />
          <div className="flex w-[200px] relative bg-grey-50 items-center justify-center px-4 py-3 rounded-2xl">
            <p className="relative flex-1 mt-[-1.00px] font-body-text-body-3-regular font-[number:var(--body-text-body-3-regular-font-weight)] text-monochrome-900 text-[length:var(--body-text-body-3-regular-font-size)] tracking-[var(--body-text-body-3-regular-letter-spacing)] leading-[var(--body-text-body-3-regular-line-height)] [font-style:var(--body-text-body-3-regular-font-style)]">
              Hey, that sounds fun! 🎶✨
              <br /> I&apos;d love to help you put together something stylish!
              <br />
              But first — to recommend the best looks for you, can I get to know
              your style profile a bit better?
            </p>
          </div>
        </div>

        {/* User Message 2 */}
        <div className="flex justify-end mt-[155px]">
          <div className="flex w-[200px] bg-blue600-primary items-center justify-center px-4 py-3 rounded-2xl">
            <p className="relative flex-1 mt-[-1.00px] font-body-text-body-3-regular font-[number:var(--body-text-body-3-regular-font-weight)] text-basewhite text-[length:var(--body-text-body-3-regular-font-size)] tracking-[var(--body-text-body-3-regular-letter-spacing)] leading-[var(--body-text-body-3-regular-line-height)] [font-style:var(--body-text-body-3-regular-font-style)]">
              Okay, sure, I&#39;ll answer that.
            </p>
          </div>
        </div>

        {/* AI Typing Indicator */}
        <div className="inline-flex items-center gap-3 mt-4">
          <AIAvatar />
          <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
            <TypingIndicator />
          </div>
        </div>
      </div>
    </main>
  );
};
