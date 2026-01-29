// Custom SVG icons for Attack Flow stages
// Each icon is designed to match the cyber/hacker aesthetic

interface IconProps {
  className?: string;
  size?: number;
  infected?: boolean;
  glowColor?: string;
}

export function USBIcon({ className = "", size = 48, infected = false, glowColor = "#ff3366" }: IconProps) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none"
      style={{ filter: infected ? `drop-shadow(0 0 12px ${glowColor})` : 'none' }}
    >
      <defs>
        <linearGradient id="usbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={infected ? "#ff3366" : "#00f0ff"} />
          <stop offset="100%" stopColor={infected ? "#a855f7" : "#00a8ff"} />
        </linearGradient>
      </defs>
      {/* USB body */}
      <rect x="16" y="12" width="32" height="44" rx="4" fill="url(#usbGrad)" opacity="0.2" />
      <rect x="16" y="12" width="32" height="44" rx="4" stroke="url(#usbGrad)" strokeWidth="2" fill="none" />
      {/* USB connector prongs */}
      <rect x="22" y="2" width="6" height="14" rx="1" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.8" />
      <rect x="36" y="2" width="6" height="14" rx="1" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.8" />
      {/* Circuitry lines inside */}
      <path d="M24 28h16M24 36h12M28 36v8M36 28v12" stroke={infected ? "#ff3366" : "#00f0ff"} strokeWidth="1.5" opacity="0.6" />
      {/* Malware indicator when infected */}
      {infected && (
        <g>
          <circle cx="32" cy="44" r="6" fill="#ff3366" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <text x="32" y="48" textAnchor="middle" fontSize="10" fill="#ff3366">☠</text>
        </g>
      )}
    </svg>
  );
}

export function LaptopIcon({ className = "", size = 48, infected = false, glowColor = "#ff3366" }: IconProps) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none"
      style={{ filter: infected ? `drop-shadow(0 0 12px ${glowColor})` : 'none' }}
    >
      <defs>
        <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={infected ? "#ff3366" : "#00f0ff"} />
          <stop offset="100%" stopColor={infected ? "#a855f7" : "#00a8ff"} />
        </linearGradient>
      </defs>
      {/* Screen */}
      <rect x="8" y="8" width="48" height="32" rx="3" fill="url(#laptopGrad)" opacity="0.15" />
      <rect x="8" y="8" width="48" height="32" rx="3" stroke="url(#laptopGrad)" strokeWidth="2" fill="none" />
      {/* Screen content - terminal style */}
      <rect x="12" y="12" width="40" height="24" fill="#0a0a0f" />
      {infected ? (
        <g>
          <text x="16" y="24" fontSize="6" fill="#ff3366" fontFamily="monospace">INFECTED</text>
          <text x="16" y="32" fontSize="5" fill="#ff3366" fontFamily="monospace" opacity="0.7">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="0.5s" repeatCount="indefinite" />
            &gt; executing payload...
          </text>
        </g>
      ) : (
        <g>
          <text x="16" y="22" fontSize="5" fill="#00f0ff" fontFamily="monospace" opacity="0.5">&gt; _</text>
          <rect x="16" y="26" width="20" height="2" fill="#00f0ff" opacity="0.3" />
          <rect x="16" y="30" width="14" height="2" fill="#00f0ff" opacity="0.2" />
        </g>
      )}
      {/* Keyboard base */}
      <path d="M4 44h56l-4 12H8z" fill="url(#laptopGrad)" opacity="0.2" />
      <path d="M4 44h56l-4 12H8z" stroke="url(#laptopGrad)" strokeWidth="2" fill="none" />
      {/* Keyboard keys */}
      <g opacity="0.4">
        {[0, 1, 2, 3].map(i => (
          <rect key={i} x={14 + i * 10} y="48" width="6" height="3" rx="0.5" fill={infected ? "#ff3366" : "#00f0ff"} />
        ))}
      </g>
    </svg>
  );
}

