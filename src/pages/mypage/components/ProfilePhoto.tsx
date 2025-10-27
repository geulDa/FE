'use client';

import { Icon } from '@/shared/icons';
import { cn } from '@/shared/lib';

interface ProfilePhotoProps {
  src?: string;
  className?: string;
}

export default function ProfilePhoto({
  src,
  className,
}: ProfilePhotoProps) {
  const baseStyle = `
    flex items-center justify-center
    h-[14.6rem] w-[14.6rem]
    rounded-[20px]
    border border-gray-300
    bg-gray-100
    overflow-hidden
  `;

  return (
    <div className={cn(baseStyle, className)}>
      {src ? (
        <img src={src} className='w-full h-full object-cover' />
      ) : (
        <div className='p-[6.1rem] flex items-center justify-center'>
          <Icon name='User' size={24} color='gray-500' />
        </div>
      )}
    </div>
  );
}
