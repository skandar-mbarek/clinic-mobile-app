export interface ILogin {
    phoneNumber: string,
    password: string
}

export interface IRegister {
    firstName: string
    lasName: string
    gender : string
    phoneNumber: string
    password: string
    dateOfBirth: Date | null
    role: string
}

export interface IVerify {
    otp: string
}

export interface IForgot {
    phoneNumber: string
}

export interface IResetPassword {
    phoneNumber: string
    otp: string
    newPassword: string
}

export interface IUser {
    firstName: string
    lastName: string
}

export interface IDoctor {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: Date;
    licenceNumber: string;
    licenceDate: Date;
    speciality: {
        id: number;
        name: string;
        description: string;
        createdAt: Date | null;
        updatedAt: Date | null;
    };
    address: {
        state: string;
        city: string;
        country: string;
        street: string;
        zipCode: number;
        id: number;
    };
    schedule: {
        id: number;
        days: string[];
        timeFrom: string;
        timeTo: string;
        consultationDuration: string;
        createdAt: Date;
        updatedAt: Date;
    };
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ISpecialty {
    id: string;
    name: string;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}