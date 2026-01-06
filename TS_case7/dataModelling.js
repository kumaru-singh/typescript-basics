// Step by step data modeling 
// 1. Define enums and interfaces:
var PatientStatus;
(function (PatientStatus) {
    PatientStatus[PatientStatus["Admitted"] = 0] = "Admitted";
    PatientStatus[PatientStatus["Discharged"] = 1] = "Discharged";
    PatientStatus[PatientStatus["UnderObservation"] = 2] = "UnderObservation";
})(PatientStatus || (PatientStatus = {}));
// 2. Create sample data:
var patients = [
    { id: 1, name: "Alice", age: 30, status: PatientStatus.Admitted, vitals: [120, 80] },
    { id: 2, name: "Bob", age: 45, status: PatientStatus.UnderObservation, vitals: [130, 85] },
    { id: 3, name: "Charlie", age: 50, status: PatientStatus.Discharged, vitals: [110, 70] }
];
// 3. Define a class for staff:
var Nurse = /** @class */ (function () {
    function Nurse(name) {
        this.name = name;
    }
    Nurse.prototype.takeVitals = function (patient, vitals) {
        patient.vitals = vitals;
        console.log("Nurse ".concat(this.name, " took vitals for patient ").concat(patient.name, ": ").concat(vitals[0], "/").concat(vitals[1]));
    };
    return Nurse;
}());
var newVitals = [125, 82];
var nurse1 = new Nurse("Eve");
nurse1.takeVitals(patients[0], newVitals); // Update vitals for Alice
