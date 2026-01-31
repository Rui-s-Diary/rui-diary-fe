'use client';

export function LoginIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <svg
        viewBox="0 0 600 700"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative circles */}
        <circle cx="80" cy="120" r="90" fill="#DC2626" opacity="0.7" />
        <circle cx="400" cy="150" r="60" fill="url(#grad1)" opacity="0.8" />
        <circle cx="150" cy="550" r="80" fill="#FB923C" opacity="0.6" />
        <circle cx="500" cy="600" r="70" fill="#EC4899" opacity="0.5" />

        {/* Background circle */}
        <circle cx="300" cy="280" r="200" fill="#FED7AA" opacity="0.3" />

        {/* Phone frame */}
        <g>
          {/* Phone shadow */}
          <ellipse cx="300" cy="420" rx="110" ry="30" fill="#000" opacity="0.1" />

          {/* Phone body */}
          <rect
            x="200"
            y="150"
            width="200"
            height="340"
            rx="20"
            fill="#1F2937"
            stroke="#111827"
            strokeWidth="2"
          />

          {/* Phone screen */}
          <rect
            x="210"
            y="165"
            width="180"
            height="310"
            rx="15"
            fill="#F3F4F6"
          />

          {/* Notch */}
          <rect
            x="270"
            y="165"
            width="60"
            height="22"
            rx="8"
            fill="#1F2937"
          />
        </g>

        {/* Girl illustration inside phone */}
        <g clipPath="url(#phoneClip)">
          {/* Head */}
          <circle cx="300" cy="240" r="35" fill="#E8B4B8" />

          {/* Hair */}
          <path
            d="M 265 240 Q 265 200 300 195 Q 335 200 335 240"
            fill="#5B3A4E"
          />

          {/* Eyes */}
          <circle cx="290" cy="235" r="4" fill="#1F2937" />
          <circle cx="310" cy="235" r="4" fill="#1F2937" />

          {/* Smile */}
          <path
            d="M 290 245 Q 300 252 310 245"
            stroke="#1F2937"
            strokeWidth="2"
            fill="none"
          />

          {/* Body/Shirt */}
          <rect x="265" y="275" width="70" height="60" rx="5" fill="#3F1F47" />

          {/* Hands */}
          <circle cx="240" cy="295" r="12" fill="#E8B4B8" />
          <circle cx="360" cy="295" r="12" fill="#E8B4B8" />

          {/* Keyboard area */}
          <rect x="270" y="310" width="60" height="35" rx="3" fill="#9CA3AF" />
          <line x1="275" y1="320" x2="325" y2="320" stroke="#6B7280" strokeWidth="1" />
          <line x1="275" y1="328" x2="325" y2="328" stroke="#6B7280" strokeWidth="1" />
        </g>

        {/* Chat bubbles */}
        <g>
          {/* Bubble 1 - Hi, darling! */}
          <g>
            <rect
              x="130"
              y="300"
              width="120"
              height="50"
              rx="12"
              fill="#FEE2E2"
              stroke="#FCA5A5"
              strokeWidth="2"
            />
            <text
              x="145"
              y="320"
              fontSize="14"
              fill="#1F2937"
              fontWeight="500"
            >
              {'❤️ Hi, darling!'}
            </text>
            <polygon points="130,330 120,350 130,345" fill="#FEE2E2" />
          </g>

          {/* Bubble 2 - So happy to see you! */}
          <g>
            <rect
              x="80"
              y="360"
              width="130"
              height="50"
              rx="12"
              fill="#6B21A8"
              strokeWidth="0"
            />
            <text x="95" y="380" fontSize="12" fill="#FFF" fontWeight="500">
              {'So happy to see'}
            </text>
            <text x="95" y="395" fontSize="12" fill="#FFF" fontWeight="500">
              {'you!'}
            </text>
            <polygon
              points="80,375 60,385 75,375"
              fill="#6B21A8"
            />
          </g>

          {/* Bubble 3 - How are you today? */}
          <g>
            <rect
              x="350"
              y="220"
              width="140"
              height="50"
              rx="12"
              fill="#6B21A8"
              strokeWidth="0"
            />
            <text x="365" y="240" fontSize="12" fill="#FFF" fontWeight="500">
              {'How are you'}
            </text>
            <text x="365" y="255" fontSize="12" fill="#FFF" fontWeight="500">
              {'today?'}
            </text>
            <polygon
              points="490,235 510,225 495,240"
              fill="#6B21A8"
            />
          </g>

          {/* Bubble 4 - I miss you so much! */}
          <g>
            <rect
              x="380"
              y="280"
              width="130"
              height="50"
              rx="12"
              fill="#FEF3C7"
              stroke="#FCD34D"
              strokeWidth="2"
            />
            <text x="395" y="300" fontSize="12" fill="#1F2937" fontWeight="500">
              {'I miss you so'}
            </text>
            <text x="395" y="315" fontSize="12" fill="#1F2937" fontWeight="500">
              {'much! ❤️'}
            </text>
            <polygon
              points="510,295 530,285 515,305"
              fill="#FEF3C7"
            />
          </g>
        </g>

        {/* Heart icon near chat */}
        <g>
          <circle cx="260" cy="280" r="20" fill="#FFF" stroke="#E5E7EB" strokeWidth="2" />
          <path
            d="M 260 273 Q 255 268 250 268 Q 245 268 245 273 Q 245 278 260 285 Q 275 278 275 273 Q 275 268 270 268 Q 265 268 260 273"
            fill="#DC2626"
          />
        </g>

        {/* Decorative leaf shapes */}
        <g opacity="0.6">
          <path
            d="M 100 500 Q 90 510 100 520"
            stroke="#DC2626"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M 130 520 Q 120 530 130 540"
            stroke="#F59E0B"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M 450 480 Q 440 490 450 500"
            stroke="#DC2626"
            strokeWidth="8"
            fill="none"
          />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <clipPath id="phoneClip">
            <rect x="210" y="165" width="180" height="310" rx="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
