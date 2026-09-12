const svgProps = {
  viewBox: '0 0 640 400',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  className: 'h-full w-full',
  'aria-hidden': true,
};

function Frame({ children, label }) {
  return (
    <svg {...svgProps}>
      <rect width="640" height="400" fill="#11161e" />
      <rect x="0.5" y="0.5" width="639" height="399" stroke="rgba(241,236,227,0.08)" />
      <text
        x="28"
        y="36"
        fill="#7ea8b8"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="10"
        letterSpacing="2.4"
      >
        {label}
      </text>
      {children}
    </svg>
  );
}

export function HealthIllustration() {
  return (
    <Frame label="HEALTH ECOSYSTEM">
      <circle cx="320" cy="210" r="42" stroke="#c9a36a" strokeWidth="1.25" />
      <circle cx="320" cy="210" r="8" fill="#c9a36a" />
      {[
        [160, 110],
        [480, 118],
        [140, 270],
        [500, 260],
        [250, 80],
        [400, 320],
        [200, 330],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="320" y1="210" x2={x} y2={y} stroke="rgba(126,168,184,0.35)" />
          <rect x={x - 18} y={y - 12} width="36" height="24" rx="3" stroke="rgba(241,236,227,0.35)" />
          <path d={`M${x} ${y - 6}v12M${x - 6} ${y}h12`} stroke="#7ea8b8" strokeWidth="1.2" />
        </g>
      ))}
    </Frame>
  );
}

export function FinanceIllustration() {
  const points = [80, 160, 140, 210, 180, 150, 240, 280, 220, 310];
  const d = points
    .map((y, i) => `${i === 0 ? 'M' : 'L'} ${70 + i * 54} ${340 - y}`)
    .join(' ');
  return (
    <Frame label="FINANCIAL SIGNALS">
      {[80, 140, 200, 260, 320].map((y) => (
        <line key={y} x1="56" y1={y} x2="600" y2={y} stroke="rgba(241,236,227,0.06)" />
      ))}
      <path d={d} stroke="#c9a36a" strokeWidth="1.6" />
      {points.map((y, i) => (
        <circle key={i} cx={70 + i * 54} cy={340 - y} r="3.5" fill="#f1ece3" />
      ))}
      <rect x="430" y="90" width="150" height="86" rx="4" stroke="rgba(126,168,184,0.45)" />
      <text x="448" y="118" fill="#9a9488" fontFamily="IBM Plex Mono, monospace" fontSize="10">
        PATTERN
      </text>
      <text x="448" y="148" fill="#f1ece3" fontFamily="Outfit, sans-serif" fontSize="18">
        Decision
      </text>
    </Frame>
  );
}

export function EducationIllustration() {
  return (
    <Frame label="VIRTUAL LABORATORY">
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = 90 + col * 120;
          const y = 80 + row * 90;
          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width="96" height="72" rx="4" stroke="rgba(241,236,227,0.16)" />
              <path
                d={`M${x + 28} ${y + 48}c0-16 8-28 20-28s20 12 20 28`}
                stroke="#7ea8b8"
                strokeWidth="1.2"
              />
              <circle cx={x + 48} cy={y + 22} r="4" fill="#c9a36a" />
            </g>
          );
        })
      )}
    </Frame>
  );
}

export function AgricultureIllustration() {
  return (
    <Frame label="FARM × CLIMATE × FINANCE">
      <path d="M40 280 C140 240, 220 300, 320 260 C420 220, 500 280, 600 240 L600 360 L40 360 Z" fill="rgba(201,163,106,0.08)" stroke="rgba(201,163,106,0.4)" />
      {[120, 220, 340, 460, 540].map((x, i) => (
        <g key={x}>
          <line x1={x} y1={268 - i * 6} x2={x} y2="318" stroke="#7ea8b8" />
          <path d={`M${x} ${250 - i * 4}c-14 8-14 22 0 28c14-6 14-20 0-28z`} stroke="#c9a36a" />
        </g>
      ))}
      <path d="M80 150 C160 90, 280 120, 360 80 C440 50, 520 90, 580 70" stroke="rgba(126,168,184,0.7)" strokeDasharray="4 6" />
      <circle cx="210" cy="118" r="10" stroke="#f1ece3" />
    </Frame>
  );
}

