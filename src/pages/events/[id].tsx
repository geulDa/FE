import { Header, EventCard } from '@/shared/components';
import DateTag from '@/pages/events/components/DateTag';
import { cn } from '@/shared/lib';
import { eventData } from '@/shared/constants/events/eventsData';
import Image from 'next/image';
import { useRouter } from 'next/router';

const EventDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const event = eventData.find((e) => e.id === Number(id));
  if (!event) return null;

  const { name, address, description, startDate, endDate, imageSrc } = event;

    return (
    <div
      className={cn(
        'relative w-full min-h-[100vh] overflow-auto',
      )}
    >
      <Header
        title='행사명'
        onClick={() => router.back()}
        className={cn('fixed top-0 left-0 right-0 z-50')}
      />

      <main
        className={cn(
          'flex flex-col items-center justify-start',
          'px-[2.4rem] pt-[calc(10rem+1.4rem)]'
        )}
      >
        {/* 행사 기간 */}
        <div className={cn('flex justify-center w-[18.4rem] mt-[1.3rem]')}>
          <DateTag startDate={startDate} endDate={endDate} />
        </div>

        {/* 대표 이미지 */}
        <section
          className={cn(
            'relative w-full flex justify-center max-w-[35.4rem]',
            'mt-[1rem]'
          )}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${name} 이미지`}
              width={354}
              height={430}
              className={cn('w-full h-auto object-cover rounded-[2rem]')}
            />
          ) : (
            <div
              className={cn('w-full h-[43.6rem] bg-gray-200 rounded-[2rem]')}
            />
          )}
        </section>

        {/* 행사 카드 */}
        <div
          className={cn(
            'flex flex-col items-center w-full gap-[0.8rem]',
            'mt-[0.8rem]'
          )}
        >
          <EventCard
            name={name}
            address={address}
            description={description}
            variant='gray'
            size='large'
          />

          {/* 관련 행사 */}
          <div
            className={cn(
              'grid grid-cols-2 gap-[1.2rem] justify-items-center w-full max-w-[35.4rem]'
            )}
          >
            <div className={cn('w-[17rem]')}>
              <EventCard
                name='관련 행사'
                address=''
                description=''
                variant='gray'
                size='small'
              />
            </div>
            <div className={cn('w-[17rem]')}>
              <EventCard
                name='관련 행사'
                address=''
                description=''
                variant='gray'
                size='small'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetailPage;