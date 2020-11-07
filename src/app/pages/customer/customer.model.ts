export class CustomerModel {
    customer_id: string;
    customer_fullname: string;
    customer_avatar: string;
    customer_gender: string;
    customer_birthday: string;
    customer_phone: string;
    customer_status: boolean;

    constructor(data: any) {
        this.customer_id = data.customer_id;
        this.customer_fullname = data.customer_fullName;
        this.customer_avatar = data.customer_avatar;
        this.customer_gender = data.customer_gender;
        this.customer_birthday = data.customer_birthday;
        this.customer_phone = data.customer_phone;
        this.customer_status = data.customer_status

    }
}