export function NutritionIllustration() {
  return (
    <Frame label="NUTRITION × BUDGET">
      <circle cx="250" cy="210" r="110" stroke="rgba(241,236,227,0.18)" />
      <path d="M250 100 A110 110 0 0 1 360 210 L250 210 Z" fill="rgba(201,163,106,0.18)" stroke="#c9a36a" />
      <path d="M250 210 L360 210 A110 110 0 0 1 180 300 Z" fill="rgba(126,168,184,0.12)" stroke="#7ea8b8" />
      <path d="M250 210 L180 300 A110 110 0 0 1 250 100 Z" stroke="rgba(241,236,227,0.35)" />
      <rect x="400" y="140" width="170" height="140" rx="4" stroke="rgba(241,236,227,0.14)" />
      <text x="420" y="172" fill="#9a9488" fontFamily="IBM Plex Mono, monospace" fontSize="10">SCAN</text>
      <text x="420" y="202" fill="#f1ece3" fontFamily="Outfit, sans-serif" fontSize="16">Food</text>
      <text x="420" y="232" fill="#9a9488" fontFamily="IBM Plex Mono, monospace" fontSize="10">PLAN</text>
      <text x="420" y="262" fill="#f1ece3" fontFamily="Outfit, sans-serif" fontSize="16">Budget</text>
    </Frame>
  );
}

export function AerospaceIllustration() {
  return (
    <Frame label="MORPHING WING / NEMS × AI">
      <path d="M70 210 C180 170, 300 155, 430 168 C510 176, 560 155, 590 140" stroke="#c9a36a" strokeWidth="1.6" />
      <path d="M70 210 C190 230, 310 242, 440 228 C515 218, 560 232, 590 248" stroke="#7ea8b8" strokeWidth="1.6" strokeDasharray="6 7" />
      {[150, 250, 350, 450].map((x, i) => (
        <g key={x}>
          <line x1={x} y1={198 - i * 4} x2={x} y2={226 + i * 3} stroke="rgba(241,236,227,0.25)" />
          <circle cx={x} cy={198 - i * 4} r="3" fill="#f1ece3" />
        </g>
      ))}
      <text x="70" y="320" fill="#9a9488" fontFamily="IBM Plex Mono, monospace" fontSize="11">
        GEOMETRY ADAPTS TO FLIGHT CONDITION
      </text>
    </Frame>
  );
}

export function DataIllustration() {
  const nodes = [
    [160, 130, 'RW'],
    [320, 90, 'KE'],
    [480, 140, 'UG'],
    [300, 230, 'TZ'],
    [200, 280, 'MM'],
    [430, 290, 'ECON'],
  ];
  return (
    <Frame label="MOBILE MONEY SIGNALS">
      <line x1="160" y1="130" x2="320" y2="90" stroke="rgba(126,168,184,0.4)" />
      <line x1="320" y1="90" x2="480" y2="140" stroke="rgba(126,168,184,0.4)" />
      <line x1="160" y1="130" x2="300" y2="230" stroke="rgba(201,163,106,0.45)" />
      <line x1="480" y1="140" x2="300" y2="230" stroke="rgba(201,163,106,0.45)" />
      <line x1="300" y1="230" x2="200" y2="280" stroke="rgba(241,236,227,0.25)" />
      <line x1="300" y1="230" x2="430" y2="290" stroke="rgba(241,236,227,0.25)" />
      {nodes.map(([x, y, label]) => (
        <g key={label}>
          <circle cx={x} cy={y} r="22" stroke="rgba(241,236,227,0.3)" fill="#11161e" />
          <text x={x} y={y + 4} textAnchor="middle" fill="#f1ece3" fontFamily="IBM Plex Mono, monospace" fontSize="10">
            {label}
          </text>
        </g>
      ))}
    </Frame>
  );
}

