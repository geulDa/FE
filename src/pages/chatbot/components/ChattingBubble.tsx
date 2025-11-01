'use client';

import { cn } from '@/shared/lib';
import { cva, type VariantProps } from 'class-variance-authority';

const chatBubbleStyle = cva(
  `
  flex items-center
  px-[1.9rem] py-[1.3rem]
  rounded-[2rem]
  text-label-lg foreground
  break-words
  w-fit max-w-[80%]
  `,
  {
    variants: {
      variant: {
        received: 'bg-gray-100 self-start',
        sent: 'bg-mint-100  self-end',
      },
    },
    defaultVariants: {
      variant: 'received',
    },
  },
);

interface ChattingProps extends VariantProps<typeof chatBubbleStyle> {
  message: string;
}

export default function Chatting({ message, variant }: ChattingProps) {
  return (
    <div className='w-full flex flex-col'>
      <div className={cn(chatBubbleStyle({ variant }))}>{message}</div>
    </div>
  );
}
