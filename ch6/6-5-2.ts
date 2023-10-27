export default class Book {
  private reservations: Customer[];

  constructor() {
    this.reservations = [];
  }

  addReservation(customer: Customer, isPriority = false) {
    this.reservations.push(customer);
  }

  hasReservation(customer: Customer) {
    return this.reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}

interface Customer {
  id: number;
}
