
export const dataConfig = {
  columns: [
    {
      displayName: 'UserID', // Dislay name in header
      value: 'userId', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Name', // Dislay name in header
      value: 'userName', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Email', // Dislay name in header
      value: 'email', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Phone', // Dislay name in header
      value: 'phone', // The value to pouring data into the column
      sort: true, // Option sort header
    },
    {
      displayName: 'Role', // Dislay name in header
      value: 'roleId', // The value to pouring data into the column
      sort: false, // Option sort header
    },
    {
      displayName: 'Status', // Dislay name in header
      value: 'isDelete', // The value to pouring data into the column
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
export const data = [
  {
    userId: 'A123',
    userName: 'Hydrogen',
    email: 'huynguyen1998@gmail.com',
    phone: 'H',
    roleId: 'role1',
    isDelete: false,
  },
  {
    userId: 'A1234',
    userName: 'Hydrogen',
    email: 'huynguyen1998@gmail.com',
    phone: 'H',
    roleId: 'role1',
    isDelete: false,
  },
  {
    userId: 'A12345',
    userName: 'Hydrogen',
    email: 'huynguyen1998@gmail.com',
    phone: 'H',
    roleId: 'role1',
    isDelete: false,
  },
  {
    userId: 'A123456',
    userName: 'Hydrogen',
    email: 'huynguyen1998@gmail.com',
    phone: 'H',
    roleId: 'role1',
    isDelete: false,
  },
  {
    userId: 'A1234567',
    userName: 'Hydrogen',
    email: 'huynguyen1998@gmail.com',
    phone: 'H',
    roleId: 'role3',
    isDelete: true,
  },
];

export const dataRole = [
  { value: 'role1', viewValue: '社員' },
  { value: 'role2', viewValue: '専門家' },
  { value: 'role3', viewValue: '管理員' },
];
