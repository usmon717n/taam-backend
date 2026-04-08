export enum Role{
    USER = 'user',
    ADMIN = 'admin',
    SUPER_ADMIN = 'super_admin'
}

export enum LoginType{
    EMAIL = 'email',
    NUMBER = 'number',
}

export enum OtpType{
    REGISTER = 'register',
    RESET_PASSWORD = 'reset_password',
    NUMBER_CHANGE = 'number-change'
}

export enum OrderStatus{
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled'
}

export enum ItemType{
    FOOD = 'food',
    DRINK = 'drink',
    DESSERT = 'dessert'
}

export enum ReportType{
    RESTAURANT = 'restaurant',
    FOOD = 'food'
}