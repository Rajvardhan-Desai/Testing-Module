import * as React from 'react';
import { QuestionProps } from '@/utils/types';

export const QuestionCard: React.FC<QuestionProps> = ({
  questionNumber,
  description,
  isSelected,
  onClick,
  onDelete
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center bg-white rounded-3xl border border-solid shadow-lg 
        ${isSelected ? 'border-emerald-400 bg-emerald-50' : 'border-zinc-400'} 
        cursor-pointer transition-all duration-200 hover:border-emerald-300 p-4`}
    >
      {/* Question number badge */}
      <div className="px-2.5 py-1 text-white bg-emerald-300 rounded-lg shadow">
        {questionNumber}
      </div>

      {/* Question description */}
      <div className="flex-1 ml-4 text-black">
        {description}
      </div>

      {/* Delete icon (shown only if onDelete is provided) */}
      {onDelete && (
        <button
          className="text-red-400 hover:text-red-600 transition-colors"
          onClick={(e) => {
            e.stopPropagation(); // prevent card's onClick from firing
            onDelete();
          }}
          aria-label="Delete question"
        >
          {/* SVG Icon */}
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106 106"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0,106) scale(0.1,-0.1)"
              fill="#ff967b"
              stroke="none"
            >
              <path d="M455 1050 c-109 -17 -238 -83 -306 -156 -168 -181 -189 -459 -52
                -660 49 -71 80 -100 154 -147 176 -111 403 -107 575 10 71 49 100 80 147 154
                111 176 107 403 -10 575 -49 71 -80 100 -154 147 -101 64 -243 95 -354 77z
                m247 -69 c119 -46 223 -148 275 -272 25 -57 27 -76 27 -179 0 -96 -4 -125 -23
                -172 -48 -123 -159 -233 -280 -279 -70 -26 -197 -35 -273 -20 -263 55 -431
                332 -363 596 42 161 174 294 336 340 77 21 226 14 301 -14z" />
              <path d="M272 784 c-50 -53 -57 -38 73 -166 l90 -89 -102 -101 c-57 -55 -103
                -103 -103 -106 0 -3 21 -25 46 -49 53 -51 38 -58 165 72 l89 90 104 -104 104
                -103 47 46 c55 54 61 38 -70 167 l-90 89 104 104 103 104 -46 47 c-54 55 -38
                61 -168 -70 l-89 -90 -101 103 c-55 56 -104 102 -107 102 -3 0 -25 -21 -49
                -46z" />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};
