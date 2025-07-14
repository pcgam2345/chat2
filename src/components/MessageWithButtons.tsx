import React from "react";

interface MessageButton {
  id: string;
  text: string;
  action: string;
  variant?: "primary" | "secondary";
}

interface MessageWithButtonsProps {
  content: string;
  buttons: MessageButton[];
  onButtonClick: (action: string) => void;
  showAvatar?: boolean;
}

export const MessageWithButtons: React.FC<MessageWithButtonsProps> = ({
  content,
  buttons,
  onButtonClick,
  showAvatar = true,
}) => {
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
    <div className="inline-flex items-start gap-3">
      {showAvatar && <AIAvatar />}
      <div className="flex flex-col gap-4 max-w-[280px]">
        <div className="flex relative bg-grey-50 items-start justify-start px-4 py-4 rounded-2xl">
          <div className="relative flex-1 font-body-text-body-3-regular font-[number:var(--body-text-body-3-regular-font-weight)] text-monochrome-900 text-[length:var(--body-text-body-3-regular-font-size)] tracking-[var(--body-text-body-3-regular-letter-spacing)] leading-[var(--body-text-body-3-regular-line-height)] [font-style:var(--body-text-body-3-regular-font-style)]">
            {content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4">
          <div className="grid grid-cols-2 gap-3">
            {buttons.slice(0, 4).map((button) => (
              <button
                key={button.id}
                onClick={() => onButtonClick(button.action)}
                className={`px-6 py-4 rounded-full text-sm font-body-text-body-3-regular transition-all duration-200 hover:opacity-80 w-full border-2 ${
                  button.variant === "primary" 
                    ? "bg-primary-950 text-basewhite border-primary-950" 
                    : "bg-basewhite text-monochrome-900 border-[#e0e0e0]"
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
          {buttons.length > 4 && (
            <div className="flex flex-col gap-3">
              {buttons.slice(4).map((button) => (
                <button
                  key={button.id}
                  onClick={() => onButtonClick(button.action)}
                  className={`px-4 py-3 rounded-full text-sm font-body-text-body-3-regular transition-all duration-200 hover:opacity-80 w-full ${
                    button.variant === "primary" 
                      ? "bg-primary-950 text-basewhite" 
                      : "bg-basewhite text-monochrome-900 border border-[#e6e6e6]"
                  }`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};