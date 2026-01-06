
export {};
//1️⃣ Interface vs Class — where people screw up
// Common Abuse #1: Using class aas types only

class Patient {
    // id : number;
    name! : string;
}

function admit( p: Patient ) {}  
// DOn't use class if there is no behaviour or methods

// Use Interfaces 

interface Patient {
    // id : number;
    name : string;
}

// Use class only when behaviour exists

// Common abuse #2: Putting logic in interfaces (impossible)

interface Patient {
    admit() : void;  // OK
}

// But:
/*
interface Patient{
    admit(){
        // Not OK
        console.log("Admitting patient");
    }
}

*/
/*

Rule (non-negotiable)

Data shape → interface

Behavior → class

Both → class implements interface


*/



//2️⃣ Why implements does NOT enforce runtime (this trips everyone)

// This is Critical
interface Patient {
//   id: number;
}
/*
class PatientImpl implements Patient {
  id: number;
}
*/


// At runtime:

// interface Patient -> GONE
class PatientImpl2 {  }


//This WILL NOT work
function isPatient(obj: any): boolean {
  return obj instanceof Patient; // ❌ Patient does not exist
}


//Why?
//Interfaces don’t exist at runtime.

/*
What actually happens

TypeScript checks once, then steps aside.

If bad data comes from:

- API

- JSON

- User input

TypeScript cannot protect you anymore.
If you need runtime validation

You must do it yourself:
 

function isPatient(obj: any): obj is Patient {
  return typeof obj.id === "number";
}



Or use libraries like zod, io-ts.

Brutal truth

TypeScript is a seatbelt, not an airbag.

If you crash at runtime, TS won’t save you.



*/


//3️⃣ Designing CLEAN domain models (this is senior-level)

// This is where juniors fall apart.


//❌ Bad model (primitive soup)

interface Patient {
//   id: number;
  name: string;
  //status: string;
}

//✅ Good model (explicit)

type PatientStatus = "Admitted" | "Discharged";

interface Patient {
//   id: number;
  name: string;
  status: PatientStatus;
}

// Even better (behavior separated)

interface Patient {
  readonly id: number;
  name: string;
  status: PatientStatus;
}

class PatientService {
  admit(p: Patient) {
    p.status = "Admitted";
  }
}















