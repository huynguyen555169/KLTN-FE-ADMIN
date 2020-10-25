export const data = {
    columns: [
        {
            displayName: 'ID', // Dislay name in header
            value: 'customer_id', // The value to pouring data into the column
            sort: true, // Option sort header
        },
        {
            displayName: 'Name', // Dislay name in header
            value: 'customer_fullname',
            sort: true, // Option sort header
        },
        {
            displayName: 'Phone', // Dislay name in header
            value: 'customer_phone', // The value to pouring data into the column
            sort: false, // Option sort header
        },
        {
            displayName: 'Gender', // Dislay name in header
            value: 'customer_gender', // The value to pouring data into the column
            sort: true, // Option sort header
        },
        {
            displayName: 'Birthday', // Dislay name in header
            value: 'customer_birthday', // The value to pouring data into the column
            sort: true, // Option sort header
        },
        {
            displayName: 'Status', // Dislay name in header
            value: 'customer_status', // The value to pouring data into the column
            sort: true, // Option sort header
            type: 'chip'
        }
    ],
    action: {
        // If not displayed, do not enter in config
        name: ' ', // Display name for action
        edit: ' ',
    },
    data: [
        {
            customer_id: 1,
            customer_fullname: 'Hydrogen',
            customer_phone: 'img.png',
            customer_gender: '10/10/2020',
            customer_birthday: 'H',
        },
        {
            customer_id: 1,
            customer_fullname: 'Hydrogen',
            customer_phone: 'img.png',
            customer_gender: '10/10/2020',
            customer_birthday: 'H',
        },
        {
            customer_id: 1,
            customer_fullname: 'Hydrogen',
            customer_phone: 'img.png',
            customer_gender: '10/10/2020',
            customer_birthday: 'H',
        },
        {
            customer_id: 1,
            customer_fullname: 'Hydrogen',
            customer_phone: 'img.png',
            customer_gender: '10/10/2020',
            customer_birthday: 'H',
        }
    ],
};
