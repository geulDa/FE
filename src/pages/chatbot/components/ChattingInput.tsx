'use client';
import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import { cva } from 'class-variance-authority';

const inputWrapperStyle = cva(
  'flex items-center justify-between w-full bg-gray-100 px-[0.6rem] py-[0.7rem] rounded-[2rem]',
);

interface ChattingInputProps {
  onSend?: (text: string) => void;
}

export default function ChattingInput({ onSend }: ChattingInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleFocus = () => {
      setTimeout(() => {
        inputRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 200);
    };
    const el = inputRef.current;
    el?.addEventListener('focus', handleFocus);
    return () => el?.removeEventListener('focus', handleFocus);
  }, []);

  const handleSubmit = () => {
    if (!message.trim()) return;
    onSend?.(message);
    setMessage('');
  };

  return (
    <div
      className={cn(
        'fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-gray-100 px-[0.6rem] py-[0.7rem] flex items-center gap-[0.8rem]',
      )}
    >
      <div
        className={cn(
          inputWrapperStyle(),
          'flex-1 h-[4rem] bg-white border border-gray-200 rounded-[2rem] flex items-center pl-[1.4rem] pr-[1.2rem] py-[1rem]',
        )}
      >
        <input
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          type='text'
          placeholder='무엇이든 물어보세요'
          className={cn(
            'w-full bg-transparent outline-none text-label-lg placeholder:text-gray-300 text-gray-900',
          )}
        />
      </div>

      <button
        type='button'
        onClick={handleSubmit}
        className={cn(
          'w-[4rem] h-[4rem] flex justify-center items-center rounded-[2rem] bg-mint-500 flex-shrink-0',
        )}
      >
        <Icon name='backto' size={20} color='gray-50' rotate={90} />
      </button>
    </div>
  );
}
