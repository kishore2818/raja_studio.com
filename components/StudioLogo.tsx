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
  variant = 'gold',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-20 h-20', text: 'text-3xl', sub: 'text-sm' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Mark */}
      <div className={`relative ${sizeClasses.icon} flex items-center justify-center shrink-0`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 rounded-full bg-studio-gold/20 blur-md pointer-events-none" />

        {!imgError ? (
          /* Attempt to load custom image file if placed in public/logo.png or public/logo.svg */
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/logo.png"
            alt="Raja Digital Studio Logo"
            className="w-full h-full object-contain relative z-10"
            onError={() => setImgError(true)}
          />
        ) : null}

        {/* Fallback & Sovereign Vector Crown + Aperture Emblem */}
        {imgError && (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]"
            >
              {/* Outer Golden Ring */}
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="url(#goldGradient)"
                strokeWidth="2.5"
                strokeDasharray="4 2"
                className="opacity-80"
              />
              <circle
                cx="50"
                cy="50"
                r="41"
                stroke="url(#goldGradient)"
                strokeWidth="1.5"
                className="opacity-60"
              />

              {/* Royal Crown top motif */}
              <path
                d="M32 30L38 40L50 24L62 40L68 30L65 44H35L32 30Z"
                fill="url(#goldGradient)"
              />
              <circle cx="32" cy="28" r="2.5" fill="#FFF" />
              <circle cx="50" cy="22" r="3" fill="#FFF" />
              <circle cx="68" cy="28" r="2.5" fill="#FFF" />

              {/* Central Stylized Camera Aperture & Monogram R */}
              <circle
                cx="50"
                cy="62"
                r="22"
                stroke="url(#goldGradient)"
                strokeWidth="2"
                fill="#0E0E12"
              />
              {/* Aperture Blades */}
              <path
                d="M50 42L57 56H43L50 42Z"
                fill="url(#goldGradient)"
                opacity="0.3"
              />
              <path
                d="M42 54L55 58L45 68L42 54Z"
                fill="url(#goldGradient)"
                opacity="0.3"
              />

              {/* Bold Letter R */}
              <text
                x="50"
                y="70"
                textAnchor="middle"
                fontSize="24"
                fontWeight="800"
                fontFamily="Georgia, serif"
                fill="url(#goldGradient)"
              >
                R
              </text>

              {/* Defs for rich gold gradient */}
              <defs>
                <linearGradient
                  id="goldGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFF2B2" />
                  <stop offset="35%" stopColor="#E5C04B" />
                  <stop offset="70%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#9A7B1C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>

      {/* Wordmark & Brand Identity */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-bold tracking-wider uppercase ${sizeClasses.text} bg-gradient-to-r from-white via-studio-gold-light to-studio-gold bg-clip-text text-transparent`}
            >
              RAJA
            </span>
            <span className={`font-sans font-light tracking-widest text-white/90 ${sizeClasses.text}`}>
              DIGITAL
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="h-[1px] w-3 bg-studio-gold/60" />
            <span
              className={`font-mono tracking-[0.25em] uppercase text-studio-gold ${sizeClasses.sub} font-medium`}
            >
              STUDIO • SRIVAIKUNTAM
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
