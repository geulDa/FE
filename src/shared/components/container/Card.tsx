import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib';

const cardStyle = cva(
  'flex flex-shrink-0 rounded-[1.6rem] transition-all duration-200',
  {
    variants: {
      variant: {
        gray: 'border border-gray-300 bg-gray-50',
        mint: 'border border-mint-300 bg-mint-50',
      },
      size: {
        medium:
          'w-full h-[17rem] flex-col items-center justify-center p-[1.2rem]',
        large:
          'w-full h-[12rem] flex-row items-start justify-start px-[1.3rem] pt-[1.1rem] pb-[3.3rem]',
      },
    },
    defaultVariants: {
      variant: 'gray',
      size: 'medium',
    },
  },
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyle> {
  customHeight?: string;
}

export const Card = ({
  className,
  variant,
  size,
  customHeight,
  ...props
}: CardProps) => {
  const customPadding =
    customHeight && size === 'large' ? 'px-[1.5rem] py-[1.4rem]' : '';
  return (
    <div
      className={cn(cardStyle({ variant, size }), customPadding, className)}
      style={customHeight ? { height: customHeight } : undefined}
      {...props}
    />
  );
};
