import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textColorClass?: string;
  iconSizeClass?: string;
}

export default function Logo({
  className = '',
  showText = false,
  textColorClass = 'text-slate-900',
  iconSizeClass = 'w-10 h-10'
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon part - representing the Ets Kofroid circular Logo */}
      <div className={`relative shrink-0 select-none ${iconSizeClass}`}>
        <svg 
          viewBox="0 0 500 500" 
          className="w-full h-full"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background thin red-orange orbital circle */}
          <circle 
            cx="250" 
            cy="245" 
            r="205" 
            stroke="#EA580C" 
            strokeWidth="3" 
            strokeDasharray="360 120"
            className="origin-center"
            transform="rotate(-40 250 245)"
          />

          {/* Solid Core Cyan Circle */}
          <circle 
            cx="250" 
            cy="245" 
            r="175" 
            fill="#009BB4" 
          />

          {/* Ice blue decorative snowflakes in the outer region (top right of circle) */}
          {/* Snowflake 1 (top-right, medium size) */}
          <g transform="translate(370, 75) scale(0.35)">
            <SnowflakePattern stroke="#06A0B5" strokeWidth="8" />
          </g>
          {/* Snowflake 2 (middle-right, small size) */}
          <g transform="translate(450, 160) scale(0.25)">
            <SnowflakePattern stroke="#A5F3FC" strokeWidth="8" />
          </g>
          {/* Snowflake 3 (bottom-right, small-medium) */}
          <g transform="translate(435, 290) scale(0.32)">
            <SnowflakePattern stroke="#A5F3FC" strokeWidth="8" />
          </g>

          {/* Inner small floating snowflakes for realism matching the image */}
          <g transform="translate(160, 240) scale(0.18)">
            <SnowflakePattern stroke="#A5F3FC" strokeWidth="12" />
          </g>
          <g transform="translate(220, 340) scale(0.18)">
            <SnowflakePattern stroke="#A5F3FC" strokeWidth="12" />
          </g>

          {/* Central Main Snowflake - White, high detail */}
          <g transform="translate(250, 245) scale(1)">
            <SnowflakePattern stroke="#FFFFFF" strokeWidth="9" />
          </g>

          {/* Red-Orange Triangle Arrows along Orbit Line */}
          {/* 1. Top-left Triangle Group (around 135 degrees) */}
          <g transform="translate(250, 245) rotate(135)">
            {/* Outermost outline triangle */}
            <path 
              d="M -205 -25 L -235 0 L -205 25" 
              stroke="#EA580C" 
              strokeWidth="3" 
              fill="none" 
              strokeLinejoin="round"
            />
            {/* Middle outline triangle */}
            <path 
              d="M -192 -20 L -218 0 L -192 20" 
              stroke="#EA580C" 
              strokeWidth="2.5" 
              fill="none" 
              strokeLinejoin="round"
            />
            {/* Innermost solid triangle */}
            <path 
              d="M -175 -15 L -195 0 L -175 15 Z" 
              fill="#EA580C" 
            />
          </g>

          {/* 2. Bottom-right Triangle Group (around -45 degrees) */}
          <g transform="translate(250, 245) rotate(-45)">
            {/* Outermost outline triangle */}
            <path 
              d="M -205 -25 L -235 0 L -205 25" 
              stroke="#EA580C" 
              strokeWidth="3" 
              fill="none" 
              strokeLinejoin="round"
            />
            {/* Middle outline triangle */}
            <path 
              d="M -192 -20 L -218 0 L -192 20" 
              stroke="#EA580C" 
              strokeWidth="2.5" 
              fill="none" 
              strokeLinejoin="round"
            />
            {/* Innermost solid triangle */}
            <path 
              d="M -175 -15 L -195 0 L -175 15 Z" 
              fill="#EA580C" 
            />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-extrabold tracking-wide text-md md:text-lg leading-none ${textColorClass}`}>
            Ets KOFROID
          </span>
          <span className="text-[9px] tracking-widest uppercase text-blue-650 font-black block mt-1">
            Excellence Technique
          </span>
        </div>
      )}
    </div>
  );
}

// Reusable detailed snowflake drawing helper
interface SnowflakePatternProps {
  stroke: string;
  strokeWidth: string;
}

function SnowflakePattern({ stroke, strokeWidth }: SnowflakePatternProps) {
  const iRay = Number(strokeWidth);
  return (
    <g>
      {/* 6 rays of snowflake rotated by 60 degrees each */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <g key={angle} transform={`rotate(${angle})`}>
          {/* Main vertical line of Ray */}
          <line 
            x1="0" 
            y1="0" 
            x2="0" 
            y2="-130" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
          />
          {/* Outer branch (V-shape) */}
          <path 
            d="M 0 -95 L -35 -120 M 0 -95 L 35 -120" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
          />
          {/* Inner branch (V-shape) */}
          <path 
            d="M 0 -55 L -45 -85 M 0 -55 L 45 -85" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
          />
          {/* Smaller accents or circles */}
          <circle cx="0" cy="-140" r={iRay * 0.75} fill={stroke} />
        </g>
      ))}
      {/* Center circle of Snowflake */}
      <circle cx="0" cy="0" r="16" fill="none" stroke={stroke} strokeWidth={strokeWidth} />
    </g>
  );
}
