export const APP_NAME = 'UserPortal';
export const APP_TAGLINE = 'User & inventory management platform';
export const APP_DESCRIPTION =
  'Manage employees, roles, attendance, leave, and inventory — stock, SKUs, categories, and adjustments — in one secure company portal.';

export const PORTAL_URL =
  process.env.NEXT_PUBLIC_PORTAL_URL ?? 'http://localhost:5174';

export const portalPath = (path: string) => {
  const base = PORTAL_URL.replace(/\/$/, '');
  const route = path.startsWith('/') ? path : `/${path}`;
  return `${base}${route}`;
};
