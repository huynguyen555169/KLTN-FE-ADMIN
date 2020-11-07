export class CustomerModel {
    customer_id: string;
    customer_fullName: string;
    customer_avatar: string;
    customer_gender: string;
    customer_verify: string;
    customer_birthday: string;
    customer_phone: string;
    customer_pass: string;
    customer_province: string;
    customer_district: string;
    customer_address: string;
    customer_voucher_fk: string;

    constructor(data: any) {
        this.customer_id = data.customer_id;
        this.customer_fullName = data.customer_fullName;
        this.customer_avatar = data.customer_avatar;
        this.customer_gender = data.customer_gender;
        this.customer_verify = data.customer_verify;
        this.customer_birthday = data.customer_birthday;
        this.customer_phone = data.customer_phone;
        this.customer_pass = data.customer_pass;
        this.customer_province = data.customer_province;
        this.customer_district = data.customer_district;
        this.customer_address = data.customer_address;
        this.customer_voucher_fk = data.customer_voucher_fk;
    }
}

