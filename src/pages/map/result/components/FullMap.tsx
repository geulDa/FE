'use client';

import { useRef } from 'react';
import { useKakaoMap } from '@/shared/hooks/kakao/useKakaoMap';
import { MAP_LOCATIONS } from '@/shared/constants/map/result/mapLocations';

export default function FullMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  useKakaoMap(mapRef, MAP_LOCATIONS);

  return (
    <div
      ref={mapRef}
      role="region"
      aria-label="카카오 지도 전체 보기"
      className="w-full h-full bg-gray-200 overflow-hidden"
    />
  );
}
