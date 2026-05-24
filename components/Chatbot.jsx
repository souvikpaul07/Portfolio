'use client';

import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import ReactMarkdown from 'react-markdown';

// Premium AI Bot Logo Component
function PremiumAIBotLogo({ isOpen, isLoading }) {
  return (
    <svg
      viewBox="0 0 120 140"
      className="w-8 h-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5b7cff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b8eff" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <filter id="botShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.25" />
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Antenna */}
      <motion.rect
        x="56"
        y="2"
        width="8"
        height="18"
        rx="4"
        fill="#7c3aed"
        animate={{ rotate: isLoading ? [-3, 3, -3] : 0 }}
        transition={{ duration: 2, repeat: isLoading ? Infinity : 0 }}
        transformOrigin="60 8"
      />
      <circle cx="60" cy="2" r="5" fill="#ec4899" filter="url(#glow)" />

      {/* Head - Rounded Rectangle */}
      <motion.rect
        x="20"
        y="18"
        width="80"
        height="60"
        rx="18"
        fill="url(#headGradient)"
        filter="url(#botShadow)"
        animate={{ scale: isOpen ? 1.05 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 12 }}
      />

      {/* Face Area - Light Background */}
      <rect
        x="32"
        y="28"
        width="56"
        height="40"
        rx="12"
        fill="#e0e7ff"
        opacity="0.95"
      />

      {/* Left Eye */}
      <motion.circle
        cx="46"
        cy="42"
        r="7"
        fill="#5b7cff"
        animate={isLoading ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 1.2, repeat: isLoading ? Infinity : 0 }}
      />
      <circle cx="46" cy="42" r="3.5" fill="#ffffff" opacity="0.8" />

      {/* Right Eye */}
      <motion.circle
        cx="74"
        cy="42"
        r="7"
        fill="#5b7cff"
        animate={isLoading ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 1.2, repeat: isLoading ? Infinity : 0 }}
      />
      <circle cx="74" cy="42" r="3.5" fill="#ffffff" opacity="0.8" />

      {/* Left Ear */}
      <motion.circle
        cx="16"
        cy="48"
        r="10"
        fill="url(#botGradient)"
        filter="url(#botShadow)"
        animate={{ rotate: isLoading ? [-5, 5, -5] : 0 }}
        transition={{ duration: 2, repeat: isLoading ? Infinity : 0 }}
      />
      <circle cx="16" cy="48" r="6" fill="#c084fc" opacity="0.7" />

      {/* Right Ear */}
      <motion.circle
        cx="104"
        cy="48"
        r="10"
        fill="url(#botGradient)"
        filter="url(#botShadow)"
        animate={{ rotate: isLoading ? [5, -5, 5] : 0 }}
        transition={{ duration: 2, repeat: isLoading ? Infinity : 0 }}
      />
      <circle cx="104" cy="48" r="6" fill="#c084fc" opacity="0.7" />

      {/* Body */}
      <motion.path
        d="M 25 80 Q 20 95 25 110 Q 60 125 95 110 Q 100 95 95 80 Z"
        fill="url(#botGradient)"
        filter="url(#botShadow)"
        animate={{ scale: isOpen ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 12 }}
      />

      {/* AI Chip - Center */}
      <motion.rect
        x="45"
        y="85"
        width="30"
        height="30"
        rx="6"
        fill="#7c3aed"
        filter="url(#botShadow)"
        animate={isLoading ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 1.2, repeat: isLoading ? Infinity : 0 }}
      />

      {/* AI Text */}
      <text
        x="60"
        y="107"
        fontSize="14"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        AI
      </text>

      {/* Pink Accent Blocks */}
      <motion.rect
        x="38"
        y="95"
        width="6"
        height="20"
        rx="2"
        fill="#ec4899"
        filter="url(#glow)"
        animate={isLoading ? { y: [95, 92, 95] } : {}}
        transition={{ duration: 1.2, delay: 0.1, repeat: isLoading ? Infinity : 0 }}
      />
      <motion.rect
        x="76"
        y="100"
        width="6"
        height="15"
        rx="2"
        fill="#ec4899"
        filter="url(#glow)"
        animate={isLoading ? { y: [100, 97, 100] } : {}}
        transition={{ duration: 1.2, delay: 0.2, repeat: isLoading ? Infinity : 0 }}
      />
    </svg>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi! I'm Comet - AI Assistant. Feel free to ask me anything about Souvik's portfolio, skills, or projects!",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

