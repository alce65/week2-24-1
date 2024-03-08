export class Item {
  #description;
  #price;
  #amount;

  constructor(description, price, amount) {
    this.#description = description;
    this.#price = price;
    this.#amount = amount;
  }

  getItemValue() {
    return this.#price * this.#amount;
  }
}

export class Enterprise {
  #name;
  #address;
  #phone;
  #nif;

  constructor(name, address, phone, nif) {
    this.#name = name;
    this.#address = address;
    this.#phone = phone;
    this.#nif = nif;
  }

  get card() {
    return `
    ${this.#name}
    ${this.#address}
    `;
  }
}

class Invoice {
  static brand = new Enterprise(
    'Boracay Ediciones',
    'c/ Pez',
    '123456789',
    'X-12345678'
  );

  #client;
  #items;
  #total;
  #ivaType;
  #paymentForm;

  constructor(client, ivaType = 4, paymentForm = 'VISA') {
    this.#client = client;
    this.#items = [];
    this.#ivaType = ivaType;
    this.#paymentForm = paymentForm;
  }

  addItem(item) {
    this.#items.push(item);
    this.#total = this.#calculaImporte();
  }

  getClient() {
    return this.#client.card;
  }

  #calculaImporte() {
    return this.#items
      .map((item) => item.getItemValue())
      .reduce((a, b) => a + b);
  }

  muestraImporte() {
    const iva = (this.#total * this.#ivaType) / 100;

    console.log(`

    ${Invoice.brand.card}

    -----------------------

    ${this.getClient()}

    total: ${this.#total} €
    IVA: ${iva.toFixed(2)} €
    total + IVA: ${(this.#total + iva).toFixed(2)} €
    `);
  }
}

export const invoice = new Invoice(
  new Enterprise('Librería Boracay', 'c/ Rana', '123566797', 'X-12345687')
);

invoice.addItem(new Item('Libro 1', 12, 10));
invoice.addItem(new Item('Libro 2', 15, 5));
invoice.addItem(new Item('Libro 3', 20, 8));

invoice.muestraImporte();
