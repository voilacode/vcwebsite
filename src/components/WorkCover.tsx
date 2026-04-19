import React from 'react';
import type { CaseStudy } from '../content/case-studies';

/**
 * Generative SVG covers — one per case study.
 * Colours are intentionally hardcoded (not CSS vars) so every cover
 * keeps its designed mood in both light and dark modes. Each cover
 * is a "poster" — Fresherbot + Piofx are dark by design; Plotmagic +
 * AskDino + Kura + Oddits are light by design. The brand purple
 * (#6C3BE6) stays constant across modes.
 */

const INK = '#0F0E1A';
const INK_SOFT = '#1A1828';
const PAPER = '#EDE7F3';
const PAPER_ALT = '#DFD5EB';
const PAPER_TINT = '#F5F0F9';

// Accent — stays constant regardless of scheme
const ACCENT = '#6C3BE6';
const ACCENT_DEEP = '#5023C6';
const ACCENT_SOFT = '#BFA6FA';

const Fresherbot: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" style={{ fill: INK }} />
    {Array.from({ length: 9 }).map((_, i) => {
      const r = Math.floor(i / 3);
      const c = i % 3;
      const flagged = i === 4;
      return (
        <g key={i} transform={`translate(${60 + c * 165}, ${40 + r * 95})`}>
          <rect width="140" height="78" rx="4" style={{ fill: INK_SOFT, stroke: flagged ? ACCENT : 'rgba(191,166,250,0.12)', strokeWidth: flagged ? 2 : 1 }} />
          <circle cx="28" cy="32" r="14" style={{ fill: 'rgba(191,166,250,0.12)' }} />
          <circle cx="28" cy="32" r="7" style={{ fill: flagged ? ACCENT : 'rgba(191,166,250,0.35)' }} />
          <rect x="50" y="26" width="74" height="4" rx="2" style={{ fill: flagged ? ACCENT : 'rgba(191,166,250,0.28)' }} />
          <rect x="50" y="36" width="50" height="3" rx="1.5" style={{ fill: 'rgba(191,166,250,0.18)' }} />
          <rect x="14" y="58" width="112" height="4" rx="2" style={{ fill: 'rgba(191,166,250,0.14)' }} />
          <rect x="14" y="58" width={flagged ? 96 : 34 + (i * 9) % 60} height="4" rx="2" style={{ fill: flagged ? ACCENT : ACCENT_SOFT, opacity: flagged ? 1 : 0.5 }} />
        </g>
      );
    })}
    <text x="36" y="340" style={{ fill: 'rgba(191,166,250,0.5)' }} fontFamily="ui-monospace" fontSize="11" letterSpacing="0.18em">
      FLAGGED · CONF 0.92 · TAB-SWITCH · AUDIO-ANOMALY
    </text>
  </svg>
);

const AskDino: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" style={{ fill: PAPER_ALT }} />
    <g transform="translate(120,180)">
      <circle r="100" fill="none" style={{ stroke: INK, opacity: 0.5 }} strokeWidth="1" />
      <ellipse rx="100" ry="38" fill="none" style={{ stroke: INK, opacity: 0.3 }} strokeWidth="1" />
      <ellipse rx="100" ry="70" fill="none" style={{ stroke: INK, opacity: 0.3 }} strokeWidth="1" />
      <circle r="4" style={{ fill: ACCENT }} />
      {[[-60, -50], [50, -30], [70, 40], [-50, 60]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <circle r="5" style={{ fill: ACCENT }} />
          <circle r="12" fill="none" stroke={ACCENT} strokeWidth="1" opacity="0.4" />
        </g>
      ))}
    </g>
    <g transform="translate(280, 60)">
      <rect width="260" height="48" rx="10" style={{ fill: INK }} />
      <rect x="12" y="14" width="120" height="6" rx="3" style={{ fill: 'rgba(191,166,250,0.4)' }} />
      <rect x="12" y="28" width="180" height="6" rx="3" style={{ fill: 'rgba(191,166,250,0.6)' }} />
      <path d="M130 64 L130 86" stroke={ACCENT} strokeWidth="2" />
      <path d="M124 80 L130 86 L136 80" stroke={ACCENT} strokeWidth="2" fill="none" />
      <g transform="translate(0, 96)">
        <rect width="260" height="144" rx="8" style={{ fill: PAPER_TINT, stroke: INK, strokeOpacity: 0.2 }} strokeWidth="1" />
        {[
          ['Budget', '$45k / yr'],
          ['Region', 'US · Canada'],
          ['Score', 'GRE 325'],
          ['Field', 'CS · ML'],
        ].map(([k, v], i) => (
          <g key={i} transform={`translate(16, ${18 + i * 28})`}>
            <text fontFamily="ui-monospace" fontSize="10" style={{ fill: INK, opacity: 0.55 }} letterSpacing="0.1em">
              {k.toUpperCase()}
            </text>
            <text x="90" fontFamily="Inter, sans-serif" fontSize="12" style={{ fill: INK }} fontWeight="500">{v}</text>
            <rect y="16" width="228" height="1" style={{ fill: INK, opacity: 0.08 }} />
          </g>
        ))}
      </g>
    </g>
  </svg>
);

