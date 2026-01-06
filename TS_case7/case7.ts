 export {}
 enum Role { Doctor, Nurse, Admin }

 interface Staff {
        id: number;
        name: string;
        role: Role;
 }

 let staffMem : Staff[] = [
    { id: 1, name: "Dr. Smith", role: Role.Doctor },
    { id: 2, name: "Nurse Joy", role: Role.Nurse },
    { id: 3, name: "Admin John", role: Role.Admin }
 ]


// console.log("Staff Members:", staffMem);
for ( let staff in staffMem ){
    console.log(` ID: ${staffMem[staff].id} Name: ${staffMem[staff].name} Role : ${Role[staffMem[staff].role]}`);
    
}

for (const staff of staffMem) {
  console.log(
    `ID: ${staff.id} Name: ${staff.name} Role: ${Role[staff.role]}`
  );
}



/*
staffMem[staff].role is a number (0, 1, 2).

 ----> Role[0] → "Doctor"

 ----> Role[1] → "Nurse"

 ----> Role[2] → "Admin"

✅ This is the reverse mapping feature of TypeScript enums: numbers map back to string names.



*/