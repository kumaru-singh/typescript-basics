// Step by step data modeling 

// 1. Define enums and interfaces:

enum PatientStatus { Admitted, Discharged, UnderObservation }

interface Patient {
    id : number;
    name : string;
    age : number;
    status : PatientStatus;
    vitals : [number, number]; // [systolic, diastolic]
}


// 2. Create sample data:
let patients : Patient[] = [
    { id: 1, name: "Alice", age: 30, status: PatientStatus.Admitted, vitals: [120, 80] },
    { id: 2, name: "Bob", age: 45, status: PatientStatus.UnderObservation, vitals: [130, 85] },
    { id: 3, name: "Charlie", age: 50, status: PatientStatus.Discharged, vitals: [110, 70] }
]


// 3. Define a class for staff:

class Nurse {
    constructor ( public name: string){}
    takeVitals ( patient : Patient, vitals: [number, number ] ) :void {
        patient.vitals = vitals;
        console.log(`Nurse ${this.name} took vitals for patient ${patient.name}: ${vitals[0]}/${vitals[1]}`);
    }
}

let newVitals : [number, number ]= [125, 82];
let nurse1 = new Nurse("Eve");
nurse1.takeVitals(patients[0], newVitals); // Update vitals for Alice
