export interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  messageType?: "text" | "buttons" | "gallery";
  buttons?: MessageButton[];
  images?: GalleryImage[];
}

export interface MessageButton {
  id: string;
  text: string;
  action: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  title?: string;
}

export interface BotResponse {
  content: string;
  type: "text" | "buttons" | "gallery";
  buttons?: MessageButton[];
  images?: GalleryImage[];
}