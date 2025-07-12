import { BotResponse, MessageButton, GalleryImage } from "../types/chat";

// Simulated bot responses with different types
const botResponses: BotResponse[] = [
  {
    content: "Hey, that sounds fun! 🎶✨\nI'd love to help you put together something stylish!\nBut first — to recommend the best looks for you, can I get to know your style profile a bit better?",
    type: "text"
  },
  {
    content: "Great! Let me help you with that. What would you like to do?",
    type: "buttons",
    buttons: [
      { id: "1", text: "Generate visuals", action: "generate_visuals" },
      { id: "2", text: "Style quiz", action: "style_quiz" },
      { id: "3", text: "Browse looks", action: "browse_looks" }
    ]
  },
  {
    content: "Here are some concert outfit ideas for you! ✨",
    type: "gallery",
    images: [
      {
        id: "1",
        url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300",
        alt: "Edgy concert outfit",
        title: "Edgy Rock Look"
      },
      {
        id: "2", 
        url: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300",
        alt: "Casual concert outfit",
        title: "Casual Chic"
      },
      {
        id: "3",
        url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300", 
        alt: "Glam concert outfit",
        title: "Glam Night Out"
      },
      {
        id: "4",
        url: "https://images.pexels.com/photos/1040877/pexels-photo-1040877.jpeg?auto=compress&cs=tinysrgb&w=300",
        alt: "Boho concert outfit", 
        title: "Boho Vibes"
      }
    ]
  },
  {
    content: "Perfect choice! That style would look amazing on you. Would you like me to suggest similar outfits or help you find where to shop for these pieces?",
    type: "buttons",
    buttons: [
      { id: "1", text: "Similar outfits", action: "similar_outfits" },
      { id: "2", text: "Shopping links", action: "shopping_links" },
      { id: "3", text: "Style tips", action: "style_tips" }
    ]
  },
  {
    content: "I love your style! Let me know if you need any other fashion advice. I'm here to help you look amazing! 💫",
    type: "text"
  }
];

export class ChatService {
  private responseIndex = 0;

  async sendMessage(message: string): Promise<BotResponse> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get next response in sequence, or cycle back to beginning
    const response = botResponses[this.responseIndex % botResponses.length];
    this.responseIndex++;

    return response;
  }

  // Handle specific actions from buttons
  async handleAction(action: string): Promise<BotResponse> {
    await new Promise(resolve => setTimeout(resolve, 800));

    switch (action) {
      case "generate_visuals":
        return {
          content: "Here are some visual inspirations for your concert look! 🎨",
          type: "gallery",
          images: [
            {
              id: "v1",
              url: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300",
              alt: "Visual inspiration 1",
              title: "Bold & Edgy"
            },
            {
              id: "v2",
              url: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300",
              alt: "Visual inspiration 2", 
              title: "Minimalist Cool"
            }
          ]
        };

      case "style_quiz":
        return {
          content: "Let's find your perfect style! What describes you best?",
          type: "buttons",
          buttons: [
            { id: "q1", text: "Bold & Dramatic", action: "style_bold" },
            { id: "q2", text: "Casual & Comfortable", action: "style_casual" },
            { id: "q3", text: "Elegant & Classic", action: "style_elegant" }
          ]
        };

      case "browse_looks":
        return {
          content: "Browse these trending concert looks! 🔥",
          type: "gallery",
          images: [
            {
              id: "b1",
              url: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
              alt: "Trending look 1",
              title: "Festival Ready"
            },
            {
              id: "b2",
              url: "https://images.pexels.com/photos/1040877/pexels-photo-1040877.jpeg?auto=compress&cs=tinysrgb&w=300",
              alt: "Trending look 2",
              title: "Concert Chic"
            }
          ]
        };

      default:
        return {
          content: "That's a great choice! What else can I help you with?",
          type: "text"
        };
    }
  }
}