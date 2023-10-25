export class Order {
  private data: OrderData;

  constructor(aRecord: IRecord) {
    this.data = aRecord;
  }

  private get quantity() {
    return this.data.quantity;
  }

  private get itemPrice() {
    return this.data.itemPrice;
  }

  private get basePrice() {
    return this.quantity * this.itemPrice;
  }

  private get discount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  private get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }

  private get price() {
    return this.basePrice - this.discount + this.shipping;
  }
}

interface OrderData {
  quantity: number;
  itemPrice: number;
}

interface IRecord {
  quantity: number;
  itemPrice: number;
}