export function RoboticsIllustration() {
  return (
    <Frame label="KINEMATIC ARM">
      <circle cx="160" cy="300" r="10" fill="#c9a36a" />
      <line x1="160" y1="300" x2="250" y2="190" stroke="#f1ece3" strokeWidth="6" strokeLinecap="round" />
      <circle cx="250" cy="190" r="8" stroke="#7ea8b8" fill="#11161e" />
      <line x1="250" y1="190" x2="390" y2="150" stroke="#f1ece3" strokeWidth="5" strokeLinecap="round" />
      <circle cx="390" cy="150" r="8" stroke="#7ea8b8" fill="#11161e" />
      <line x1="390" y1="150" x2="500" y2="188" stroke="#f1ece3" strokeWidth="4" strokeLinecap="round" />
      <path d="M488 176 l28 8 l-10 18" stroke="#c9a36a" strokeWidth="2" />
      <path d="M70 330 H570" stroke="rgba(241,236,227,0.12)" />
    </Frame>
  );
}

export function AquaticIllustration() {
  return (
    <Frame label="AQUATIC COLLECTION">
      {[110, 170, 230, 290].map((y) => (
        <path
          key={y}
          d={`M40 ${y} C140 ${y - 12}, 240 ${y + 12}, 340 ${y} C440 ${y - 12}, 540 ${y + 8}, 620 ${y}`}
          stroke="rgba(126,168,184,0.25)"
        />
      ))}
      <ellipse cx="300" cy="210" rx="120" ry="36" stroke="#c9a36a" />
      <path d="M180 210 C210 180, 250 180, 300 210 C250 240, 210 240, 180 210" fill="rgba(201,163,106,0.12)" stroke="#f1ece3" />
      <path d="M410 198 C470 210, 470 210, 410 222" stroke="#7ea8b8" />
      <circle cx="470" cy="250" r="5" stroke="rgba(241,236,227,0.4)" />
      <circle cx="510" cy="270" r="4" stroke="rgba(241,236,227,0.3)" />
      <circle cx="430" cy="280" r="3" stroke="rgba(241,236,227,0.25)" />
    </Frame>
  );
}

export function NetworkHero() {
  return (
    <svg viewBox="0 0 900 700" className="h-full w-full" fill="none" aria-hidden>
      <g opacity="0.7">
        <line x1="120" y1="140" x2="280" y2="220" stroke="rgba(126,168,184,0.28)" />
        <line x1="280" y1="220" x2="470" y2="160" stroke="rgba(201,163,106,0.32)" />
        <line x1="470" y1="160" x2="640" y2="250" stroke="rgba(126,168,184,0.28)" />
        <line x1="280" y1="220" x2="340" y2="400" stroke="rgba(241,236,227,0.16)" />
        <line x1="470" y1="160" x2="520" y2="380" stroke="rgba(241,236,227,0.16)" />
        <line x1="340" y1="400" x2="520" y2="380" stroke="rgba(201,163,106,0.25)" />
        <line x1="640" y1="250" x2="760" y2="420" stroke="rgba(126,168,184,0.22)" />
        <line x1="520" y1="380" x2="760" y2="420" stroke="rgba(241,236,227,0.14)" />
        <line x1="120" y1="140" x2="80" y2="360" stroke="rgba(241,236,227,0.12)" />
        <line x1="80" y1="360" x2="340" y2="400" stroke="rgba(126,168,184,0.2)" />
        {[
          [120, 140],
          [280, 220],
          [470, 160],
          [640, 250],
          [340, 400],
          [520, 380],
          [760, 420],
          [80, 360],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 2 ? 5 : 3.5} fill={i % 2 ? '#c9a36a' : '#7ea8b8'} />
        ))}
      </g>
    </svg>
  );
}

const map = {
  health: HealthIllustration,
  finance: FinanceIllustration,
  education: EducationIllustration,
  agriculture: AgricultureIllustration,
  nutrition: NutritionIllustration,
  aerospace: AerospaceIllustration,
  data: DataIllustration,
  robotics: RoboticsIllustration,
  aquatic: AquaticIllustration,
};

export default function Illustration({ type, className = '' }) {
  const Cmp = map[type] || HealthIllustration;
  return (
    <div className={`overflow-hidden rounded-sm ${className}`}>
      <Cmp />
    </div>
  );
}
