import { FashionModel } from './fashion.model';

export const data: FashionModel[] = [
    {
        product_id: 1,
        product_images: ['https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
        product_name: 'string',
        product_qty: 3,
        product_type_fk: 'shose',
        product_size_fk: '27',
        product_unit_price: 100000,
        product_paid_price: 'string',
        product_discount: 'string',
        product_description: 'string',
        product_status: true
    },
    {
        product_id: 2,
        product_images: [],
        product_name: 'string',
        product_qty: 3,
        product_type_fk: 'watch',
        product_size_fk: '27',
        product_unit_price: 100000,
        product_paid_price: 'string',
        product_discount: 'string',
        product_description: 'string',
        product_status: false
    }
];
export const typeData = [

    { type: 'shose', viewType: 'shose' },
    { type: 'fashion', viewType: 'fashion' },
    { type: 'watch', viewType: 'watch' },

]
export const sizeData = [

    { size: '27', viewSize: '27' },
    { size: '28', viewSize: '28' },
    { size: '29', viewSize: '39' },


]
