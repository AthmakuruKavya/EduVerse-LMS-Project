import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
    const {res} = await axiosInstance.post("/auth/register",{
        ...formData,
        role : "user"
    })

    return res;
}

export async function loginService(formData) {
    const {data} = await axiosInstance.post("/auth/login", formData)
    return data;
}

export async function checkAuth(formData) {
    const {data} = await axiosInstance.get("/auth/checkauth")
    return data;
}