import { getApiUrl } from "@/utils/getServer"

const API_URL = getApiUrl()

export const getPatients = async () => {
    const response = await fetch(`${API_URL}/patients/`)
    if (!response.ok) {
        throw new Error("Failed to fetch patients")
    }
    return response.json()
}

export const getPatientByToken = async (token: string) => {
    const response = await fetch(`${API_URL}/patients/${token}/qr`)
    if (!response.ok) {
        throw new Error("Failed to fetch patient by token")
    }
    return response.json()
}