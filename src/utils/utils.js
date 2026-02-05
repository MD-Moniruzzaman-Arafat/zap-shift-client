export function generateTrackingId() {
  const prefix = 'ZS'; // ZapShift
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(100000 + Math.random() * 900000);

  return `${prefix}-${date}-${random}`;
}
