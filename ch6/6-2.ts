// 예제 1
export function rating(driver: Driver) {
  return driver.moreThanFiveLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer: Customer) {
  const result = [];
  result.push(['name', customer.name]);
  result.push(['location', customer.location]);
  return result;
}

interface Driver {
  moreThanFiveLateDeliveries: number;
}

interface Customer {
  name: string;
  location: string;
}
