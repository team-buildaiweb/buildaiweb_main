"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bot, User, Loader2, Phone, Mail, Calendar } from "lucide-react";
import Link from "next/link";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export function ContactChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi! I'm Alex, your AI assistant at BuildAIWeb. I'm here to help answer your questions and connect you with the right person on our team. What would you like to know?",
      timestamp: new Date(),
      suggestions: [
        "How does the AI mobile app builder work?",
        "What are your pricing plans?",
        "Can I see a demo?",
        "I need help with a custom project",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const parent = messagesEndRef.current.parentElement;
      if (parent) {
        parent.scrollTop = parent.scrollHeight;
      }
    }
  };
  useEffect(() => {
    // Only scroll if there's more than one message (initial message doesn't trigger scroll)
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const generateResponse = (
    userMessage: string
  ): { content: string; suggestions?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes("pricing") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("price")
    ) {
      return {
        content:
          "Great question! We have three pricing tiers:\n\n• **Starter (Free)**: 3 AI builds per month with watermark\n• **Pro ($8/month)**: Unlimited builds and exports\n• **Developer ($20/month)**: All features plus hosting deployment\n\nWould you like me to schedule a call to discuss which plan works best for your needs?",
        suggestions: [
          "Schedule a pricing call",
          "See feature comparison",
          "Start free trial",
        ],
      };
    }

    if (
      lowerMessage.includes("demo") ||
      lowerMessage.includes("try") ||
      lowerMessage.includes("test")
    ) {
      return {
        content:
          "I'd love to show you our AI in action! You can try our interactive demo right now, or I can schedule a personalized demo call with one of our specialists.\n\nThe demo shows how you can build a complete mobile app just by describing what you want in plain English.",
        suggestions: [
          "Try the demo now",
          "Schedule demo call",
          "See example mobile apps",
        ],
      };
    }

    if (
      lowerMessage.includes("how") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("process")
    ) {
      return {
        content:
          "Our AI mobile app builder works in 4 simple steps:\n\n1. **Describe** your mobile app in natural language\n2. **AI generates** layout, content, and styling\n3. **Customize** and preview your site\n4. **Export** or deploy with one click\n\nThe whole process typically takes just 2-5 minutes! Would you like to see it in action?",
        suggestions: [
          "Try it now",
          "See examples",
          "Learn about AI technology",
        ],
      };
    }

    if (
      lowerMessage.includes("custom") ||
      lowerMessage.includes("enterprise") ||
      lowerMessage.includes("business")
    ) {
      return {
        content:
          "For custom projects and enterprise solutions, I'd love to connect you with our business development team. We can create custom AI models, integrate with your existing systems, and provide dedicated support.\n\nLet me gather some basic information and have someone reach out to you today.",
        suggestions: [
          "Schedule business call",
          "Get custom quote",
          "See enterprise features",
        ],
      };
    }

    if (
      lowerMessage.includes("support") ||
      lowerMessage.includes("help") ||
      lowerMessage.includes("problem")
    ) {
      return {
        content:
          "I'm here to help! For technical support, you can:\n\n• Use our 24/7 AI chat support\n• Email our support team\n• Schedule a screen-share session\n• Check our knowledge base\n\nWhat specific issue are you experiencing?",
        suggestions: [
          "Technical support",
          "Billing question",
          "Feature request",
        ],
      };
    }

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("talk") ||
      lowerMessage.includes("call")
    ) {
      return {
        content:
          "I can connect you with our team right away! Here are the best ways to reach us:\n\n📞 **Phone**: +94 77 772 4782\n📧 **Email**: hello@buildaiweb.com\n📅 **Schedule**: Book a call at your convenience\n\nWould you prefer a phone call, email, or scheduled meeting?",
        suggestions: ["Schedule a call", "Send email", "Get phone support"],
      };
    }

    // Default response
    return {
      content:
        "That's a great question! I want to make sure you get the most accurate information. Let me connect you with one of our specialists who can provide detailed answers about your specific needs.\n\nWould you prefer a quick call, email exchange, or scheduled demo?",
      suggestions: [
        "Schedule a call",
        "Send email",
        "Book demo",
        "Continue chatting",
      ],
    };
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    handleSubmit(new Event("submit") as any, suggestion);
  };

  const handleSubmit = async (e: React.FormEvent, suggestionText?: string) => {
    e.preventDefault();
    const messageText = suggestionText || input;
    if (!messageText.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(messageText);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.content,
        timestamp: new Date(),
        suggestions: response.suggestions,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Card className='shadow-xl border-0 h-[600px] flex flex-col'>
      <CardHeader className='bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg flex-shrink-0'>
        <CardTitle className='flex items-center text-xl'>
          <Bot className='w-6 h-6 mr-2' />
          AI Chat Assistant
        </CardTitle>
        <div className='flex items-center space-x-2'>
          <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
          <span className='text-purple-100 text-sm'>
            Alex is online and ready to help
          </span>
        </div>
      </CardHeader>{" "}
      <CardContent
        className='flex-1 overflow-y-auto flex flex-col p-0'
        style={{ maxHeight: "600px" }}
      >
        {/* Messages Area */}
        <div className='flex-1 p-6 space-y-4' ref={messagesEndRef}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[80%] ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === "user"
                      ? "bg-purple-600 ml-3"
                      : "bg-gray-200 mr-3"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className='w-4 h-4 text-white' />
                  ) : (
                    <Bot className='w-4 h-4 text-gray-600' />
                  )}
                </div>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-900 border border-gray-200"
                  }`}
                >
                  <div
                    className='text-sm whitespace-pre-line'
                    dangerouslySetInnerHTML={{
                      __html: message.content.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                  <div
                    className={`text-xs mt-2 ${
                      message.role === "user"
                        ? "text-purple-200"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className='flex justify-start'>
              <div className='flex max-w-[80%]'>
                <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 mr-3 flex items-center justify-center'>
                  <Bot className='w-4 h-4 text-gray-600' />
                </div>
                <div className='bg-gray-100 rounded-2xl px-4 py-3 border border-gray-200'>
                  <div className='flex items-center space-x-2'>
                    <Loader2 className='w-4 h-4 animate-spin text-purple-600' />
                    <span className='text-sm text-gray-600'>
                      Alex is typing...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggestions */}
          {messages.length > 0 &&
            messages[messages.length - 1].role === "assistant" &&
            messages[messages.length - 1].suggestions && (
              <div className='flex justify-start'>
                <div className='max-w-[80%] ml-11'>
                  <div className='flex flex-wrap gap-2'>
                    {messages[messages.length - 1].suggestions!.map(
                      (suggestion, index) => (
                        <Button
                          key={index}
                          variant='outline'
                          size='sm'
                          onClick={() => handleSuggestionClick(suggestion)}
                          className='text-xs hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700'
                        >
                          {suggestion}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
        </div>
        <div ref={messagesEndRef} />

        {/* Quick Actions */}
        <div className='px-6 py-3 border-t border-gray-200 bg-gray-50'>
          <div className='flex items-center justify-center space-x-4 text-sm'>
            <Link href='tel:+94777724782'>
              <Button
                variant='ghost'
                size='sm'
                className='text-purple-600 hover:bg-purple-50'
              >
                <Phone className='w-4 h-4 mr-1' />
                Call Now
              </Button>
            </Link>
            <Link href='mailto:hello@buildaiweb.com'>
              <Button
                variant='ghost'
                size='sm'
                className='text-purple-600 hover:bg-purple-50'
              >
                <Mail className='w-4 h-4 mr-1' />
                Email Us
              </Button>
            </Link>

            <Button
              variant='ghost'
              size='sm'
              className='text-purple-600 hover:bg-purple-50'
              onClick={() => handleSuggestionClick("Schedule a call")}
            >
              <Calendar className='w-4 h-4 mr-1' />
              Book Call
            </Button>
          </div>
        </div>

        {/* Input Area */}
        <div className='p-6 border-t border-gray-200 flex-shrink-0'>
          <form onSubmit={handleSubmit} className='flex space-x-2'>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type your message...'
              className='flex-1 border-2 focus:border-purple-500'
              disabled={isTyping}
            />
            <Button
              type='submit'
              disabled={!input.trim() || isTyping}
              className='bg-purple-600 hover:bg-purple-700'
            >
              {isTyping ? (
                <Loader2 className='w-4 h-4 animate-spin' />
              ) : (
                <Send className='w-4 h-4' />
              )}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
