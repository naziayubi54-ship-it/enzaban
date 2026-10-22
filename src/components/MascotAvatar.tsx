import React from 'react';

interface MascotAvatarProps {
  type?: 'bear' | 'frog' | 'fire' | 'trophy';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MascotAvatar: React.FC<MascotAvatarProps> = ({
  type = 'bear',
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  if (type === 'frog') {
    return (
      <div className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}>
        {/* Cute Frog Mascot with Leaf (like Screenshot 1) */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Leaf umbrella */}
          <path
            d="M 50 15 C 30 10 20 30 45 42 C 60 48 80 30 50 15 Z"
            fill="#4ADE80"
            stroke="#16A34A"
            strokeWidth="2"
          />
          <path d="M 45 42 Q 48 55 52 65" stroke="#15803D" strokeWidth="2.5" fill="none" />
          {/* Frog Head */}
          <circle cx="50" cy="65" r="26" fill="#86EFAC" stroke="#22C55E" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="40" cy="50" r="10" fill="#86EFAC" stroke="#22C55E" strokeWidth="2" />
          <circle cx="60" cy="50" r="10" fill="#86EFAC" stroke="#22C55E" strokeWidth="2" />
          <circle cx="40" cy="50" r="5" fill="#1E293B" />
          <circle cx="60" cy="50" r="5" fill="#1E293B" />
          <circle cx="38" cy="48" r="2" fill="#FFFFFF" />
          <circle cx="58" cy="48" r="2" fill="#FFFFFF" />
          {/* Cheeks */}
          <circle cx="36" cy="68" r="4.5" fill="#F87171" opacity="0.6" />
          <circle cx="64" cy="68" r="4.5" fill="#F87171" opacity="0.6" />
          {/* Smile */}
          <path d="M 44 71 Q 50 77 56 71" stroke="#15803D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (type === 'fire') {
    return (
      <div className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}>
        {/* Fire streak mascot */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <path
            d="M 50 10 C 65 30 85 45 80 70 C 75 90 25 90 20 70 C 15 45 45 35 50 10 Z"
            fill="url(#fireGradient)"
          />
          <path
            d="M 50 35 C 60 50 70 60 65 78 C 60 90 40 90 35 78 C 30 65 48 50 50 35 Z"
            fill="#FEF08A"
          />
          <defs>
            <linearGradient id="fireGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="50%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Default Cute Bear Mascot (Lukman Bear from Screenshot 1)
  return (
    <div className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Ears */}
        <circle cx="28" cy="28" r="14" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />
        <circle cx="28" cy="28" r="8" fill="#FED7AA" />
        <circle cx="72" cy="28" r="14" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />
        <circle cx="72" cy="28" r="8" fill="#FED7AA" />
        {/* Head */}
        <circle cx="50" cy="54" r="34" fill="#FB923C" stroke="#EA580C" strokeWidth="2.5" />
        {/* Muzzle */}
        <ellipse cx="50" cy="62" rx="18" ry="14" fill="#FED7AA" />
        {/* Nose */}
        <ellipse cx="50" cy="56" rx="5" ry="3.5" fill="#431407" />
        {/* Mouth */}
        <path d="M 50 59 L 50 64" stroke="#431407" strokeWidth="2" strokeLinecap="round" />
        <path d="M 44 64 Q 50 69 56 64" stroke="#431407" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="38" cy="46" r="4.5" fill="#431407" />
        <circle cx="62" cy="46" r="4.5" fill="#431407" />
        <circle cx="36.5" cy="44.5" r="1.5" fill="#FFFFFF" />
        <circle cx="60.5" cy="44.5" r="1.5" fill="#FFFFFF" />
        {/* Rosy Cheeks */}
        <circle cx="28" cy="58" r="5" fill="#F43F5E" opacity="0.3" />
        <circle cx="72" cy="58" r="5" fill="#F43F5E" opacity="0.3" />
      </svg>
    </div>
  );
};
