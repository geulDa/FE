import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useKakaoMap } from '@/shared/hooks/kakao/useKakaoMap';
import { MAP_LOCATIONS } from '@/shared/constants/map/result/mapLocations';

export default function ResultMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useKakaoMap(mapRef, MAP_LOCATIONS);

  return (
    <section
      className="relative w-full h-[43.6rem] rounded-[2rem] overflow-hidden bg-gray-200"
      role="region"
      aria-labelledby="map-title"
    >
      <div
        ref={mapRef}
        role="application"
        className="w-full h-full"
      />

      <button
        onClick={() => router.push('/map/result/Map?from=map')}
        aria-label="전체화면 지도로 보기"
        className="absolute right-[1.2rem] bottom-[1.4rem] bg-pink-200 border border-pink-300 text-white text-title-sm px-[2.2rem] py-[1.2rem] rounded-[2rem]"
      >
        전체화면 보기
      </button>
    </section>
  );
}
