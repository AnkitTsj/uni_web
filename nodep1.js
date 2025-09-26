const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let employees = [];

function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");
  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Enter Employee ID: ", id => {
        rl.question("Enter Employee Name: ", name => {
          employees.push({ id, name });
          console.log("Employee added.");
          showMenu();
        });
      });
      break;
    case "2":
      if (employees.length === 0) {
        console.log("No employees found.");
      } else {
        console.log("\nEmployee List:");
        employees.forEach(e => console.log(`ID: ${e.id}, Name: ${e.name}`));
      }
      showMenu();
      break;
    case "3":
      rl.question("Enter Employee ID to remove: ", id => {
        const index = employees.findIndex(e => e.id === id);
        if (index !== -1) {
          employees.splice(index, 1);
          console.log("Employee removed.");
        } else {
          console.log("Employee not found.");
        }
        showMenu();
      });
      break;
    case "4":
      rl.close();
      break;
    default:
      console.log("Invalid option.");
      showMenu();
  }
}

showMenu();
