export class UserModel {
  userId: string;
  userName: string;
  email: string;
  password: string;
  phone: string;
  roleId: string;
  isDelete: boolean;

  constructor(data: any) {
    this.userId = data.userId;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.phone = data.phone;
    this.roleId = data.roleId;
    this.isDelete = data.isDelete;
  }
}
