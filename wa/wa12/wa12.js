//1

let employees = [
    {"firstName": "Sam", "department" : "Tech","designation" : "Manager","salary" : 40000,"raiseEligible" : "true"},
    {"firstName": "Mary", "department" : "Finance","designation" : "Trainee","salary" : 18500,"raiseEligible" : "true"},
    {"firstName": "Bill", "department" : "HR","designation" : "Executive","salary" : 21200,"raiseEligible" : "false"}, 
]

console.log("Problem 1: ")
console.log(employees)

//2

let companyInfo = {"company":
    {"companyName" : "Tech Stars", "website" : "www.techstars.site", "employees" : employees}
}

console.log("Problem 2: ")
console.log(companyInfo.company)

//3

employees.push({"firstName": "Anna", "department": "Tech","designation":"Executive","salary":25600,"raiseEligible":"false"})

console.log("Problem 3: ")
console.log(employees)

//4

let total = 0
for(let i = 0; i < 4; i++){
    total+= employees[i].salary
}

console.log("Problem 4:")
console.log(total)

//5

for(let i = 0; i < 4; i++) {
    if (employees[i].raiseEligible === "true"){
         employees[i].salary = employees[i].salary * 1.1;
    } 
 }

console.log("Problem 5: ")
console.log(employees)

//6

for(let i = 0; i < 4; i++) {
    if (employees[i].firstName === "Anna" || employees[i].firstName === "Sam") {
    employees[i].wfh = true
} else{
    employees[i].wfh = false
}
}

console.log("Problem 6: ")
console.log(employees)

