

export class price {

    name: String;
    category: String;
    minSize: number;
    maxSize: number;
    price: number;

    constructor(title: String, category: String, sizeMin: number, sizeMax: number, price: number) {
        this.name = title;
        this.category = category;
        this.minSize = sizeMin;
        this.maxSize = sizeMax;
        this.price = price;
    }
}