'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import {
  ControlBar,
  DatePicker,
  BottomNav,
  EventCard,
} from '@/shared/components';
import { eventData } from '@/shared/constants/events/eventsData';

export default function EventPage() {
  const router = useRouter();
  const [date, setDate] = useState<Date>();

  const selectedDate = date
    ? new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .split('T')[0]
    : undefined;

   const filteredEvents = eventData.filter((event) => {
    if (!selectedDate) return false;
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    const selected = new Date(selectedDate);
    return selected >= start && selected <= end;
  });

  const handleCardClick = (id: number) => {
    router.push(`/events/${id}`);
  };

  return (
    <div
      className={cn(
        'px-[2.4rem] bg-white flex flex-col gap-[1rem] h-full pt-[1.3rem] overflow-hidden',
      )}
    >
      {/* 헤더 */}
      <ControlBar
        isLoggedIn={true}
        userName='홍길동'
        onLogin={() => {}}
        className='fixed top-[1rem] left-0 right-0 z-50 px-[2rem]'
      />

      {/* 본문 콘텐츠 */}
      <main className='w-full pt-[6.3rem] flex flex-col items-center'>
        {/* 날짜 선택 */}
        <div className='w-full mt-[3.7rem] flex justify-start'>
          <DatePicker value={date} onChange={setDate} />
        </div>

        {/* 행사카드 & 빈화면 */}
        {filteredEvents.length > 0 ? (
          <section
            className={cn(
              'grid w-full mt-[1.4rem]',
              'grid-cols-2 gap-x-[1.4rem] gap-y-[1.4rem]',
            )}
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => handleCardClick(event.id)}
                className='cursor-pointer'
              >
                <EventCard
                  name={event.name}
                  address={event.address}
                  description={event.description}
                  variant='gray'
                  size='medium'
                  imageSrc={event.imageSrc ?? ''}
                />
              </div>
            ))}
          </section>
        ) : (
          <div className='flex flex-col items-center justify-center text-center mt-[15rem]'>
            <Icon name='Stamp' size={120} color='gray-200' />
            <h2 className='text-headline-lg-serif text-gray-700 mt-[5rem]'>
              Ooops!
            </h2>
            <p className='text-label-serif text-gray-500 mt-[2.4rem]'>
              선택하신 날은
              <br />
              행사가 없어요!
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