const Plotmagic: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" style={{ fill: PAPER }} />
    <path d="M 60 60 L 540 80 L 520 300 L 80 320 Z" style={{ fill: PAPER_TINT, stroke: INK, strokeWidth: 1.5 }} />
    <g style={{ stroke: INK, strokeWidth: 6, fill: 'none', opacity: 0.12 }}>
      <path d="M 60 180 L 540 190" />
      <path d="M 300 60 L 310 320" />
    </g>
    {Array.from({ length: 16 }).map((_, i) => {
      const r = Math.floor(i / 4);
      const c = i % 4;
      const x = 88 + c * 108;
      const y = 80 + r * 58;
      const highlighted = i === 5 || i === 10;
      return (
        <g key={i}>
          <rect x={x} y={y} width="96" height="46" style={{ fill: highlighted ? ACCENT : 'transparent', stroke: INK, strokeWidth: 1, opacity: highlighted ? 0.22 : 1 }} />
          <text x={x + 48} y={y + 28} textAnchor="middle" fontFamily="ui-monospace" fontSize="10" style={{ fill: INK, opacity: 0.55 }}>
            {200 + (i * 17) % 180}m²
          </text>
        </g>
      );
    })}
    <g transform="translate(60, 330)">
      <text fontFamily="ui-monospace" fontSize="11" style={{ fill: INK, opacity: 0.55 }} letterSpacing="0.1em">
        64 PLOTS · 73% SALEABLE · 9M ROADS · SETBACK 3M
      </text>
    </g>
  </svg>
);

const Kura: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" style={{ fill: PAPER_TINT }} />
    <g style={{ stroke: INK, strokeWidth: 0.4, opacity: 0.12, fill: 'none' }}>
      {Array.from({ length: 20 }).map((_, i) => <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="360" />)}
      {Array.from({ length: 12 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} />)}
    </g>
    <g style={{ stroke: INK, strokeWidth: 2, fill: 'none' }}>
      <path d="M 60 80 L 300 80 L 300 160 L 380 160 L 380 240 L 60 240 Z" />
      <path d="M 180 80 L 180 160 L 300 160" />
      <path d="M 180 160 L 180 240" />
      <circle cx="260" cy="200" r="8" fill="none" />
    </g>
    <g transform="translate(60, 280)">
      {['SD', 'DD', 'CD', 'CA'].map((phase, i) => {
        const done = i < 2;
        const active = i === 2;
        return (
          <g key={phase} transform={`translate(${i * 130}, 0)`}>
            <rect
              width="110" height="36" rx="4"
              style={{
                fill: done ? ACCENT : active ? ACCENT_SOFT : 'transparent',
                stroke: INK, strokeWidth: 1,
                opacity: done ? 1 : active ? 0.65 : 0.4,
              }}
            />
            <text x="55" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" style={{ fill: done ? '#FFFFFF' : INK }}>
              {phase}
            </text>
            {i < 3 && <line x1="110" y1="18" x2="130" y2="18" style={{ stroke: INK, strokeWidth: 1, opacity: 0.3 }} />}
          </g>
        );
      })}
    </g>
  </svg>
);

