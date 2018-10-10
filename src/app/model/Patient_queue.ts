import { Patient } from "./Patient"; 

export interface Patient_queue{
    id:number, 
    clurk_id: number, 
    physician_id: number, 
    patient_id: number,
    patient: Patient,  
    is_served: boolean, 
    queue_number: number, 
    humanWaitingTime: string,
}