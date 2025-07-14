import { BotResponse, MessageButton, GalleryImage, PhotoCard } from "../types/chat";

// Simulated bot responses with different types
const botResponses: BotResponse[] = [
  {
    content: "How tall are you?\n\nJust pick the one that's closest 👇",
    type: "buttons",
    buttons: [
      { id: "1", text: "Under 150 cm", action: "height_under_150" },
      { id: "2", text: "150-165 cm", action: "height_150_165" },
      { id: "3", text: "165-175 cm", action: "height_165_175" },
      { id: "4", text: "Over 175 cm", action: "height_over_175" }
    ]
  },
  {
    content: "Whoa, style superstar — you've maxed out your free creative sparks for today!\n\nOn the free plan, you get:\n\n✨ 5 image prompts/day\n🎥 1 video/day\n\nBut why stop there? Go Premium to unlock:\n\n🚀 50 images/day\n🎬 10 videos/day\n\nAll for just $5/month or $1.25/week.\n\nSubscribe now and keep your fashion magic flowing! ✨",
    type: "buttons",
    buttons: [
      { id: "1", text: "Upgrade & Keep Styling", action: "upgrade_premium", variant: "primary" },
      { id: "2", text: "I'll wait until tomorrow", action: "wait_tomorrow" }
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
    content: "Okay, cooking up some looks for you... 🔥\nStyling you up now...\n\nHere's your Day Explorer visual looks:\nSwipe through the vibe 📱👆",
    type: "swipeable-gallery",
    photos: [
      {
        id: "look1",
        backgroundImage: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300",
        hasOverflow: true
      },
      {
        id: "look2", 
        backgroundImage: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300",
        hasOverflow: true
      },
      {
        id: "look3",
        customImage: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
        hasOverflow: true
      },
      {
        id: "look4",
        hasOverflow: false
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
          content: "Okay, cooking up some looks for you... 🔥\nStyling you up now...\n\nHere's your Day Explorer visual looks:\nSwipe through the vibe 📱👆",
          type: "swipeable-gallery",
          photos: [
            {
              id: "visual1",
              backgroundImage: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300",
              hasOverflow: true
            },
            {
              id: "visual2",
              backgroundImage: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300",
              hasOverflow: true
            },
            {
              id: "visual3",
              customImage: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
              hasOverflow: true
            },
            {
              id: "visual4",
              hasOverflow: false
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
          content: "Browse these trending concert looks! 🔥\nSwipe through the vibe 📱👆",
          type: "swipeable-gallery",
          photos: [
            {
              id: "trend1",
              backgroundImage: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
              hasOverflow: true
            },
            {
              id: "trend2",
              backgroundImage: "https://images.pexels.com/photos/1040877/pexels-photo-1040877.jpeg?auto=compress&cs=tinysrgb&w=300",
              hasOverflow: true
            },
            {
              id: "trend3",
              customImage: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300",
              hasOverflow: true
            },
            {
              id: "trend4",
              hasOverflow: false
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