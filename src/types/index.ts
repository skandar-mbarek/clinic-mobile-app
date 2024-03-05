export interface ILogin {
    phoneNumber: string,
    password: string
}

export interface IRegister {
    firstName: string
    lasName: string
    phoneNumber: string
    email: string
    password: string
    dateOfBirth: Date
    cnamCode: string
    state: string
    city: string
    country: string
    street: string
    zipCode: string
    role: string
}
export interface IVerify{
    otp:string
}
export interface IForgot{
    phoneNumber: string
}
export interface IResetPassword {
    phoneNumber : string
    otp : string
    newPassword : string
}