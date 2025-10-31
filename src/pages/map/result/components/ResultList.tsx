'use client';

import { cn } from '@/shared/lib';
import { LocationCard } from '@/shared/components';
import { listData } from '@/shared/constants/map/result/listData';

export default function ResultList() {
  return (
    <div
      role="list"
      aria-label="검색 결과 리스트"
      className={cn(
        'grid grid-cols-2 gap-[1.2rem] w-full justify-items-center pb-[15rem]',
        'overflow-y-scroll no-scrollbar' 
      )}
    >
      {listData.map((place) => (
        <div role="listitem" key={place.id} className="w-full">
          <LocationCard
            name={place.name}
            address={place.address}
            description={place.description}
            variant="gray"
            size="medium"
            imageSrc={place.imageSrc}
          />
        </div>
      ))}
    </div>
  );
}
