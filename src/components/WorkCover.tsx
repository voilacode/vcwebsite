import React from 'react';
import type { CaseStudy } from '../content/case-studies';

/**
 * Generative SVG covers — one per case study.
 * Monochrome on black with minimal purple brand accent. All six share
 * the same tonal language so the Work grid reads cohesively, and so
 * each cover looks right on either a light or a dark page.
 */

const INK = '#0F0E1A';
const INK_SOFT = '#1A1828';
const INK_LIFT = '#23203A';
const LIGHT = '#EDE7F3';           // near-white foreground
const LIGHT_DIM = 'rgba(237,231,243,0.55)';
const LIGHT_FAINT = 'rgba(237,231,243,0.22)';
const LIGHT_GHOST = 'rgba(237,231,243,0.10)';

// One accent for restrained brand colour — kept constant across modes
const ACCENT = '#6C3BE6';
const ACCENT_SOFT = 'rgba(108,59,230,0.22)';

const Fresherbot: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" fill={INK} />
    {Array.from({ length: 9 }).map((_, i) => {
      const r = Math.floor(i / 3);
      const c = i % 3;
      const flagged = i === 4;
      return (
        <g key={i} transform={`translate(${60 + c * 165}, ${40 + r * 95})`}>
          <rect width="140" height="78" rx="4" fill={INK_SOFT} stroke={flagged ? ACCENT : LIGHT_GHOST} strokeWidth={flagged ? 2 : 1} />
          <circle cx="28" cy="32" r="14" fill={LIGHT_GHOST} />
          <circle cx="28" cy="32" r="7" fill={flagged ? ACCENT : LIGHT_FAINT} />
          <rect x="50" y="26" width="74" height="4" rx="2" fill={flagged ? ACCENT : LIGHT_FAINT} />
          <rect x="50" y="36" width="50" height="3" rx="1.5" fill={LIGHT_GHOST} />
          <rect x="14" y="58" width="112" height="4" rx="2" fill={LIGHT_GHOST} />
          <rect x="14" y="58" width={flagged ? 96 : 34 + (i * 9) % 60} height="4" rx="2" fill={flagged ? ACCENT : LIGHT_DIM} opacity={flagged ? 1 : 0.5} />
        </g>
      );
    })}
    <text x="36" y="340" fill={LIGHT_DIM} fontFamily="ui-monospace" fontSize="11" letterSpacing="0.18em">
      FLAGGED · CONF 0.92 · TAB-SWITCH · AUDIO-ANOMALY
    </text>
  </svg>
);

const AskDino: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" fill={INK} />
    {/* globe */}
    <g transform="translate(140,200)">
      <circle r="110" fill="none" stroke={LIGHT_FAINT} strokeWidth="1" />
      <ellipse rx="110" ry="44" fill="none" stroke={LIGHT_GHOST} strokeWidth="1" />
      <ellipse rx="110" ry="78" fill="none" stroke={LIGHT_GHOST} strokeWidth="1" />
      <line x1="-110" y1="0" x2="110" y2="0" stroke={LIGHT_GHOST} strokeWidth="1" />
      <line x1="0" y1="-110" x2="0" y2="110" stroke={LIGHT_GHOST} strokeWidth="1" />
      {[[-60, -55], [50, -35], [70, 48], [-55, 65]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle r="5" fill={ACCENT} />
          <circle r="14" fill="none" stroke={ACCENT} strokeWidth="1" opacity="0.4" />
        </g>
      ))}
    </g>
    {/* chat → profile panels */}
    <g transform="translate(320, 50)">
      <rect width="240" height="44" rx="10" fill={INK_LIFT} />
      <rect x="12" y="13" width="120" height="5" rx="2.5" fill={LIGHT_DIM} />
      <rect x="12" y="25" width="180" height="5" rx="2.5" fill={LIGHT_FAINT} />
      <path d="M120 56 L120 78" stroke={ACCENT} strokeWidth="2" />
      <path d="M114 72 L120 78 L126 72" stroke={ACCENT} strokeWidth="2" fill="none" />
      <g transform="translate(0, 86)">
        <rect width="240" height="168" rx="8" fill={INK_SOFT} stroke={LIGHT_GHOST} strokeWidth="1" />
        {[
          ['Budget', '$45k / yr'],
          ['Region', 'US · Canada'],
          ['Score', 'GRE 325'],
          ['Field', 'CS · ML'],
        ].map(([k, v], i) => (
          <g key={i} transform={`translate(16, ${22 + i * 34})`}>
            <text fontFamily="ui-monospace" fontSize="10" fill={LIGHT_DIM} letterSpacing="0.12em">
              {k.toUpperCase()}
            </text>
            <text x="88" fontFamily="Inter, sans-serif" fontSize="12" fill={LIGHT} fontWeight="500">{v}</text>
            <rect y="18" width="208" height="1" fill={LIGHT_GHOST} />
          </g>
        ))}
      </g>
    </g>
  </svg>
);

const Plotmagic: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" fill={INK} />
    {/* boundary polygon */}
    <path d="M 60 60 L 540 80 L 520 300 L 80 320 Z" fill={INK_SOFT} stroke={LIGHT_DIM} strokeWidth="1.5" />
    {/* road network */}
    <g stroke={LIGHT_FAINT} strokeWidth="6" fill="none">
      <path d="M 60 180 L 540 190" />
      <path d="M 300 60 L 310 320" />
    </g>
    {/* plot grid */}
    {Array.from({ length: 16 }).map((_, i) => {
      const r = Math.floor(i / 4);
      const c = i % 4;
      const x = 88 + c * 108;
      const y = 80 + r * 58;
      const highlighted = i === 5 || i === 10;
      return (
        <g key={i}>
          <rect x={x} y={y} width="96" height="46" fill={highlighted ? ACCENT_SOFT : 'transparent'} stroke={LIGHT_FAINT} strokeWidth="1" />
          <text x={x + 48} y={y + 28} textAnchor="middle" fontFamily="ui-monospace" fontSize="10" fill={LIGHT_DIM}>
            {200 + (i * 17) % 180}m²
          </text>
        </g>
      );
    })}
    <g transform="translate(60, 330)">
      <text fontFamily="ui-monospace" fontSize="11" fill={LIGHT_DIM} letterSpacing="0.1em">
        64 PLOTS · 73% SALEABLE · 9M ROADS · SETBACK 3M
      </text>
    </g>
  </svg>
);

const Kura: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" fill={INK} />
    {/* blueprint grid */}
    <g stroke={LIGHT_GHOST} strokeWidth="0.5" fill="none">
      {Array.from({ length: 20 }).map((_, i) => <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="360" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} />)}
    </g>
    {/* floor plan silhouette */}
    <g stroke={LIGHT_DIM} strokeWidth="2" fill="none">
      <path d="M 60 80 L 300 80 L 300 160 L 380 160 L 380 240 L 60 240 Z" />
      <path d="M 180 80 L 180 160 L 300 160" />
      <path d="M 180 160 L 180 240" />
      <circle cx="260" cy="200" r="8" />
    </g>
    {/* phase timeline */}
    <g transform="translate(60, 280)">
      {['SD', 'DD', 'CD', 'CA'].map((phase, i) => {
        const done = i < 2;
        const active = i === 2;
        return (
          <g key={phase} transform={`translate(${i * 130}, 0)`}>
            <rect
              width="110" height="36" rx="4"
              fill={done ? ACCENT : active ? ACCENT_SOFT : 'transparent'}
              stroke={LIGHT_FAINT} strokeWidth="1"
            />
            <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill={done ? '#FFFFFF' : LIGHT_DIM}>
              {phase}
            </text>
            {i < 3 && <line x1="110" y1="18" x2="130" y2="18" stroke={LIGHT_GHOST} strokeWidth="1" />}
          </g>
        );
      })}
    </g>
  </svg>
);

