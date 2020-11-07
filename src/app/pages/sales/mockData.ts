export const dataConfig = {
    columns: [
        {
            displayName: 'Customer name', // Dislay name in header
            value: 'name', // The value to pouring data into the column
            sort: true, // Option sort header
        },
        {
            displayName: 'Status', // Dislay name in header
            value: 'status',
            sort: true, // Option sort header
            type: 'chip1'
        },
        {
            displayName: 'Order number', // Dislay name in header
            value: 'code', // The value to pouring data into the column
            sort: false, // Option sort header
        },
        {
            displayName: 'Order term', // Dislay name in header
            value: 'date', // The value to pouring data into the column
            sort: false, // Option sort header
        },
        {
            displayName: 'Product', // Dislay name in header
            value: 'product', // The value to pouring data into the column
            sort: true, // Option sort header
        },
        {
            displayName: 'Price', // Dislay name in header
            value: 'price', // The value to pouring data into the column
            sort: true, // Option sort header
        }
    ],
    action: {
        // If not displayed, do not enter in config
        name: ' ', // Display name for action
        edit: ' ',
    }
};
export const data = [
    {
        name: 1,
        status: 'pending',
        code: '098.224.0061',
        date: 'Nam',
        product: '10/07/2000',
        price: 200000,
    },
    {
        name: 1,
        status: 'cancel',
        code: '098.224.0061',
        date: 'Nam',
        product: '10/07/2000',
        price: 200000,
    },
    {
        name: 1,
        status: 'paymentfail',
        code: '098.224.0061',
        date: 'Nam',
        product: '10/07/2000',
        price: 200000,
    },
    {
        name: 1,
        status: 'paymentsuccess',
        code: '098.224.0061',
        date: 'Nam',
        product: '10/07/2000',
        price: 200000,
    },
    {
        name: 1,
        status: 'shipping',
        code: '098.224.0061',
        date: 'Nam',
        product: '10/07/2000',
        price: 200000,
    },
    {
        name: 1,
        status: 'done',
        code: '098.224.0061',
        date: 'Nam',
        product: '10/07/2000',
        price: 200000,
    },
]
export const dataStatus = [
    { value: true, viewValue: 'Confirmed' },
    { value: false, viewValue: 'Pending' },
];
