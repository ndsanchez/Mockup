export interface SingleTicketIf {
    handleDelete: any,
    handleEdit: any,
    dataTicket: any
}
export interface TicketIf {
    handleDelete: any,
    handleEdit: any,
    dataTicket: any
}

export interface DropDownIf {
    handleDelete: any;
    handleEdit: any;
    id: string;
    icon: any;
    pencil: any;
    trash: any;
}

export interface SwitchButtonIf {
    id: string,
    check: boolean,
    handleSwitch: any,
    icon: any
}

export interface SideBarIf {
    switchState: any, 
    handleSwitch: any
}

export interface OptionIf {
    handleMenu: any,
    pat: string,
    Title: string,
    Icon: any,
    Active: boolean
}

export interface ModalIf {
    handleClose: any,
    refModal: any,
    submitState: string,
    dataForm: any,
    formChange: any,
    handleSubmit: any
}

export interface MenuIf {
    handleMenu: any,
    menuActive: any
}

export interface Istate {
    data: {[key: string]: any},
    dataForm: {[key: string]:any
    },
    menuActive:{
        home: boolean,
        messages: boolean,
        wishlist: boolean,
        settings: boolean,
        account: boolean
    },
    switch:{
        sale: boolean,
        calendar: boolean,
        heart: boolean
    },
    submitState: string
}

export interface HomeIf {
    handleClose: any,
    refModal: any,
    submitState: string,
    handleFloating: any,
    handleDelete: any, 
    handleEdit: any,
    dataForm: any,
    formChange: any,
    handleSubmit: any,
    dataTicket: any,
    switchState: any,
    handleSwitch: any,
    handleMenu: any,
    menuActive: any
}

export interface OtherIf {
    switchState: any,
    handleSwitch: any,
    handleMenu: any,
    menuActive: any
}

