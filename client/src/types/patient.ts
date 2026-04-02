import type { Token } from "./token"

export type PatientStatus = "Stable" | "Monitoring" | "Critical" | "Admitted"

export type Patient = {
    id: number
    firstName: string
    lastName: string
    email: string
    dob: string
    status: PatientStatus
    token: Token
}