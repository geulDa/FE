'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib';

interface DateTagProps extends VariantProps<typeof dateTagStyle> {
  startDate: string;
  endDate: string;
  className?: string;
}

const dateTagStyle = cva(
  `
  inline-flex justify-center items-center whitespace-nowrap
  w-full h-[4.5rem]
  px-[1.3rem] py-[1.2rem]
  rounded-[2rem]
  border border-pink-100
  bg-pink-50
  text-pink-300 text-label-lg
  `,
);

export default function DateTag({
  startDate,
  endDate,
  className,
}: DateTagProps) {
const formatDate = (date: string) => date.replace(/-/g, '.');
  return (
    <div className={cn(dateTagStyle(), className)}>
       {formatDate(startDate)} ~ {formatDate(endDate)}
    </div>
  );
}
