const Logo = ({ size = 80 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="logoGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="hsl(199, 89%, 48%)" />
          <stop offset="50%" stopColor="hsl(189, 94%, 43%)" />
          <stop offset="100%" stopColor="hsl(166, 76%, 46%)" />
        </linearGradient>
      </defs>

      {/* 12 Petals arranged in a circle */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const radius = 28;
        const x = 40 + radius * Math.cos(angle);
        const y = 40 + radius * Math.sin(angle);
        
        // Rotate each petal to point outward
        const rotation = (i * 30);

        return (
          <g key={`petal-${i}`}>
            {/* Petal shape - rounded rectangle */}
            <g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
              <rect
                x="-2.5"
                y="-7"
                width="5"
                height="9"
                rx="2.5"
                fill="url(#logoGradient)"
                opacity="0.9"
              />
            </g>
          </g>
        );
      })}

      {/* Inner ring - smaller petals */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const angle = (i * 30 + 15) * (Math.PI / 180);
        const radius = 16;
        const x = 40 + radius * Math.cos(angle);
        const y = 40 + radius * Math.sin(angle);
        
        const rotation = (i * 30 + 15);

        return (
          <g key={`inner-petal-${i}`}>
            <g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
              <rect
                x="-1.5"
                y="-5"
                width="3"
                height="7"
                rx="1.5"
                fill="url(#logoGradient)"
                opacity="0.6"
              />
            </g>
          </g>
        );
      })}

      {/* Center circle */}
      <circle
        cx="40"
        cy="40"
        r="5"
        fill="url(#logoGradient)"
      />
    </svg>
  );
};

export default Logo;