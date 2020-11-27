export const dataConfig = {
    columns: [
        {
            displayName: 'Customer name', // Dislay name in header
            value: 'order_customer_name', // The value to pouring data into the column
            sort: true, // Option sort header
        },
        {
            displayName: 'Status', // Dislay name in header
            value: 'order_status',
            sort: true, // Option sort header
            type: 'chip1'
        },
        {
            displayName: 'Order number', // Dislay name in header
            value: 'order_id', // The value to pouring data into the column
            sort: false, // Option sort header
        },
        {
            displayName: 'Order term', // Dislay name in header
            value: 'createdAt', // The value to pouring data into the column
            sort: false, // Option sort header
        },
        {
            displayName: 'Phone', // Dislay name in header
            value: 'order_customer_phone', // The value to pouring data into the column
            sort: true, // Option sort header
        }
    ],
    action: {
        // If not displayed, do not enter in config
        name: ' ', // Display name for action
        edit: ' ',
        view: ' '
    }
};
export const data = [
    {
        name: 'Lý Mạc Sầu',
        status: 'pending',
        code: 'ACB121',
        date: '10/07/2000',
        product: 'Áo thun cao cấp',
        price: 200000,
    }
]
export const dataStatus = [
    { value: true, viewValue: 'Confirmed' },
    { value: false, viewValue: 'Pending' },
];
