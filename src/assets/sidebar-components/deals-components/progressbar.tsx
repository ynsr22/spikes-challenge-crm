import React from 'react';
import { ProgressBarProps } from '../../types';

export const ProgressBar: React.FC<ProgressBarProps> = React.memo(({ percentage, className = '' }) => (
    <div className={`w-full bg-[#D9D9D9] rounded-full h-1.5 ${className}`}>
      <div
        className="bg-black h-1.5 rounded-full"
        style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  ));
  
ProgressBar.displayName = 'ProgressBar';