import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CocovaLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = false,
  size = 'md',
}) => {
  const textColor =
    variant === 'light'
      ? 'text-white'
      : variant === 'gold'
      ? 'text-[#C5A059]'
      : 'text-[#1F1714]';

  const subColor =
    variant === 'light'
      ? 'text-[#E0D7CD]'
      : variant === 'gold'
      ? 'text-[#DFC088]'
      : 'text-[#6D5D55]';

  const leafFill =
    variant === 'light'
      ? '#DFC088'
      : variant === 'gold'
      ? '#C5A059'
      : '#A07842';

  const sizeStyles = {
    sm: { main: 'text-xl', leaf: 'w-4 h-4', sub: 'text-[9px] tracking-[0.25em]' },
    md: { main: 'text-2xl md:text-3xl', leaf: 'w-5 h-5', sub: 'text-[10px] tracking-[0.28em]' },
    lg: { main: 'text-3xl md:text-4xl', leaf: 'w-6 h-6', sub: 'text-xs tracking-[0.3em]' },
    xl: { main: 'text-4xl md:text-5xl', leaf: 'w-8 h-8', sub: 'text-sm tracking-[0.32em]' },
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className="relative inline-flex items-center">
        {/* Botanical Cacao Leaf Emblem nested gracefully */}
        <span
          className={`font-luxury font-bold tracking-tight leading-none ${sizeStyles[size].main} ${textColor}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          C
          <span className="relative inline-block">
            o
            <svg
              className={`absolute -top-3 -right-1 pointer-events-none ${sizeStyles[size].leaf}`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Detailed twin cocoa leaves with delicate veins */}
              <path
                d="M12 2C8 6 5 11 6 16C7.5 13 11 11.5 15 12C15.5 8 14 4 12 2Z"
                fill={leafFill}
                opacity="0.9"
              />
              <path
                d="M14 6C17 7 20 10 20 14C17.5 13 15 13.5 13 15C13.5 11 13 8 14 6Z"
                fill={leafFill}
                opacity="0.75"
              />
              <path
                d="M9 13C11 11 13 9 15 8"
                stroke="#FAF7F2"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
            </svg>
          </span>
          cova
        </span>
      </div>

      {showSubtitle && (
        <span
          className={`font-sans font-medium uppercase mt-1 ${sizeStyles[size].sub} ${subColor}`}
        >
          Chocolate
        </span>
      )}
    </div>
  );
};
