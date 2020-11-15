
export const dataConfig = {
  columns: [
    {
      displayName: 'User', // Dislay name in header
      value: 'employee_userName', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Name', // Dislay name in header
      value: 'employee_fullName', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Phone', // Dislay name in header
      value: 'employee_phone', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Gender', // Dislay name in header
      value: 'employee_gender', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Role', // Dislay name in header
      value: 'employee_role', // The value to pouring data into the column
      sort: false, // Option sort header
    },
    {
      displayName: 'Status', // Dislay name in header
      value: 'employee_status', // The value to pouring data into the column
      sort: false, // Option sort header,
      type: 'chip',
    },
  ],
  action: {
    // If not displayed, do not enter in config
    name: ' ', // Display name for action
    edit: ' ',
  },
};
// export const data = [
//   {
//     employee_userName: 'A123',
//     employee_fullName: 'Hydrogen',
//     email: 'huynguyen1998@gmail.com',
//     phone: 'H',
//     roleId: 'role1',
//     isDelete: false,
//   },
//   {
//     userId: 'A1234',
//     userName: 'Hydrogen',
//     email: 'huynguyen1998@gmail.com',
//     phone: 'H',
//     roleId: 'role1',
//     isDelete: false,
//   },
//   {
//     userId: 'A12345',
//     userName: 'Hydrogen',
//     email: 'huynguyen1998@gmail.com',
//     phone: 'H',
//     roleId: 'role1',
//     isDelete: false,
//   },
//   {
//     userId: 'A123456',
//     userName: 'Hydrogen',
//     email: 'huynguyen1998@gmail.com',
//     phone: 'H',
//     roleId: 'role1',
//     isDelete: false,
//   },
//   {
//     userId: 'A1234567',
//     userName: 'Hydrogen',
//     email: 'huynguyen1998@gmail.com',
//     phone: 'H',
//     roleId: 'role3',
//     isDelete: true,
//   },
// ];

export const dataRole = [
  { value: 'role1', viewValue: '社員' },
  { value: 'role2', viewValue: '専門家' },
  { value: 'role3', viewValue: '管理員' },
];
