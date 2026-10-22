import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface WheelSelectorProps {
  options: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  disabled?: boolean;
}

export const WheelSelector: React.FC<WheelSelectorProps> = ({
  options,
  selectedIndex,
  onSelect,
  disabled = false,
}) => {
  const isDragging = useRef<boolean>(false);
  const startY = useRef<number>(0);

  const handlePrev = useCallback(() => {
    if (disabled || selectedIndex <= 0) return;
    onSelect(selectedIndex - 1);
  }, [disabled, selectedIndex, onSelect]);

  const handleNext = useCallback(() => {
    if (disabled || selectedIndex >= options.length - 1) return;
    onSelect(selectedIndex + 1);
  }, [disabled, selectedIndex, options.length, onSelect]);

  // Touch and mouse drag handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (disabled) return;
    isDragging.current = true;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    startY.current = clientY;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current || disabled) return;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const deltaY = clientY - startY.current;

    if (Math.abs(deltaY) > 30) {
      if (deltaY > 0 && selectedIndex > 0) {
        onSelect(selectedIndex - 1);
        startY.current = clientY;
      } else if (deltaY < 0 && selectedIndex < options.length - 1) {
        onSelect(selectedIndex + 1);
        startY.current = clientY;
      }
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Wheel scrolling (mouse wheel)
  const handleWheel = (e: React.WheelEvent) => {
    if (disabled) return;
    e.preventDefault();
    if (e.deltaY > 15 && selectedIndex < options.length - 1) {
      onSelect(selectedIndex + 1);
    } else if (e.deltaY < -15 && selectedIndex > 0) {
      onSelect(selectedIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.key === 'ArrowUp') {
        handlePrev();
      } else if (e.key === 'ArrowDown') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, disabled]);

  return (
    <div className="flex flex-col items-center justify-center select-none py-1 w-full">
      {/* Up button for quick tap navigation */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={disabled || selectedIndex === 0}
        aria-label="گزینه قبلی چرخ"
        className="w-10 h-8 flex items-center justify-center text-slate-400 hover:text-indigo-600 active:scale-95 disabled:opacity-20 disabled:pointer-events-none transition-all"
      >
        <ChevronUp className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Drum Picker Container inspired by Reference Screenshot 2 */}
      <div
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        role="listbox"
        aria-label="چرخ انتخاب گرامری"
        className="relative w-full max-w-[260px] h-[170px] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* Soft background highlight container pill (Screenshot 2 style) */}
        <div className="absolute top-1/2 inset-x-2 -translate-y-1/2 h-[48px] bg-indigo-50/90 rounded-2xl border border-indigo-200/80 shadow-inner pointer-events-none z-0" />

        {/* Options positioned with absolute precision relative to center */}
        <div className="relative w-full h-full flex items-center justify-center z-10 pointer-events-auto">
          {options.map((option, idx) => {
            const offset = idx - selectedIndex;
            if (Math.abs(offset) > 2) return null;

            const translateY = offset * 46;
            const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.84 : 0.7;
            const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.4 : 0.15;
            const textStyle =
              offset === 0
                ? 'font-black text-indigo-700 text-2xl'
                : 'font-semibold text-slate-500 text-base';

            return (
              <div
                key={`${option}-${idx}`}
                onClick={() => !disabled && onSelect(idx)}
                role="option"
                aria-selected={idx === selectedIndex}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  transition: 'transform 0.2s cubic-bezier(0.2, 0.9, 0.4, 1), opacity 0.2s ease',
                }}
                className={`absolute inset-x-0 h-[48px] flex items-center justify-center cursor-pointer select-none font-en ${textStyle}`}
              >
                <span>{option}</span>
              </div>
            );
          })}
        </div>

        {/* Gradient edge masks */}
        <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#F8F9FE] to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#F8F9FE] to-transparent pointer-events-none z-20" />
      </div>

      {/* Down button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={disabled || selectedIndex === options.length - 1}
        aria-label="گزینه بعدی چرخ"
        className="w-10 h-8 flex items-center justify-center text-slate-400 hover:text-indigo-600 active:scale-95 disabled:opacity-20 disabled:pointer-events-none transition-all"
      >
        <ChevronDown className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Indicator dots */}
      <div className="flex gap-1.5 mt-1">
        {options.map((_, i) => (
          <button
            key={i}
            onClick={() => !disabled && onSelect(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === selectedIndex
                ? 'bg-indigo-600 w-5'
                : 'bg-slate-300 hover:bg-slate-400 w-1.5'
            }`}
            aria-label={`رفتن به گزینه ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
