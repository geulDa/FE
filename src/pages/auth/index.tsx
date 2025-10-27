'use client';
import { useState } from 'react';
import { Icon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import LoginButton from '@/pages/auth/components/LoginButton';
import RecentLoginBubble from '@/pages/auth/components/RecentLoginBubble';

export default function LoginPage() {
  const [recentPlatform, setRecentPlatform] = useState<string | null>(null);

  const handleLoginClick = (platform: string) => {
    alert(`${platform} 로그인 준비중`);
    console.log(`${platform} 로그인 버튼 클릭`);
    setRecentPlatform(platform);
  };

  return (
    <main className='w-full flex flex-col items-center bg-white'>
      {/* 그라데이션 영역 */}
      <div className='relative w-full h-[22vw] min-h-[14rem] max-h-[28rem]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 402 194'
          className='absolute inset-0 w-full h-full'
          preserveAspectRatio='none'
        >
          <path
            d='M402 180.922C257.925 56.9753 160.195 270.883 0 161.93V0H402V180.922Z'
            fill='url(#paint0_linear_mint)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_mint'
              x1='201.53'
              y1='0'
              x2='201'
              y2='163'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D9FAFB' />
              <stop offset='1' stopColor='#8CEFF2' />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 콘텐츠 */}
      <section
        className={cn(
          'w-full flex flex-col items-center text-center',
          'px-[6.8rem] pt-[5.2rem]',
        )}
      >
        {/* 타이틀 */}
        <div className='flex flex-col items-center gap-[3.3rem] mb-[3.2rem]'>
          <h1 className='text-headline-lg-serif text-mint-900'>글다</h1>
          <p className='text-label-md text-mint-900'>
            만화 속 부천 여행
            <br />
            10개 명소를 탐험하고 엽서를 모아보세요!
          </p>
        </div>

        {/* 로고 */}
        <div className='p-[3.2rem] mb-[3.2rem]'>
          <Icon name='Stamp' size={132} color='mint-400' />
        </div>

        <div className='flex flex-col items-center gap-[2.1rem]'>
          <p className='text-label-lg text-gray-400'>start with</p>

          <div className='flex gap-[1.5rem] relative'>
            {/* 카카오 */}
            <div className='relative'>
              <LoginButton
                platform='kakao'
                onClick={() => handleLoginClick('카카오')}
              />
              {recentPlatform === '카카오' && (
                <div
                  className='absolute -top-[3.8rem] left-1/2 -translate-x-1/2 
          w-auto min-w-max h-auto flex-shrink-0 pointer-events-none'
                >
                  <RecentLoginBubble />
                </div>
              )}
            </div>

            {/* 구글 */}
            <div className='relative'>
              <LoginButton
                platform='google'
                onClick={() => handleLoginClick('구글')}
              />
              {recentPlatform === '구글' && (
                <div
                  className='absolute -top-[3.8rem] left-1/2 -translate-x-1/2 
          w-auto min-w-max h-auto flex-shrink-0 pointer-events-none'
                >
                  <RecentLoginBubble />
                </div>
              )}
            </div>
          </div>

          <p className='text-label-md text-gray-400 cursor-pointer underline underline-offset-[0.25rem]'>
            비회원 로그인
          </p>
        </div>
        {/* 안내문 */}
        <p className='mt-[5rem] text-label-sm text-gray-400'>
          비회원은 스탬프 저장과 공유 기능을 사용할 수 없습니다.
        </p>
      </section>
    </main>
  );
}
