'use client';
import { Icon } from '@/shared/icons';
import { cn } from '@/shared/lib';
import { cva, type VariantProps } from 'class-variance-authority';
import { useState } from 'react';
import { Copy } from '@/shared/utils/copy';

const addressCopyStyle = cva(
  'flex items-center justify-start flex-shrink-0 rounded-full transition-all duration-200 overflow-hidden',
  {
    variants: {
      variant: {
        gray: 'border border-gray-300 bg-gray-50 text-gray-400',
        mint: 'border border-mint-300 bg-mint-50 text-mint-500',
      },
    },
    defaultVariants: {
      variant: 'gray',
    },
  },
);

interface AddressCopyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof addressCopyStyle> {
  value: string;
  truncate?: boolean;
}

const AddressCopy = ({
  value,
  variant = 'gray',
  truncate = true,
  className,
  ...props
}: AddressCopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    Copy(
      value,
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      undefined,
    );
  };

  return (
    <div
      onClick={handleCopy}
      className={cn(
        addressCopyStyle({ variant }),
        'w-full h-[4rem] px-[1.3rem] py-[1rem] gap-[0.4rem]',
        'cursor-pointer select-none',
        className,
      )}
      {...props}
    >
      <div className='flex-shrink-0'>
        <Icon
          name={copied ? 'Check' : 'CopySimple'}
          size={18}
          color={variant === 'mint' ? 'mint-400' : 'gray-400'}
        />
      </div>
      <span
        className={cn(
          'text-label-lg flex-1 min-w-0',
          variant === 'mint' ? 'text-mint-400' : 'text-gray-400',
          truncate &&
            'truncate whitespace-nowrap overflow-hidden text-ellipsis',
        )}
        title={value}
      >
        {value}
      </span>
    </div>
  );
};

export default AddressCopy;