const Piofx: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" fill={INK} />
    <g transform="translate(60, 60)">
      <defs>
        <linearGradient id="piofxFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.65" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 0 150 L 50 130 L 100 132 L 150 108 L 200 95 L 250 70 L 300 58 L 350 38 L 400 25 L 450 22 L 480 18 L 480 180 L 0 180 Z" fill="url(#piofxFill)" />
      <path d="M 0 150 L 50 130 L 100 132 L 150 108 L 200 95 L 250 70 L 300 58 L 350 38 L 400 25 L 450 22 L 480 18" stroke={ACCENT} strokeWidth="2" fill="none" />
      {[[0, 150], [100, 132], [200, 95], [300, 58], [400, 25], [480, 18]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={LIGHT_DIM} />
      ))}
      <line x1="0" y1="180" x2="480" y2="180" stroke={LIGHT_FAINT} strokeWidth="1" />
    </g>
    <g transform="translate(60, 280)">
      <text fontFamily="ui-monospace" fontSize="10" fill={LIGHT_DIM} letterSpacing="0.16em">STUDENT COHORT · GRADE 10 · TERM 2</text>
      <g transform="translate(0, 20)">
        {Array.from({ length: 32 }).map((_, i) => {
          const y = i < 22 ? 0 : 14;
          const x = (i % 22) * 22;
          return <circle key={i} cx={x} cy={y} r="5" fill={i < 22 ? ACCENT : LIGHT_FAINT} opacity={i < 22 ? 0.5 + (i / 66) : 1} />;
        })}
      </g>
    </g>
  </svg>
);

const Oddits: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" fill={INK} />
    {/* state machine */}
    <g transform="translate(40, 100)">
      {['DRAFT', 'VALIDATED', 'SUBMITTED', 'ACK'].map((state, i) => {
        const active = i === 2;
        const done = i < 2;
        return (
          <g key={state} transform={`translate(${i * 140}, 0)`}>
            <rect
              width="120" height="52" rx="26"
              fill={done ? ACCENT : active ? ACCENT_SOFT : 'transparent'}
              stroke={LIGHT_FAINT} strokeWidth="1.5"
            />
            <text x="60" y="32" textAnchor="middle" fontFamily="ui-monospace" fontSize="11" fontWeight="600" fill={done ? '#FFFFFF' : LIGHT_DIM} letterSpacing="0.12em">
              {state}
            </text>
            {i < 3 && (
              <g transform="translate(120, 26)">
                <line x1="0" y1="0" x2="20" y2="0" stroke={LIGHT_FAINT} strokeWidth="1" />
                <path d="M 14 -4 L 20 0 L 14 4" stroke={LIGHT_FAINT} strokeWidth="1" fill="none" />
              </g>
            )}
          </g>
        );
      })}
    </g>
    {/* retry loop */}
    <g transform="translate(320, 180)">
      <path d="M 0 0 A 40 40 0 0 1 40 -40" stroke={ACCENT} strokeWidth="1.5" fill="none" />
      <path d="M 34 -44 L 40 -40 L 36 -33" stroke={ACCENT} strokeWidth="1.5" fill="none" />
      <text x="22" y="-52" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill={ACCENT} letterSpacing="0.12em">RETRY</text>
    </g>
    {/* ₹ + compliance badges */}
    <g transform="translate(60, 230)">
      <text fontFamily="Playfair Display, serif" fontSize="48" fill={LIGHT}>₹</text>
      <g transform="translate(80, -10)">
        {['GST', 'E-INV', 'E-WAY'].map((tag, i) => (
          <rect key={tag} x={i * 72} y="12" width="64" height="24" rx="12" fill="transparent" stroke={LIGHT_FAINT} strokeWidth="1" />
        ))}
        {['GST', 'E-INV', 'E-WAY'].map((tag, i) => (
          <text key={`t-${tag}`} x={i * 72 + 32} y="29" textAnchor="middle" fontFamily="ui-monospace" fontSize="10" fontWeight="600" fill={LIGHT_DIM} letterSpacing="0.1em">
            {tag}
          </text>
        ))}
      </g>
    </g>
    <g transform="translate(40, 320)">
      <text fontFamily="ui-monospace" fontSize="10" fill={LIGHT_DIM} letterSpacing="0.14em">
        COMPLIANCE AS STATE · AUDIT-READY · REPLAYABLE
      </text>
    </g>
  </svg>
);

const REGISTRY: Record<CaseStudy['coverKind'], React.FC> = {
  fresherbot: Fresherbot,
  askdino: AskDino,
  plotmagic: Plotmagic,
  kura: Kura,
  piofx: Piofx,
  oddits: Oddits,
};

export const WorkCover: React.FC<{ kind: CaseStudy['coverKind'] }> = ({ kind }) => {
  const Component = REGISTRY[kind];
  return <Component />;
};

export default WorkCover;
