import Lottie from 'lottie-react';
import loading_revised from '../../../public/lottie/loading_revised.json';

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-between h-[100vh] bg-white'>
      <div className='relative w-full h-[22vw] min-h-[14rem] max-h-[28rem]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 402 194'
          className='absolute inset-0 w-full h-full'
          preserveAspectRatio='none'
        >
          <path
            d='M402 180.922C257.925 56.9753 160.195 270.883 0 161.93V0H402V180.922Z'
            className='fill-mint-50'
          />
        </svg>
      </div>

      <div className='flex items-center justify-center'>
        <Lottie
          animationData={loading_revised}
          loop
          autoplay
          className='w-[18rem] h-[18rem]'
        />
      </div>

      <div className='mb-[10rem] text-center text-gray-500 text-label-md'>
        <p>만화 속 부천 여행</p>
        <p>8개 명소를 탐험하고 엽서를 모아보세요!</p>
      </div>
    </div>
  );
}
