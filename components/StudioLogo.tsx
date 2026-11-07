import React, { useState } from 'react';

interface StudioLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gold' | 'light' | 'monochrome';
}

export const StudioLogo: React.FC<StudioLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-sm sm:text-base', sub: 'text-[8px] sm:text-[9px]' },
    md: { icon: 'w-8 h-8 sm:w-10 sm:h-10', text: 'text-lg sm:text-xl', sub: 'text-[9px] sm:text-[10px]' },
    lg: { icon: 'w-12 h-12 sm:w-14 sm:h-14', text: 'text-xl sm:text-2xl', sub: 'text-[10px] sm:text-xs' },
    xl: { icon: 'w-16 h-16 sm:w-20 sm:h-20', text: 'text-2xl sm:text-3xl', sub: 'text-xs sm:text-sm' },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none max-w-full overflow-hidden ${className}`}>
      {/* Logo Mark */}
      <div className={`relative ${sizeClasses.icon} flex items-center justify-center shrink-0`}>
        <div className="absolute inset-0 rounded-full bg-studio-gold/20 blur-sm pointer-events-none" />

        {!imgError ? (
          /* High-res vector emblem matching Raja Digital Studio */
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/logo.svg"
            alt="Raja Digital Studio Logo"
            className="w-full h-full object-contain relative z-10"
            onError={() => setImgError(true)}
          />
        ) : null}

        {imgError && (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]"
            >
              <circle cx="50" cy="50" r="44" stroke="url(#goldGradFallback)" strokeWidth="2.5" strokeDasharray="4 2" />
              <path d="M32 30L38 40L50 24L62 40L68 30L65 44H35L32 30Z" fill="url(#goldGradFallback)" />
              <circle cx="50" cy="62" r="22" stroke="url(#goldGradFallback)" strokeWidth="2" fill="#0E0E12" />
              <text x="50" y="70" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="Georgia, serif" fill="url(#goldGradFallback)">R</text>
              <defs>
                <linearGradient id="goldGradFallback" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2B2" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9A7B1C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-tight min-w-0">
          <div className="flex items-center gap-1">
            <span
              className={`font-display font-bold tracking-wider uppercase ${sizeClasses.text} bg-gradient-to-r from-white via-studio-gold-light to-studio-gold bg-clip-text text-transparent truncate`}
            >
              RAJA
            </span>
            <span className={`font-sans font-light tracking-wider text-white/90 ${sizeClasses.text} truncate`}>
              DIGITAL
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5 overflow-hidden">
            <span className="h-[1px] w-2.5 bg-studio-gold/60 shrink-0" />
            <span
              className={`font-mono tracking-wider sm:tracking-[0.18em] uppercase text-studio-gold ${sizeClasses.sub} font-medium truncate`}
            >
              STUDIO • SRIVI
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
