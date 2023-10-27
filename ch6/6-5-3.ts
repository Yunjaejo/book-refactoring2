export function inNewEngland(state: string) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}

interface Customer {
  address: {
    state: string;
  }
}
