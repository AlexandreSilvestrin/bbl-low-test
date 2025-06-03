import React from 'react';
import { QuizData } from '@/pages/quiz';
import { useEffect, useState } from "react";

interface WeightProjectionProps {
  onNext: () => void;
  onPrevious: () => void;
  data: Partial<QuizData>;
}

export default function WeightProjection({ onNext, data }: WeightProjectionProps) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Get user's name for personalization
  const userName = data.name || "User";
  
  // Get goal from user's responses
  const getGoalText = () => {
    if (data.mainGoals?.includes("Grow my glutes") || data.mainGoals?.includes("Crescer o bumbum")) return "grow your glutes";
    if (data.mainGoals?.includes("Lift my glutes") || data.mainGoals?.includes("Levantar o bumbum")) return "lift your glutes";
    if (data.mainGoals?.includes("Tone my glutes") || data.mainGoals?.includes("Tonificar o bumbum")) return "tone your glutes";
    return "shape your body";
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-[#ea749b]">{userName},</span> here's the plan you'll<br/>
            need to get in shape
          </h1>
          <p className="text-gray-600 mb-2">We predict you'll achieve</p>
          <p className="text-3xl font-bold text-[#ea749b] mb-1">
            85% improvement
          </p>
          <p className="text-lg text-gray-600">
            in your booty within 3 weeks.
          </p>
        </div>

        {/* Animated Chart */}
        <div className="bg-gray-50 rounded-3xl p-6 mb-8 relative overflow-hidden">
          <div className="relative h-64">
            {/* Chart SVG */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 320 200"
              className="absolute inset-0"
            >
              <defs>
                <linearGradient id="weightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFA500" />
                  <stop offset="30%" stopColor="#FFD700" />
                  <stop offset="70%" stopColor="#ea749b" />
                  <stop offset="100%" stopColor="#32CD32" />
                </linearGradient>
                
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(234, 116, 155, 0.3)" />
                  <stop offset="100%" stopColor="rgba(234, 116, 155, 0.0)" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              <g stroke="#E5E7EB" strokeWidth="1" opacity="0.5">
                <line x1="0" y1="50" x2="320" y2="50" />
                <line x1="0" y1="100" x2="320" y2="100" />
                <line x1="0" y1="150" x2="320" y2="150" />
              </g>
              
              {/* Week markers (adjusted for 3 weeks) */}
              <g stroke="#D1D5DB" strokeWidth="1" opacity="0.3">
                <line x1="80" y1="0" x2="80" y2="200" /> {/* End of Week 1 */}
                <line x1="160" y1="0" x2="160" y2="200" /> {/* End of Week 2 */}
                <line x1="240" y1="0" x2="240" y2="200" /> {/* End of Week 3 */}
              </g>
              
              {/* Weight curve path (adjusted to fill width) */}
              <path
                d="M 20 150 Q 100 120 180 80 Q 240 50 300 25"
                fill="none"
                stroke="url(#weightGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                className={`transition-all duration-[5000ms] ease-out`}
                style={{
                  strokeDasharray: animationComplete ? 'none' : '1000',
                  strokeDashoffset: animationComplete ? '0' : '1000',
                  transition: 'stroke-dashoffset 5s ease-out'
                }}
              />
              
              {/* Area under curve (adjusted to fill width) */}
              <path
                d="M 20 150 Q 100 120 180 80 Q 240 50 300 25 L 300 200 L 20 200 Z"
                fill="url(#areaGradient)"
                className={`transition-opacity duration-1500 delay-2000 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}
              />
              
              {/* Week progression points (adjusted for 3 weeks and full width) */}
              <circle
                cx="20"
                cy="150"
                r="6"
                fill="#FFA500"
                className={`transition-all duration-300 delay-500 ${animationComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              <circle
                cx="100"
                cy="120"
                r="4"
                fill="#ea749b"
                className={`transition-all duration-300 delay-2500 ${animationComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              <circle
                cx="180"
                cy="80"
                r="4"
                fill="#ea749b"
                className={`transition-all duration-300 delay-3800 ${animationComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
              <circle
                cx="300"
                cy="25"
                r="8"
                fill="#32CD32"
                className={`transition-all duration-500 delay-[4800ms] ${animationComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              />
            </svg>
            
            {/* Goal badge */}
            <div
              className={`absolute bg-[#ea749b] text-white px-3 py-2 rounded-lg text-sm font-bold transition-all duration-500 delay-[5200ms] ${animationComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ top: '15px', left: '270px' }}
            >
              Goal<br />85%
            </div>
            
            {/* Week labels - Correctly spaced and aligned for 3 weeks */}
            <div className="absolute -bottom-6 w-full text-xs text-gray-500 flex justify-between px-2">
              <div className="text-center">Week 1</div>
              <div className="text-center">Week 2</div>
              <div className="text-center">Week 3</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mb-8">
          *Based on data from users who track their progress in the app. Consult your doctor first. The chart is a non-customized illustration and results may vary
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={onNext}
            className="w-full bg-[#ea749b] hover:bg-[#e85a8a] text-white font-bold py-4 px-8 rounded-3xl text-base transition-all duration-200"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}