import { Icon } from '@/shared/icons';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center  min-h-screen py-2 bg-gray-50'>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center'>
          <Icon
            name='CopySimple'
            size={24}
            color='mint-500'
            fillColor='mint-200'
          />
          <Icon
            name='HeartStraight'
            size={24}
            color='red-300'
            fillColor='red-400'
          />

          <Icon
            name='Stamp'
            size={24}
            color='pink-100'
          />
        </main>
      </div>
    </>
  );
}
