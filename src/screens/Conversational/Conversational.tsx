import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../../types/chat";
import { ChatService } from "../../services/chatService";
import { ChatBubble } from "../../components/ChatBubble";
import { TypingIndicator } from "../../components/TypingIndicator";
import { MessageWithButtons } from "../../components/MessageWithButtons";
import { MessageWithGallery } from "../../components/MessageWithGallery";

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

export const Conversational = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const chatService = useRef(new ChatService());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addMessage = (message: Omit<ChatMessage, "id" | "timestamp">) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isInputDisabled) {
      const userMessage = inputValue.trim();
      setInputValue("");
      setIsInputDisabled(true);
      setIsTyping(true);

      // Add user message
      addMessage({
        type: "user",
        content: userMessage,
      });

      try {
        // Get bot response
        const response = await chatService.current.sendMessage(userMessage);
        setIsTyping(false);

        // Add bot message based on response type
        addMessage({
          type: "ai",
          content: response.content,
          messageType: response.type,
          buttons: response.buttons,
          images: response.images,
        });
      } catch (error) {
        setIsTyping(false);
        addMessage({
          type: "ai",
          content: "Sorry, I'm having trouble responding right now. Please try again!",
        });
      } finally {
        setIsInputDisabled(false);
      }
    }
  };

  const handleButtonClick = async (action: string) => {
    setIsInputDisabled(true);
    setIsTyping(true);

    try {
      const response = await chatService.current.handleAction(action);
      setIsTyping(false);

      addMessage({
        type: "ai",
        content: response.content,
        messageType: response.type,
        buttons: response.buttons,
        images: response.images,
      });
    } catch (error) {
      setIsTyping(false);
      addMessage({
        type: "ai",
        content: "Sorry, I'm having trouble with that action. Please try again!",
      });
    } finally {
      setIsInputDisabled(false);
    }
  };

  const handleTryNow = (imageId: string) => {
    console.log("Try Now clicked for image:", imageId);
    // Add user message showing they selected an outfit
    addMessage({
      type: "user",
      content: "I like this outfit!",
    });

    // Trigger bot response
    handleButtonClick("outfit_selected");
  };

  const renderMessage = (message: ChatMessage, index: number) => {
    if (message.type === "user") {
      return <ChatBubble key={message.id} {...message} />;
    }

    // AI message
    switch (message.messageType) {
      case "buttons":
        return (
          <MessageWithButtons
            key={message.id}
            content={message.content}
            buttons={message.buttons || []}
            onButtonClick={handleButtonClick}
            showAvatar={true}
          />
        );
      case "gallery":
        return (
          <MessageWithGallery
            key={message.id}
            content={message.content}
            images={message.images || []}
            onTryNow={handleTryNow}
            showAvatar={true}
          />
        );
      default:
        return <ChatBubble key={message.id} {...message} />;
    }
  };

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
              disabled={isInputDisabled}
              placeholder="Ask me anything..."
              className="relative w-fit mt-[-1.00px] font-body-text-body-3-regular font-[number:var(--body-text-body-3-regular-font-weight)] text-monochrome-600 text-[length:var(--body-text-body-3-regular-font-size)] tracking-[var(--body-text-body-3-regular-letter-spacing)] leading-[var(--body-text-body-3-regular-line-height)] whitespace-nowrap [font-style:var(--body-text-body-3-regular-font-style)] bg-transparent border-none outline-none disabled:opacity-50"
              aria-label="Type your message"
            />
          </div>
          <button
            type="submit"
            disabled={isInputDisabled || !inputValue.trim()}
            className="relative w-11 h-11 mt-[-13.00px] mb-[-13.00px] bg-primary-950 rounded-[22px] disabled:opacity-50 disabled:cursor-not-allowed"
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
      <div className="absolute top-[122px] left-0 w-[375px] h-[517px] overflow-y-auto px-6 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-monochrome-600 font-body-text-body-3-regular text-center">
              Start a conversation by typing a message below! 👋
            </p>
          </div>
        )}
        
        {messages.map((message, index) => renderMessage(message, index))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
    </main>
  );
};