import { MenuTwoDataModel } from 'src/app/common-module/menu-package/menu-two/menu-two.component'

export const data: MenuTwoDataModel = {
    menuItems: [{ // Các option trong menu của user
        icon: 'string', // class of material icon,
        name: 'string', // Tên option
    },],
    userInfo: {
        avatar: 'string',// Image url,
        fullName: 'string',
        email: 'string'
    }
}

export const position = 'after'  // position of menu dropdown is value of: above, below, before, after
//
export const dataNav = {
    backgroundUserImage: '',
    userInfo: {
        avatar: 'https://images.pexels.com/photos/3657419/pexels-photo-3657419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // avatar image url
        fullName: 'Nguyễn Nhàn', // tên user
        email: 'nhancute@gmail.com',
    },
    urls: [{
        id: 'string',
        name: 'Categories', // tên hiển thị trên sidebar
        url: '', // url để navigate
        icon: 'book', // icon hiển thị (material icon)
        children: [{
            id: '1',
            name: 'Fashion', // tên hiển thị trên sidebar
            url: 'fashion', // url để navigate
            icon: 'book', // icon hiển thị (material icon)
        }]
    }, {
        id: 'string',
        name: 'Customer', // tên hiển thị trên sidebar
        url: 'customer', // url để navigate
        icon: 'book', // icon hiển thị (material icon)

    }, {
        id: 'string',
        name: 'Sales', // tên hiển thị trên sidebar
        url: 'customer', // url để navigate
        icon: 'book', // icon hiển thị (material icon)

    }],
    footActions: [{
        id: 'string',
        name: 'Logout', // tên hiển thị trên sidebar
        url: '', // url để navigate
        icon: 'book', // icon hiển thị (material icon)
        children: [{
            id: 'string',
            name: 'string', // tên hiển thị trên sidebar
            url: '', // url để navigate
            icon: 'book', // icon hiển thị (material icon)
        }]
    }]
}