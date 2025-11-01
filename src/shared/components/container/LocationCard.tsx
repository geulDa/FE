import { useState } from 'react';
import { Icon } from '@/shared/icons';
import { Card } from '@/shared/components/container/Card';
import { cn } from '@/shared/lib';
import Image from 'next/image';

interface LocationCardProps {
  name: string;
  address: string;
  description: string;
  variant?: 'gray' | 'mint';
  size?: 'medium' | 'large';
  imageSrc?: string;
}

const LocationCard = ({
  name,
  address,
  description,
  variant = 'gray',
  size = 'medium',
  imageSrc = '',
}: LocationCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
  };
  return (
    <Card variant={variant} size={size}>
      {/* Medium 카드 */}
      {size === 'medium' ? (
        <div className='flex flex-col justify-between w-full'>
          {/* 장소 사진 */}
          <div className='relative w-full h-[9rem] rounded-[2rem] mb-[1rem] overflow-hidden'>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={name}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 145px'
                loading='lazy'
              />
            ) : (
              <div className='absolute inset-0 bg-gray-200' />
            )}
          </div>
          {/* 장소 이름 */}
          <div
            className={cn(
              'text-label-lg mb-[0.2rem] truncate', //1줄 초과
              variant === 'mint' ? 'text-mint-800' : 'text-gray-900',
            )}
          >
            {name}
          </div>
          {/* 장소 주소 */}
          <div
            className={cn(
              'text-body-md truncate', //1줄 초과
              variant === 'mint' ? 'text-mint-500' : 'text-gray-500',
            )}
          >
            {address}
          </div>
        </div>
      ) : (
        // Large 카드
        <div className='flex flex-col justify-start w-full'>
          <div className='flex items-center justify-between w-full'>
            {/* 지도핀 + 장소 이름 + 하트 */}
            <div className='flex items-center gap-[0.4rem]'>
              <Icon
                name='MapPin'
                size={18}
                color={variant === 'mint' ? 'mint-500' : 'gray-600'}
              />
              <span
                className={cn(
                  'text-label-lg truncate', //1줄 초과,
                  variant === 'mint' ? 'text-mint-800' : 'text-gray-900',
                )}
              >
                {name}
              </span>
            </div>

            <div className='flex-shrink-0 ml-auto'>
              <Icon
                name='HeartStraight'
                size={20}
                color={
                  liked
                    ? 'red-400'
                    : variant === 'mint'
                    ? 'mint-400'
                    : 'gray-300'
                }
                fillColor={liked ? 'red-300' : undefined}
                onClick={handleLikeClick}
                className='cursor-pointer'
              />
            </div>
          </div>
          {/* 장소 설명 */}
          <p
            className={cn(
              'text-body-md mt-[0.5rem] line-clamp-4', //4줄 초과',
              variant === 'mint' ? 'text-mint-500' : 'text-gray-500',
            )}
          >
            {description}
          </p>
        </div>
      )}
    </Card>
  );
};

export default LocationCard;