// Hydration pattern for Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setShowNotification(false);

    try {
      // Format messages for API
      const formattedMessages = messages
        .filter((msg) => msg.role !== undefined)
        .map((msg) => ({
          role: msg.role === 'assistant' ? 'assistant' : 'user',
          content: msg.content,
        }));
      formattedMessages.push({
        role: 'user',
        content: inputValue,
      });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: formattedMessages,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();

      const aiMessage = {
        id: messages.length + 2,
        content: data.content,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        content: 'Sorry, I encountered an error. Please try again.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Notification Bubble - On Logo */}
      {mounted && (
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.button
              onClick={handleOpenChat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="fixed bottom-16 right-4 z-50"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`px-3 py-2 rounded-full font-semibold text-xs shadow-lg whitespace-nowrap cursor-pointer ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                }`}
              >
                💬 Can I help?
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      )}

      {/* Chat Button - Premium AI Bot */}
      <motion.button
        onClick={handleOpenChat}
        className="fixed bottom-6 right-6 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all z-40 bg-gradient-to-br from-blue-600 to-purple-600"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Open chatbot"
        onMouseEnter={() => setShowNotification(false)}
      >
        <PremiumAIBotLogo isOpen={isOpen} isLoading={isLoading} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`fixed bottom-28 right-6 w-96 h-[32rem] rounded-2xl shadow-2xl flex flex-col z-50 border ${
              isDark
                ? 'bg-slate-900 border-slate-700'
                : 'bg-white border-purple-200'
            }`}
          >
            {/* Header */}
            <div
              className={`bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-t-2xl p-4 flex justify-between items-center ${
                isDark ? 'from-purple-700 to-indigo-700' : ''
              }`}
            >
              <div>
                <h3 className="font-semibold text-lg">Hello user, I&apos;m Comet</h3>
                {/* <p className="text-sm opacity-90">Ask me anything!</p> */}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition"
                aria-label="Close chatbot"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              className={`flex-1 overflow-y-auto p-4 space-y-4 ${
                isDark ? 'bg-slate-800' : 'bg-gradient-to-b from-purple-50 to-indigo-50'
              }`}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-br-none'
                        : isDark
                          ? 'bg-slate-700 text-white rounded-bl-none shadow'
                          : 'bg-white text-gray-900 rounded-bl-none shadow border border-purple-100'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <p className="text-sm">{message.content}</p>
                    ) : (
                      <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown
                          components={{
                            h1: (props) => <h1 className="text-lg font-bold mt-2 mb-1" {...props} />,
                            h2: (props) => <h2 className="text-base font-bold mt-2 mb-1" {...props} />,
                            h3: (props) => <h3 className="text-sm font-bold mt-1 mb-0.5" {...props} />,
                            strong: (props) => <strong className="font-bold" {...props} />,
                            em: (props) => <em className="italic" {...props} />,
                            ul: (props) => <ul className="list-disc list-inside ml-2" {...props} />,
                            ol: (props) => <ol className="list-decimal list-inside ml-2" {...props} />,
                            li: (props) => <li className="mb-0.5" {...props} />,
                            code: (props) => <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-xs" {...props} />,
                            blockquote: (props) => <blockquote className="border-l-4 border-purple-500 pl-3 italic" {...props} />,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div
                    className={`px-4 py-2 rounded-lg rounded-bl-none shadow ${
                      isDark
                        ? 'bg-slate-700 text-white'
                        : 'bg-white text-gray-900 border border-purple-100'
                    }`}
                  >
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className={`border-t p-4 rounded-b-2xl ${
                isDark
                  ? 'border-slate-700 bg-slate-900'
                  : 'border-purple-200 bg-white'
              }`}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isDark
                      ? 'border-slate-600 bg-slate-800 text-white'
                      : 'border-purple-200 bg-white text-gray-900'
                  }`}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg px-4 py-2 transition font-medium"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