const Piofx: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" style={{ fill: INK }} />
    <g transform="translate(60, 60)">
      <defs>
        <linearGradient id="piofxFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ACCENT} stopOpacity="0.8" />
          <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 0 150 L 50 130 L 100 132 L 150 108 L 200 95 L 250 70 L 300 58 L 350 38 L 400 25 L 450 22 L 480 18 L 480 180 L 0 180 Z" fill="url(#piofxFill)" />
      <path d="M 0 150 L 50 130 L 100 132 L 150 108 L 200 95 L 250 70 L 300 58 L 350 38 L 400 25 L 450 22 L 480 18" stroke={ACCENT} strokeWidth="2" fill="none" />
      {[[0, 150], [100, 132], [200, 95], [300, 58], [400, 25], [480, 18]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={ACCENT_SOFT} />
      ))}
      <line x1="0" y1="180" x2="480" y2="180" style={{ stroke: 'rgba(191,166,250,0.22)' }} strokeWidth="1" />
    </g>
    <g transform="translate(60, 280)">
      <text fontFamily="ui-monospace" fontSize="10" style={{ fill: 'rgba(191,166,250,0.45)' }} letterSpacing="0.16em">STUDENT COHORT · GRADE 10 · TERM 2</text>
      <g transform="translate(0, 20)">
        {Array.from({ length: 32 }).map((_, i) => {
          const y = i < 22 ? 0 : 14;
          const x = (i % 22) * 22;
          return <circle key={i} cx={x} cy={y} r="5" style={{ fill: i < 22 ? ACCENT : 'rgba(191,166,250,0.28)', opacity: i < 22 ? 0.4 + (i / 66) : 1 }} />;
        })}
      </g>
    </g>
  </svg>
);

const Oddits: React.FC = () => (
  <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <rect width="600" height="360" style={{ fill: PAPER_ALT }} />
    <g transform="translate(40, 100)">
      {['DRAFT', 'VALIDATED', 'SUBMITTED', 'ACK'].map((state, i) => {
        const active = i === 2;
        const done = i < 2;
        return (
          <g key={state} transform={`translate(${i * 140}, 0)`}>
            <rect
              width="120" height="52" rx="26"
              style={{
                fill: done ? ACCENT : active ? ACCENT_DEEP : 'transparent',
                stroke: INK, strokeWidth: 1.5,
              }}
            />
            <text x="60" y="32" textAnchor="middle" fontFamily="ui-monospace" fontSize="11" fontWeight="600" style={{ fill: done || active ? '#FFFFFF' : INK }} letterSpacing="0.12em">
              {state}
            </text>
            {i < 3 && (
              <g transform="translate(120, 26)">
                <line x1="0" y1="0" x2="20" y2="0" style={{ stroke: INK, strokeWidth: 1 }} />
                <path d="M 14 -4 L 20 0 L 14 4" style={{ stroke: INK, strokeWidth: 1, fill: 'none' }} />
              </g>
            )}
          </g>
        );
      })}
    </g>
    <g transform="translate(320, 180)">
      <path d="M 0 0 A 40 40 0 0 1 40 -40" stroke={ACCENT} strokeWidth="1.5" fill="none" />
      <path d="M 34 -44 L 40 -40 L 36 -33" stroke={ACCENT} strokeWidth="1.5" fill="none" />
      <text x="22" y="-52" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill={ACCENT} letterSpacing="0.12em">RETRY</text>
    </g>
    <g transform="translate(60, 230)">
      <text fontFamily="Playfair Display, serif" fontSize="48" style={{ fill: INK, opacity: 0.9 }}>₹</text>
      <g transform="translate(80, -10)">
        {['GST', 'E-INV', 'E-WAY'].map((tag, i) => (
          <rect key={tag} x={i * 72} y="12" width="64" height="24" rx="12" style={{ fill: 'transparent', stroke: INK, strokeWidth: 1 }} />
        ))}
        {['GST', 'E-INV', 'E-WAY'].map((tag, i) => (
          <text key={`t-${tag}`} x={i * 72 + 32} y="29" textAnchor="middle" fontFamily="ui-monospace" fontSize="10" fontWeight="600" style={{ fill: INK }} letterSpacing="0.1em">
            {tag}
          </text>
        ))}
      </g>
    </g>
    <g transform="translate(40, 320)">
      <text fontFamily="ui-monospace" fontSize="10" style={{ fill: INK, opacity: 0.55 }} letterSpacing="0.14em">
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
