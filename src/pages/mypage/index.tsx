'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AxiosError } from 'axios';
import ProfilePhoto from '@/pages/mypage/components/ProfilePhoto';
import PostcardContainer from '@/pages/mypage/components/PostcardContainer';
import LoginRequired from '@/shared/components/mypage/LoginRequired';
import LogoutConfirm from '@/shared/components/mypage/LogoutConfirm';
import { EventCard, BottomNav } from '@/shared/components';
import { useUserStatus } from '@/shared/hooks/useUserStatus';
import { usePopup } from '@/shared/hooks/mypage/usePopup';
import { useMyPageQuery } from '@/shared/api/member';

export default function MyPage() {
  const { isLoggedIn } = useUserStatus();
  const router = useRouter();
  const {
    showLoginPopup,
    showLogoutPopup,
    openLogin,
    openLogout,
    closeLogin,
    closeLogout,
  } = usePopup();

  const { data, isError, error, refetch } = useMyPageQuery(!!isLoggedIn);

  useEffect(() => {
    const isUnauthorized =
      isError && (error as AxiosError)?.response?.status === 401;

    if (isLoggedIn === false || isUnauthorized) {
      openLogin();
    }
  }, [isLoggedIn, isError, error, openLogin]);

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    }
  }, [isLoggedIn, refetch]);

  const profile = {
    name: data?.name,
    profileImageUrl: data?.profileImageUrl,
  };

  const bookmarkedEvents = data?.bookmarkedEvents || [];
  const postcards = data?.postcards || [];

  const hasEvents = bookmarkedEvents.length > 0;
  const hasPostcards = postcards.length > 0;

  return (
    <main
      className='w-full min-h-screen bg-white flex flex-col items-center'
      role='main'
      aria-label='마이 페이지'
    >
      <div className='w-full flex flex-col items-center px-[2.3rem] pb-[2rem]'>
        {/* 프로필 */}
        <section
          aria-label='프로필 영역'
          className='w-full flex flex-col items-center mt-[2.4rem] gap-[1.0rem]'
        >
          <ProfilePhoto src={profile?.profileImageUrl} />
          <p className='text-title-md'>{profile?.name ?? '이름'}</p>
        </section>

        {/* 저장한 행사 */}
        <section aria-label='저장한 행사' className='w-full mt-[1.6rem]'>
          <p className='text-label-lg mb-[1rem] pl-[1rem]'>저장한 행사</p>
          {/* 비로그인 상태 */}
          {isLoggedIn === false && (
            <div className='max-h-[18rem] overflow-y-auto no-scrollbar space-y-[1rem]'>
              <EventCard
                eventId={99}
                name='행사 이름'
                address='우리집'
                description='행사 설명'
                variant='gray'
                size='large'
                imageSrc=''
              />
              <EventCard
                eventId={98}
                name='행사 이름'
                address='우리집'
                description='행사 설명'
                variant='gray'
                size='large'
                imageSrc=''
              />
            </div>
          )}

          {/* 로그인 + 저장한 행사 있음 */}
          {isLoggedIn && hasEvents && (
            <div className='max-h-[18rem] overflow-y-auto no-scrollbar space-y-[1rem]'>
              {bookmarkedEvents.map((event) => (
                <EventCard
                  key={event.eventId}
                  eventId={event.eventId}
                  name={event.title ?? event.eventName ?? ''}
                  address={event.address ?? ''}
                  description={event.body ?? ''}
                  variant='gray'
                  size='large'
                  imageSrc={event.imageUrl}
                  liked={true}
                  onClick={() => router.push(`/mypage/events/${event.eventId}`)}
                />
              ))}
            </div>
          )}

          {/* 로그인 + 저장한 행사 없음  */}
          {isLoggedIn && !hasEvents && (
            <div className='h-[17rem] flex items-center justify-center'>
              <p className='text-gray-400 text-label-md'>
                저장한 행사가 없습니다.
              </p>
            </div>
          )}
        </section>

        {/* 저장한 엽서 */}
        <section aria-label='저장한 엽서' className='w-full mt-[1.8rem]'>
          <p className='text-label-lg mb-[0.6rem] pl-[1rem]'>저장한 엽서</p>
          <PostcardContainer
            postcards={!isLoggedIn ? [] : hasPostcards ? postcards : []}
          />
        </section>

        {/* 로그아웃 */}
        <button
          type='button'
          onClick={openLogout}
          className='mt-[2.1rem] text-label-md text-gray-400 cursor-pointer underline underline-offset-[0.25rem]'
        >
          로그아웃
        </button>
      </div>
      <BottomNav />

      {showLogoutPopup && <LogoutConfirm onClose={closeLogout} />}
      {showLoginPopup && <LoginRequired onClose={closeLogin} />}
    </main>
  );
}
