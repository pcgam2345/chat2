import React, { useState } from "react";

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
  const [selectedButton, setSelectedButton] = useState<string>("");

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

  const handleButtonClick = (button: MessageButton) => {
    setSelectedButton(button.id);
    onButtonClick(button.action);
  };

  const renderButton = (button: MessageButton) => (
    <button
      key={button.id}
      type="button"
      onClick={() => handleButtonClick(button)}
      className={`h-7 items-center gap-2.5 p-2.5 rounded-[100px] border border-solid inline-flex justify-center relative flex-[0_0_auto] transition-colors duration-200 hover:bg-grey-50 focus:outline-none focus:ring-2 focus:ring-monochrome-200 focus:ring-offset-1 ${
        selectedButton === button.id
          ? "bg-monochrome-900 border-monochrome-900"
          : "bg-white border-monochrome-200"
      }`}
      aria-pressed={selectedButton === button.id}
      role="radio"
      tabIndex={0}
    >
      <span
        className={`relative w-fit mt-[-6.00px] mb-[-4.00px] font-body-text-body-4-regular font-[number:var(--body-text-body-4-regular-font-weight)] text-[length:var(--body-text-body-4-regular-font-size)] tracking-[var(--body-text-body-4-regular-letter-spacing)] leading-[var(--body-text-body-4-regular-line-height)] whitespace-nowrap [font-style:var(--body-text-body-4-regular-font-style)] ${
          selectedButton === button.id ? "text-white" : "text-monochrome-900"
        }`}
      >
        {button.text}
      </span>
    </button>
  );

  // Se há 4 botões ou menos, usa o layout em grid 2x2
  if (buttons.length <= 4) {
    return (
      <div className="inline-flex items-end gap-3">
        {showAvatar && <AIAvatar />}
        <div className="flex flex-col w-[200px] items-center justify-center gap-2 px-4 py-3 relative bg-grey-50 rounded-2xl">
          <div className="relative self-stretch mt-[-1.00px] font-body-text-body-3-regular font-[number:var(--body-text-body-3-regular-font-weight)] text-monochrome-900 text-[length:var(--body-text-body-3-regular-font-size)] tracking-[var(--body-text-body-3-regular-letter-spacing)] leading-[var(--body-text-body-3-regular-line-height)] [font-style:var(--body-text-body-3-regular-font-style)]">
            {content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>

          <fieldset
            className="contents"
            role="radiogroup"
            aria-labelledby="question"
          >
            <legend className="sr-only">Select an option</legend>

            {buttons.length >= 2 && (
              <div className="items-start gap-2 ml-[-8.50px] mr-[-8.50px] inline-flex justify-center relative flex-[0_0_auto]">
                {renderButton(buttons[0])}
                {renderButton(buttons[1])}
              </div>
            )}

            {buttons.length >= 3 && (
              <div className="items-start gap-2 ml-[-5.00px] mr-[-5.00px] inline-flex justify-center relative flex-[0_0_auto]">
                {buttons[2] && renderButton(buttons[2])}
                {buttons[3] && renderButton(buttons[3])}
              </div>
            )}
          </fieldset>
        </div>
      </div>
    );
  }

  // Para mais de 4 botões, usa layout diferente (como upgrade premium)
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
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button)}
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
      </div>
    </div>
  );
};