export function NetworkIcon({ className = "", size = 48, infected = false, glowColor = "#ff3366" }: IconProps) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none"
      style={{ filter: infected ? `drop-shadow(0 0 12px ${glowColor})` : 'none' }}
    >
      <defs>
        <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={infected ? "#ff3366" : "#00f0ff"} />
          <stop offset="100%" stopColor={infected ? "#a855f7" : "#00a8ff"} />
        </linearGradient>
      </defs>
      {/* Central hub */}
      <circle cx="32" cy="32" r="10" fill="url(#netGrad)" opacity="0.2" />
      <circle cx="32" cy="32" r="10" stroke="url(#netGrad)" strokeWidth="2" fill="none" />
      {/* Connection nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 32 + Math.cos(rad) * 22;
        const y = 32 + Math.sin(rad) * 22;
        return (
          <g key={i}>
            <line x1="32" y1="32" x2={x} y2={y} stroke={infected ? "#ff3366" : "#00f0ff"} strokeWidth="1.5" opacity="0.5" strokeDasharray="3 2">
              {infected && (
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="0.5s" repeatCount="indefinite" />
              )}
            </line>
            <circle cx={x} cy={y} r="4" fill={infected ? "#ff3366" : "#00f0ff"} opacity={infected ? 0.8 : 0.5}>
              {infected && (
                <animate attributeName="opacity" values="0.5;1;0.5" dur={`${0.3 + i * 0.1}s`} repeatCount="indefinite" />
              )}
            </circle>
          </g>
        );
      })}
      {/* Center icon */}
      <text x="32" y="36" textAnchor="middle" fontSize="10" fill={infected ? "#ff3366" : "#00f0ff"}>
        {infected ? "⚡" : "◉"}
      </text>
    </svg>
  );
}

