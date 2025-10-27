'use client';

import React, { useState } from 'react';
import ProfilePhoto from '@/pages/mypage/components/ProfilePhoto';
import PostcardContainer from '@/pages/mypage/components/PostcardContainer';
import { EventCard, BottomNav, PopupSet } from '@/shared/components';

export default function MyPage() {
 const [showLogoutPopup, setShowLogoutPopup] = useState(false); 
  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  return (
    <main className='w-full min-h-screen bg-white flex flex-col items-center'>
      <div className='w-full flex flex-col items-center px-[2.3rem] pb-[2rem]'>
        {/* 프로필 */}
        <section className='w-full flex flex-col items-center mt-[2.4rem] gap-[1.0rem]'>
          <ProfilePhoto/>
          <p className='text-title-md'>이름</p>
        </section>

        {/* 저장한 행사 */}
        <section className='w-full mt-[1.6rem]'>
          <p className='text-label-lg mb-[1rem] pl-[1rem]'>저장한 행사</p>
          <div className='max-h-[18rem] overflow-y-auto no-scrollbar space-y-[1rem]'>
            <EventCard
              name='골반 통신 이상 감지'
              address='우리집'
              description='내 골반이 멈추지 않아서 일까?'
              variant='gray'
              size='large'
              imageSrc=''
            />
            <EventCard
              name='이혼 숙려 캠프'
              address='우리집'
              description='앙 이라는 감정'
              variant='gray'
              size='large'
              imageSrc=''
            />
          </div>
        </section>

        {/* 저장한 엽서 */}
        <section className='w-full mt-[1.8rem]'>
          <p className='text-label-lg mb-[0.6rem] pl-[1rem]'>저장한 엽서</p>
          <PostcardContainer postcards={[]} />
        </section>

        {/* 로그아웃 */}
        <button
          type='button'
          onClick={handleLogout}
          className='mt-[2.1rem] text-label-md text-gray-400 cursor-pointer underline underline-offset-[0.25rem]'
        >
          로그아웃
        </button>
      </div>
      <BottomNav />

       {showLogoutPopup && (
        <PopupSet
          text="로그아웃 하시겠습니까?"
          onClose={() => {
            setShowLogoutPopup(false);
          }}
        />
      )}
    </main>
  );
}
