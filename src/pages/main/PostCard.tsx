import { Icon } from '@/shared/icons';
import { BottomNav, FlipCard, LocationCard } from '@/shared/components';
import { handleSave, handleShare } from '@/shared/utils/postcardActions';

const PostCard = () => {
  const label = '가톨릭대'; // 임시

  return (
    <div
      className='
        relative w-full h-[100vh] px-[2.4rem]
        bg-gradient-to-b from-pink-100 to-white
        flex flex-col justify-start items-center
        overflow-x-auto overflow-y-hidden mb-[7rem]
      '
    >
      <h1 className='text-headline-md-serif mt-[8rem] mb-[8rem] text-center'>
        {label}의 엽서 획득!
      </h1>

      <FlipCard
        frontSrc='/assets/card.png'
        backSrc='/assets/card2.png'
        width={354}
        height={220}
      />

      {/* 아이콘 버튼 (저장 / 공유) */}
      <div className='w-full flex justify-end mb-[7rem]'>
        <button
          className='flex items-center justify-center w-[4.8rem] h-[4.8rem]'
          onClick={handleSave}
        >
          <Icon name='Save' color='gray-400' size={28} />
        </button>
        <button
          className='flex items-center justify-center w-[4.8rem] h-[4.8rem]'
          onClick={handleShare}
        >
          <Icon name='Export' color='gray-400' size={28} />
        </button>
      </div>

      <LocationCard
        name={label}
        address='경기도 부천시 가톨릭대길 43'
        description='가톨릭대학교의 캠퍼스에서 얻을 수 있는 특별한 엽서입니다.'
        variant='gray'
        size='large'
      />

      <BottomNav />
    </div>
  );
};

export default PostCard;
