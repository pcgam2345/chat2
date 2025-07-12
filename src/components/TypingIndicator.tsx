import React from "react";

export const TypingIndicator: React.FC = () => {
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

  return (
    <div className="inline-flex items-center gap-3">
      <AIAvatar />
      <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
        <div className="inline-flex relative flex-[0_0_auto] bg-grey-50 items-center justify-center px-4 py-3 rounded-2xl">
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <div className="relative w-1.5 h-1.5 bg-grey-950 rounded-[3px] animate-pulse" />
            <div className="relative w-1.5 h-1.5 bg-grey-950 rounded-[3px] animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="relative w-1.5 h-1.5 bg-grey-950 rounded-[3px] animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};