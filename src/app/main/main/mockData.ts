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