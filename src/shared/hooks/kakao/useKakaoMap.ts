'use client';
import { useEffect } from 'react';
import { loadKakaoSdk } from '@/shared/utils/loadKakaoSdk';

interface Location {
  name: string;
  lat: number;
  lng: number;
}

export function useKakaoMap(
  mapRef: React.RefObject<HTMLDivElement | null>,
  locations: Location[],
) {
  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.warn('Kakao Maps SDK not loaded yet');
        return;
      }

      window.kakao.maps.load(() => {
        const map = new window.kakao.maps.Map(mapRef.current!, {
          center: new window.kakao.maps.LatLng(37.498, 126.783),
          level: 5,
        });

        locations.forEach((p) => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(p.lat, p.lng),
            map,
          });

          const infoWindow = new window.kakao.maps.InfoWindow({
            content: `<div style="padding:5px 10px; font-size:12px;">${p.name}</div>`,
          });

          window.kakao.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(map, marker);
          });
        });
      });
    };

    loadKakaoSdk(initMap);
  }, [mapRef, locations]);
}
