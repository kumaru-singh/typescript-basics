"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
var staffMem = [
    { id: 1, name: "Dr. Smith", role: Role.Doctor },
    { id: 2, name: "Nurse Joy", role: Role.Nurse },
    { id: 3, name: "Admin John", role: Role.Admin }
];
// console.log("Staff Members:", staffMem);
for (var staff in staffMem) {
    console.log(" ID: ".concat(staffMem[staff].id, " Name: ").concat(staffMem[staff].name, " Role : ").concat(Role[staffMem[staff].role]));
}
