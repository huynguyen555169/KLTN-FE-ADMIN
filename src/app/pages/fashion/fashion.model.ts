export class FashionModel {
    product_id: number;
    product_images: any;
    product_name: string;
    product_qty: number;
    product_type_fk: string;
    product_size_fk: string;
    product_unit_price: number;
    product_paid_price: string;
    product_discount: string;
    product_description: string;
    product_status: boolean;

    constructor(data: any) {
        this.product_id = data.product_id;
        this.product_images = data.product_images;
        this.product_name = data.product_name;
        this.product_qty = data.product_qty;
        this.product_type_fk = data.product_type_fk;
        this.product_size_fk = data.product_size_fk;
        this.product_unit_price = data.product_unit_price;
        this.product_paid_price = data.product_paid_price;
        this.product_discount = data.product_discount;
        this.product_description = data.product_description;
        this.product_status = data.product_status
    }
}