export function printOwing(invoice: Invoice) {
  printBanner();

  let outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function printBanner(): void {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice: Invoice): number {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
}

function recordDueDate(invoice: Invoice): void {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice: Invoice, outstanding: number) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate!.toLocaleDateString()}`);
}

interface Order {
  amount: number;
}

interface Invoice {
  orders: Order[];
  customer: string;
  dueDate?: Date;
}

const invoice: Invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: 'Roy',
};

printOwing(invoice);
