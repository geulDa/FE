import { useState } from 'react';
import { Icon } from '@/shared/icons';
import { Card } from '@/shared/components/container/Card';
import { cn } from '@/shared/lib';
import Image from 'next/image';

interface EventCardProps {
  name: string;
  address: string;
  description: string;
  startDate?: string;
  endDate?: string;
  variant?: 'gray' | 'mint';
  size?: 'small' | 'medium' | 'large';
  imageSrc?: string;
}

const EventCard = ({
  name,
  address,
  description,
  variant = 'gray',
  size = 'medium',
  imageSrc = '',
}: EventCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
  };
  return (
    <Card
      variant={variant}
      size={size === 'small' ? undefined : size}
      customHeight={
        size === 'large' ? '13rem' : size === 'small' ? '8rem' : undefined
      }
    >
      {size === 'small' ? (
        <div className='flex w-[17rem] h-[8rem] p-[0.9rem_1rem] justify-center items-center flex-shrink-0 gap-[2rem]'>
          {/* 행사 사진 */}
          <div className='relative w-[7rem] h-full rounded-[0.8rem] flex-shrink-0 overflow-hidden'>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={name}
                fill
                className='object-cover'
                sizes='7rem'
                loading='lazy'
              />
            ) : (
              <div className='absolute inset-0 bg-gray-200 rounded-[0.8rem]' />
            )}
          </div>
          {/* 행사 이름*/}
          <span
            className={cn(
              'text-label-md truncate mb-[3rem]',
              variant === 'mint' ? 'text-mint-800' : 'text-gray-600',
            )}
          >
            {name}
          </span>
        </div>
      ) : size === 'medium' ? (
        <div className='flex flex-col justify-between w-full'>
          {/* 행사 사진 */}
          <div className='relative w-full h-[9rem] rounded-[2rem] mb-[1rem] overflow-hidden'>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={name}
                fill
                className='object-cover'
                //성능향상 - 이미지 최적화
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 142px'
                loading='lazy'
              />
            ) : (
              <div className='w-full h-full bg-gray-200' />
            )}
          </div>

          {/* 행사 이름 + 하트 */}
          <div className='flex items-center justify-between w-full mb-[0.2rem]'>
            <span
              className={cn(
                'text-label-lg truncate', //1줄 초과
                variant === 'mint' ? 'text-mint-800' : 'text-gray-900',
              )}
            >
              {name}
            </span>
            <Icon
              name='HeartStraight'
              size={20}
              color={
                liked ? 'red-400' : variant === 'mint' ? 'mint-400' : 'gray-300'
              }
              fillColor={liked ? 'red-300' : undefined}
              onClick={handleLikeClick}
              className='cursor-pointer'
            />
          </div>
          {/* 행사 주소 */}
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
        <div className='flex items-start justify-between w-full gap-[1.2rem]'>
          {/* 행사 이미지 */}
          <div className='relative w-[14.2rem] h-[10rem] rounded-[2rem] flex-shrink-0 overflow-hidden'>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={name}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 14.2rem'
                loading='lazy'
              />
            ) : (
              <div className='absolute inset-0 bg-gray-200' />
            )}
          </div>

          {/* 행사 제목 + 하트 */}
          <div className='flex flex-col justify-between flex-1'>
            <div className='flex items-start justify-between w-full'>
              <span
                className={cn(
                  'text-label-lg truncate', //1줄 초과
                  variant === 'mint' ? 'text-mint-800' : 'text-gray-900',
                )}
              >
                {name}
              </span>
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

            {/* 행사 설명 */}
            <p
              className={cn(
                'text-body-md mt-[1rem] line-clamp-4', //4줄 초과
                variant === 'mint' ? 'text-mint-500' : 'text-gray-500',
              )}
            >
              {description}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default EventCard;