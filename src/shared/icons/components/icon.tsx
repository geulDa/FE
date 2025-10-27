import clsx from 'clsx';
import type { IconName } from '../iconNames';

type IconRotate = 90 | 180 | 270;
type IconColor =
  | 'mint-50'
  | 'mint-100'
  | 'mint-200'
  | 'mint-300'
  | 'mint-400'
  | 'mint-500'
  | 'mint-600'
  | 'mint-700'
  | 'mint-800'
  | 'mint-900'
  | 'pink-50'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'blue-400'
  | 'red-300'
  | 'red-400'
  | 'background'
  | 'foreground';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: IconColor;
  fillColor?: IconColor;
  className?: string;
  rotate?: IconRotate;
  hasRotateAnimation?: boolean;
  ariaHidden?: boolean;
}

export const Icon = ({
  name,
  size,
  width,
  height,
  color,
  fillColor,
  className,
  rotate,
  hasRotateAnimation = false,
  ariaHidden = true,
  style,
  ...rest
}: IconProps) => {
  const w = width ?? size ?? 20;
  const h = height ?? size ?? 20;

  const rotateClass =
    rotate === 90
      ? 'rotate-90'
      : rotate === 180
      ? 'rotate-180'
      : rotate === 270
      ? 'rotate-[270deg]'
      : '';

  const combined = clsx(
    'inline-block',
    'transform',
    rotateClass,
    hasRotateAnimation && 'transition-transform duration-200',
    className,
  );

  const iconStyle = {
    ...style,
    ...(color && { color: `var(--color-${color})` }),
    ...(fillColor &&
      ({ '--fill-color': `var(--color-${fillColor})` } as React.CSSProperties)),
  };
  return (
    <svg
      fill={fillColor ? 'var(--fill-color)' : 'none'}
      stroke={color ? 'currentColor' : 'none'}
      width={typeof w === 'number' ? `${w}px` : w}
      height={typeof h === 'number' ? `${h}px` : h}
      viewBox="0 0 24 24"
      className={combined}
      style={iconStyle}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};
