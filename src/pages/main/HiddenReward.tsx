import { useRouter } from 'next/router';

const HiddenReward = () => {
  const router = useRouter();

  return (
    <div
      className='
        relative w-full h-[100vh]
        bg-gradient-to-b  from-mint-500 to-white
        flex flex-col justify-center items-center text-center
        overflow-hidden
      '
      onClick={() =>
        router.push({
          pathname: '/main/PostCard',
        })
      }
    >
      <h1 className=' text-black mb-[4.5rem] text-headline-lg-serif '>
        Congrats!
      </h1>

      <p className='text-title-sm text-black mb-[6rem]'>
        축하합니다! <br />
        히든 리워드를 획득하셨습니다.
      </p>

      <div className='relative w-[16rem] h-[16rem] mb-[6rem] bg-amber-100 rounded-full'>
        로띠 예정
      </div>

      <p className='text-label-md text-black mb-[7rem]'>
        가톨릭대 전설의 포켓몬 <br />
        ‘나무를 수호하는 종철씨’를 <br />
        획득하셨습니다!
      </p>

      <p className='text-label-serif text-mint-500'>click!</p>
    </div>
  );
};

export default HiddenReward;
