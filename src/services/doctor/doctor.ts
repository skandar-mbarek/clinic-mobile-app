import axiosInstance from "@/services/config/axios-config";
import {endPoint} from "@/Constants/ws-config";

export const getAllDoctors = async (specialityId: number | null, city: string | null, page: number, size: number) => {
    try {
        const data = await axiosInstance.get(endPoint.DOCTOR,
            {
                params: {
                    specialityId: specialityId,
                    city: city,
                    page: page,
                    size: size,
                }
            })
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const getAllSpecialities = async () => {
    try {
        const data = await axiosInstance.get(endPoint.SPECIALITY)
        return (data.data)
    } catch (e) {
        console.log(e)
    }

}