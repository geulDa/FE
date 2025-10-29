import { Header } from '@/shared/components';
import AddressCopy from '@/shared/components/button/AddressCopy';
import LocationCard from '@/shared/components/container/LocationCard';
import { Icon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import { getLocation } from '@/shared/utils/handleGetLocation';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Board = () => {
  const router = useRouter();
  const { label } = router.query;
  const isStamp = true;

  return (
    <div className='relative w-full h-[100vh] overflow-auto px-[2.4rem]'>
      <Header
        title={label ? String(label) : '노드'}
        onClick={() => router.back()}
      />

      <main className='relative pt-[14.3rem] gap-[1.2rem] flex flex-col '>
        <section className='relative w-full'>
          <Image
            src='/assets/board.svg'
            alt='보드판'
            width={354}
            height={436}
            className={cn(
              'w-full h-auto object-cover block rounded-[1.6rem] transition-all duration-300',
              !isStamp && 'blur-xs brightness-90',
            )}
          />

          <button
            className={cn('absolute bottom-0 right-0', isStamp && 'p-[2.5rem]')}
            onClick={() =>
              getLocation(
                (pos) => console.log('📍 현재 위치:', pos.coords),
                (err) => console.error('⚠️ 위치 에러:', err.message),
                //TODO : 리워드 페이지로 이동 , 위치 에러일경우 모달창
              )
            }
          >
            <Icon
              name={isStamp ? 'Stamp' : 'PressStamp'}
              color={isStamp ? 'pink-400' : 'gray-50'}
              size={isStamp ? 100 : 160}
            />
          </button>
        </section>

        <LocationCard
          name={label ? String(label) : '노드'}
          address='주소'
          description='장소에 대한 설명'
          variant='mint'
          size='large'
        />

        <AddressCopy
          variant='mint'
          value='인천광역시 계양구 오조산로 31길(복사되어야할 주소)'
        />
      </main>
    </div>
  );
};

export default Board;
