import React from "react";

interface ButtonOptionProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export const ButtonOption: React.FC<ButtonOptionProps> = ({
  text,
  onClick,
  variant = "primary",
}) => {
  const baseClasses = "px-4 py-2 rounded-lg font-body-text-body-3-regular text-sm transition-all duration-200 hover:opacity-80";
  const variantClasses = variant === "primary" 
    ? "bg-blue600-primary text-basewhite" 
    : "bg-grey-50 text-monochrome-900 border border-gray-200";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {text}
    </button>
  );
};