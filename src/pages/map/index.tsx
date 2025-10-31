import Image from 'next/image';
import { cn } from '@/shared/lib';
import { ControlBar } from '@/shared/components';
import { BottomNav } from '@/shared/components/tab/BottomNav';
import { purposes, stays, moves } from '@/shared/constants/course/courseOptions';
import { useCourseSelection } from '@/shared/hooks/useCourseSelection';
import CourseSelectSection from '@/pages/map/components/CourseSelectSection';
import CourseInputSection from '@/pages/map/components/CourseInputSection';
import { useRouter } from 'next/router';

export default function CourseSettingPage() {
  const router = useRouter();
  const { purpose, setPurpose, stay, setStay, move, setMove } =
    useCourseSelection();

  const canProceed = Boolean(purpose && stay && move);

  const handleNext = () => {
    if (canProceed) router.push('/map/result');
  };

  return (
    <div
      className={cn(
        'relative px-[2.4rem] bg-white flex flex-col h-full pt-[1.3rem] pb-[12rem]'
      )}
      role="form"
      aria-labelledby="course-setting-title"
      aria-describedby="course-setting-desc"
    >
      <ControlBar
        isLoggedIn={false}
        onLogin={() => {}}
        userName="글다"
        className="fixed top-[1rem] left-0 right-0 z-50 px-[2rem]"
      />

      <main
        className="w-full pt-[3.4rem] flex flex-col overflow-auto"
        aria-live="polite"
      >
        <section className="mb-[3.6rem] text-center">
          <h1 id="course-setting-title" className="sr-only">
            여행 코스 설정
          </h1>
          <Image
            src="/assets/bannerMap.svg"
            alt="여행 코스 추천 배너 이미지"
            width={354}
            height={79}
            className="w-full h-auto object-cover block"
          />
          <p id="course-setting-desc" className="sr-only">
            여행 목적, 체류 시간, 이동 방식을 선택하고, 원하는 장소를 입력할 수 있습니다.
          </p>
        </section>

        <div className="flex flex-col gap-[1.9rem] mb-[8rem]">
          <CourseSelectSection
            title="여행 목적을 선택해 주세요"
            options={purposes}
            selected={purpose}
            onSelect={setPurpose}
          />
          <CourseSelectSection
            title="체류 시간을 선택해 주세요"
            options={stays}
            selected={stay}
            onSelect={setStay}
          />
          <CourseSelectSection
            title="이동 방식을 선택해 주세요"
            options={moves}
            selected={move}
            onSelect={setMove}
          />
          <CourseInputSection onNext={handleNext} />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

