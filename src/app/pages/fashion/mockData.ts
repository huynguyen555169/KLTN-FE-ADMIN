import { FashionModel } from './fashion.model';

export const data: FashionModel[] = [
    {
        product_id: 1,
        product_images: [],
        product_name: 'string',
        product_qty: 3,
        product_type_fk: 'string',
        product_size_fk: 4,
        product_unit_price: 100000,
        product_paid_price: 'string',
        product_discount: 'string',
        product_description: 'string'
    },
    {
        product_id: 2,
        product_images: [],
        product_name: 'string',
        product_qty: 3,
        product_type_fk: 'string',
        product_size_fk: 4,
        product_unit_price: 100000,
        product_paid_price: 'string',
        product_discount: 'string',
        product_description: 'string'
    }
];
export const typeData = [

    { type: '1', viewType: 'Shose' },
    { type: '2', viewType: 'Fashion' },
    { type: '3', viewType: 'Watch' },

]
export const sizeData = [

    { size: '27', viewSize: '27' },
    { size: '28', viewSize: '28' },
    { size: '29', viewSize: '39' },


]
