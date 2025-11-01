'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { cn } from '@/shared/lib';
import { Header } from '@/shared/components';
import Chatting from '@/pages/chatbot/components/ChattingBubble';
import ChattingInput from '@/pages/chatbot/components/ChattingInput';

const chatPageStyle = cva(
  'relative w-full h-dvh overflow-hidden bg-white flex flex-col',
);

const mainStyle = cva(
  'relative w-full flex-1 pt-[14.4rem] pb-[10rem] px-[2.4rem] overflow-auto flex flex-col gap-[0.6rem]',
);

const introStyle = cva('flex flex-col items-start gap-[1rem]');

export default function ChatPage() {
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);

  type Message = {
    id: number;
    text: string;
    variant: 'received' | 'sent';
  };

  const [messages, setMessages] = useState<Message[]>([]);

  // 새로운 채팅 자동 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 메세지 전송 핸들러
  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const newMsg = { id: Date.now(), text, variant: 'sent' as const };
    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <div className={cn(chatPageStyle())}>
      {/* 헤더 고정 */}
      <div className='fixed top-0 left-0 w-full z-10'>
        <Header title='ChatBot' onClick={() => router.back()} />
      </div>

      {/* 메인 콘텐츠 */}
      <main className={cn(mainStyle())}>
        {/* 로고 + 기본 멘트 */}
        <div className={cn(introStyle())}>
          {/* 로고 자리 (임시) */}
          <div className='w-[6rem] h-[6rem] rounded-full bg-gray-200 flex-shrink-0' />
          <Chatting
            message='안녕하세요, 글다에요! 부천시 여행에 대한 정보를 쉽게 알려드릴게요.'
            variant='received'
          />
          <Chatting
            message='원하시는 정보를 물어봐주세요!'
            variant='received'
          />
        </div>

        {/* 사용자 메시지 */}
        {messages
          .filter((msg) => msg.id > 2)
          .map((msg) => (
            <Chatting key={msg.id} message={msg.text} variant={msg.variant} />
          ))}

        {/* 스크롤 */}
        <div ref={bottomRef} />
      </main>

      {/* 입력창 */}
      <ChattingInput onSend={handleSend} />
    </div>
  );
}
