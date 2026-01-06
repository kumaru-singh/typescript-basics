export {};

// Arrays in Typescript

let patientIds : number[] = [101, 102, 103];
let patientNames : Array<string> = ["Alice", "Bob", "Charlie"];

console.log("Patient IDs:", patientIds);
console.log("Patient Names:", patientNames);  // Not need a loop to print array

// reason - since, it has a built in stringify method, and runtime introspection support


// Tuples in Typescript

let vitalSigns : [number, number] = [120, 80]; // [systolic, diastolic]
let patientInfo: [string, number] = ["David", 45]; // [name, age]

console.log("Vital Signs (Systolic/Diastolic):", vitalSigns);
console.log("Patient Info (Name/Age):", patientInfo); // Not need a loop to print tuple

// Enums in Typescript

enum patientStatus { Admitted, Discharged, UnderObservation };
let status : patientStatus = patientStatus.Admitted;
console.log("Patient Status:", patientStatus[2]); // Not need a loop to print enum

// reason - since, it has a built in stringify method, and runtime introspection support    



// Interfaces in Typescript

interface Patient {
    id : number;
    name : string;
    age : number;
    status : patientStatus;
    vitals : [number, number]; // [systolic, diastolic]
}

// Classes in Typescript

// class Doctor {
//     constructor ( public name : string, public speciality : string){}
//     prescribe(medication : string) void {
//         console.log(`Dr. ${this.name} prescribes ${medication}`);
//     }
// }





