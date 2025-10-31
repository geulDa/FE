'use client';

import { Tag } from '@/shared/components';
import { cn } from '@/shared/lib';

interface TagGroupProps {
  viewMode: 'list' | 'map';
  onToggleView: () => void;
}

export default function TagGroup({ viewMode, onToggleView }: TagGroupProps) {
  const tags = ['#데이트', '#당일치기', '#도보'];

  return (
    <div
      className={cn(
        'flex items-center justify-between w-full gap-[0.4rem] flex-wrap'
      )}
    >
      <div className="flex gap-[1.4rem]">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} variant="hash" />
        ))}
      </div>

      <Tag
        label={viewMode === 'list' ? '지도로 보기' : '리스트로 보기'}
        icon={viewMode === 'list' ? 'MapPin_' : 'ListButton'}
        variant="toggle"
        onClick={onToggleView}
      />
    </div>
  );
}