export function SCADAIcon({ className = "", size = 48, infected = false, glowColor = "#ff3366" }: IconProps) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none"
      style={{ filter: infected ? `drop-shadow(0 0 12px ${glowColor})` : 'none' }}
    >
      <defs>
        <linearGradient id="scadaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={infected ? "#ff3366" : "#00f0ff"} />
          <stop offset="100%" stopColor={infected ? "#a855f7" : "#00a8ff"} />
        </linearGradient>
      </defs>
      {/* Monitor frame */}
      <rect x="6" y="4" width="52" height="40" rx="3" fill="url(#scadaGrad)" opacity="0.15" />
      <rect x="6" y="4" width="52" height="40" rx="3" stroke="url(#scadaGrad)" strokeWidth="2" fill="none" />
      {/* Screen */}
      <rect x="10" y="8" width="44" height="32" fill="#0a0a0f" />
      {/* SCADA display elements */}
      {infected ? (
        <g>
          {/* Warning indicators */}
          <rect x="14" y="12" width="36" height="6" fill="#ff3366" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="0.4s" repeatCount="indefinite" />
          </rect>
          <text x="32" y="17" textAnchor="middle" fontSize="5" fill="#ff3366" fontFamily="monospace">⚠ SYSTEM COMPROMISED ⚠</text>
          {/* Fake normal readings */}
          <text x="14" y="26" fontSize="4" fill="#00ff00" fontFamily="monospace">TEMP: 145°C ✓</text>
          <text x="14" y="32" fontSize="4" fill="#00ff00" fontFamily="monospace">RPM: 1200 ✓</text>
          <text x="14" y="38" fontSize="4" fill="#00ff00" fontFamily="monospace">STATUS: NORMAL ✓</text>
        </g>
      ) : (
        <g>
          {/* Normal SCADA display */}
          <rect x="14" y="12" width="16" height="10" stroke="#00f0ff" strokeWidth="0.5" fill="none" opacity="0.5" />
          <rect x="34" y="12" width="16" height="10" stroke="#00f0ff" strokeWidth="0.5" fill="none" opacity="0.5" />
          <text x="22" y="19" textAnchor="middle" fontSize="4" fill="#00f0ff" opacity="0.6">FLOW</text>
          <text x="42" y="19" textAnchor="middle" fontSize="4" fill="#00f0ff" opacity="0.6">PRESS</text>
          {/* Bars */}
          <rect x="14" y="26" width="36" height="3" fill="#00f0ff" opacity="0.2" />
          <rect x="14" y="26" width="24" height="3" fill="#00f0ff" opacity="0.5" />
          <rect x="14" y="32" width="36" height="3" fill="#00f0ff" opacity="0.2" />
          <rect x="14" y="32" width="18" height="3" fill="#00f0ff" opacity="0.5" />
        </g>
      )}
      {/* Stand */}
      <rect x="26" y="44" width="12" height="4" fill="url(#scadaGrad)" opacity="0.3" />
      <rect x="20" y="48" width="24" height="4" rx="1" fill="url(#scadaGrad)" opacity="0.4" />
      {/* Indicator lights */}
      <circle cx="12" cy="48" r="2" fill={infected ? "#ff3366" : "#00ff00"}>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="52" cy="48" r="2" fill={infected ? "#ff3366" : "#00f0ff"}>
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function PLCIcon({ className = "", size = 48, infected = false, glowColor = "#ff3366" }: IconProps) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none"
      style={{ filter: infected ? `drop-shadow(0 0 12px ${glowColor})` : 'none' }}
    >
      <defs>
        <linearGradient id="plcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={infected ? "#ff3366" : "#00f0ff"} />
          <stop offset="100%" stopColor={infected ? "#a855f7" : "#00a8ff"} />
        </linearGradient>
      </defs>
      {/* PLC Housing */}
      <rect x="10" y="6" width="44" height="52" rx="3" fill="url(#plcGrad)" opacity="0.15" />
      <rect x="10" y="6" width="44" height="52" rx="3" stroke="url(#plcGrad)" strokeWidth="2" fill="none" />
      {/* Top vents */}
      {[0, 1, 2, 3].map(i => (
        <rect key={i} x={16 + i * 9} y="10" width="5" height="2" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.4" />
      ))}
      {/* Status LEDs */}
      <g>
        <circle cx="18" cy="20" r="3" fill={infected ? "#ff3366" : "#00ff00"}>
          <animate attributeName="opacity" values="0.5;1;0.5" dur={infected ? "0.2s" : "2s"} repeatCount="indefinite" />
        </circle>
        <circle cx="28" cy="20" r="3" fill={infected ? "#ff3366" : "#ffaa00"}>
          <animate attributeName="opacity" values="1;0.5;1" dur={infected ? "0.3s" : "1.5s"} repeatCount="indefinite" />
        </circle>
        <circle cx="38" cy="20" r="3" fill={infected ? "#ff3366" : "#00f0ff"}>
          <animate attributeName="opacity" values="0.7;1;0.7" dur={infected ? "0.15s" : "1s"} repeatCount="indefinite" />
        </circle>
        <text x="18" y="28" textAnchor="middle" fontSize="4" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.6">RUN</text>
        <text x="28" y="28" textAnchor="middle" fontSize="4" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.6">ERR</text>
        <text x="38" y="28" textAnchor="middle" fontSize="4" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.6">COM</text>
      </g>
      {/* Connection ports */}
      <rect x="14" y="34" width="36" height="18" rx="2" fill="#0a0a0f" />
      {[0, 1, 2, 3, 4, 5].map(i => (
        <g key={i}>
          <rect x={18 + i * 5} y="38" width="3" height="10" fill={infected ? "#ff3366" : "#00f0ff"} opacity={0.3 + (i % 2) * 0.3}>
            {infected && (
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${0.2 + i * 0.05}s`} repeatCount="indefinite" />
            )}
          </rect>
        </g>
      ))}
      {/* Siemens-style label */}
      <text x="32" y="55" textAnchor="middle" fontSize="5" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.7" fontFamily="monospace">
        {infected ? "PWNED" : "S7-300"}
      </text>
    </svg>
  );
}

export function CentrifugeIcon({ className = "", size = 48, infected = false, glowColor = "#ff3366" }: IconProps) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none"
      style={{ filter: infected ? `drop-shadow(0 0 12px ${glowColor})` : 'none' }}
    >
      <defs>
        <linearGradient id="centGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={infected ? "#ff3366" : "#00f0ff"} />
          <stop offset="100%" stopColor={infected ? "#a855f7" : "#00a8ff"} />
        </linearGradient>
      </defs>
      {/* Outer casing */}
      <ellipse cx="32" cy="32" rx="26" ry="28" fill="url(#centGrad)" opacity="0.1" />
      <ellipse cx="32" cy="32" rx="26" ry="28" stroke="url(#centGrad)" strokeWidth="2" fill="none" />
      {/* Inner rotating drum */}
      <ellipse cx="32" cy="32" rx="18" ry="20" fill="none" stroke={infected ? "#ff3366" : "#00f0ff"} strokeWidth="1.5" opacity="0.6">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from={infected ? "0 32 32" : "0 32 32"}
          to={infected ? "360 32 32" : "360 32 32"}
          dur={infected ? "0.3s" : "2s"}
          repeatCount="indefinite"
        />
      </ellipse>
      {/* Spinning rotor blades */}
      <g>
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 32 32"
          to={infected ? "-360 32 32" : "360 32 32"}
          dur={infected ? "0.2s" : "1.5s"}
          repeatCount="indefinite"
        />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x2 = 32 + Math.cos(rad) * 14;
          const y2 = 32 + Math.sin(rad) * 14;
          return (
            <line 
              key={i}
              x1="32" 
              y1="32" 
              x2={x2} 
              y2={y2} 
              stroke={infected ? "#ff3366" : "#00f0ff"} 
              strokeWidth="2" 
              opacity={infected ? 0.8 : 0.5}
            />
          );
        })}
      </g>
      {/* Center hub */}
      <circle cx="32" cy="32" r="6" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.3" />
      <circle cx="32" cy="32" r="4" fill={infected ? "#ff3366" : "#00f0ff"} opacity="0.5">
        {infected && (
          <animate attributeName="r" values="4;6;4" dur="0.15s" repeatCount="indefinite" />
        )}
      </circle>
      {/* Radiation symbol when infected (representing nuclear context) */}
      {infected && (
        <g opacity="0.9">
          <circle cx="32" cy="32" r="2" fill="#ffff00" />
          {[0, 120, 240].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 32 + Math.cos(rad) * 10;
            const y = 32 + Math.sin(rad) * 10;
            return (
              <path
                key={i}
                d={`M32,32 L${32 + Math.cos((rad - 0.5)) * 12},${32 + Math.sin((rad - 0.5)) * 12} A12,12 0 0,1 ${32 + Math.cos((rad + 0.5)) * 12},${32 + Math.sin((rad + 0.5)) * 12} Z`}
                fill="#ffff00"
                opacity="0.7"
              >
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="0.5s" repeatCount="indefinite" />
              </path>
            );
          })}
        </g>
      )}
      {/* Warning vibration effect when infected */}
      {infected && (
        <>
          <ellipse cx="32" cy="32" rx="28" ry="30" fill="none" stroke="#ff3366" strokeWidth="1" opacity="0.4">
            <animate attributeName="rx" values="28;30;28" dur="0.1s" repeatCount="indefinite" />
            <animate attributeName="ry" values="30;32;30" dur="0.1s" repeatCount="indefinite" />
          </ellipse>
        </>
      )}
    </svg>
  );
}

// Data packet animation icon
export function DataPacketIcon({ className = "", size = 24, color = "#ff3366" }: { className?: string; size?: number; color?: string }) {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
    >
      <defs>
        <radialGradient id="packetGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#packetGlow)" opacity="0.5" />
      <circle cx="16" cy="16" r="8" fill={color}>
        <animate attributeName="r" values="6;8;6" dur="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="16" r="4" fill="#fff" opacity="0.8" />
      {/* Binary data effect */}
      <text x="16" y="18" textAnchor="middle" fontSize="6" fill="#000" fontFamily="monospace" fontWeight="bold">01</text>
    </svg>
  );
}

export const stageIcons = {
  usb: USBIcon,
  laptop: LaptopIcon,
  network: NetworkIcon,
  scada: SCADAIcon,
  plc: PLCIcon,
  centrifuge: CentrifugeIcon,
};
