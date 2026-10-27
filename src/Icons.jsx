import React from "react";

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const paths = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  inventory: (
    <>
      <path d="M3 4h3l2.5 11h10L21 7H7" />
      <circle cx="9.5" cy="19" r="1.3" />
      <circle cx="17.5" cy="19" r="1.3" />
    </>
  ),
  reports: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  suppliers: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 18c1.2-2.4 3.1-3.5 5.5-3.5s4.300 1.100 5.500 3.500" />
    </>
  ),
  orders: (
    <>
      <path d="M6 3h12a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2-3-2V5a2 2 0 0 1 2-2Z" transform="translate(-1 0)" />
      <path d="M8 8h8M8 12h5" />
    </>
  ),
  store: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h8" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.400 15a1.700 1.700 0 0 0 .3 1.800l.1.100a2 2 0 1 1-2.800 2.800l-.1-.1a1.700 1.700 0 0 0-1.800-.3 1.700 1.700 0 0 0-1 1.500V21a2 2 0 1 1-4 0v-.1a1.700 1.700 0 0 0-1.100-1.500 1.700 1.700 0 0 0-1.800.3l-.1.100a2 2 0 1 1-2.800-2.800l.1-.1a1.700 1.700 0 0 0 .3-1.800 1.700 1.700 0 0 0-1.500-1H3a2 2 0 1 1 0-4h.1a1.700 1.700 0 0 0 1.500-1.100 1.700 1.700 0 0 0-.3-1.800l-.1-.1a2 2 0 1 1 2.800-2.800l.1.100a1.700 1.700 0 0 0 1.800.3H9a1.700 1.700 0 0 0 1-1.500V3a2 2 0 1 1 4 0v.1a1.700 1.700 0 0 0 1 1.500 1.700 1.700 0 0 0 1.800-.3l.1-.1a2 2 0 1 1 2.800 2.800l-.1.100a1.700 1.700 0 0 0-.3 1.800V9a1.700 1.700 0 0 0 1.500 1H21a2 2 0 1 1 0 4h-.1a1.700 1.700 0 0 0-1.500 1Z" />
    </>
  ),
  logout: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5M21 12H9" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.300-4.300" />
    </>
  ),
  bell: (
    <>
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.300 21a1.900 1.900 0 0 0 3.400 0" />
    </>
  ),
  filter: (
    <>
      <path d="M4 7h16M7 12h10M10 17h4" />
    </>
  ),
  edit: (
    <>
      <path d="M12 20h9" />
      <path d="M16.500 3.500a2.100 2.100 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
};

export default function Icon({ name, size = 18, ...rest }) {
  return (
    <svg {...base} width={size} height={size} {...rest}>
      {paths[name]}
    </svg>
  );
}

export function Logo({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="10" fill="#18b5c8" />
      <path d="M13 10v20" stroke="#fff" strokeWidth="4.500" strokeLinecap="round" />
      <path d="M26 11 16 21l10 9" stroke="#1570ef" strokeWidth="4.500" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
