const Employee = require("../lib/Employee");

describe("Employee class", () => {
	describe("constructor", () => {
		it("should create an employee object", () => {
			const employee = new Employee("Vivi", 1738, "vivicowan0@gmail.com");
			
			expect(typeof(employee)).toEqual("object");
			expect(employee.name).toEqual(expect.any(String));
			expect(employee.id).toEqual(expect.any(Number));
			expect(employee.email).toEqual(expect.any(String));
    	});
   });

	describe("getName", () => {
		it("should test employee name", () => {
			const testName = "Vivi";
			const employee = new Employee(testName);

			expect(employee.getName()).toEqual(testName);
		});
	});

	describe("getID", () => {
		it("should test employee ID", () => {
			const testID = 1738;
			const employee = new Employee("Vivi", testID);

			expect(employee.getID()).toEqual(testID);
		});
	});

	describe("getEmail", () => {
		it("should test employee email", () => {
			const testEmail = 'vivicowan0@gmail.com';
			const employee = new Employee("Vivi", 1738, testEmail);
			
			expect(employee.getEmail()).toEqual(testEmail);
		});
	});

	describe("getRole", () => {
		it("should return Employee as role", () => {
			const testRole = "Employee";
			const employee = new Employee("Vivi", 1738, "vivicowan0@gmail.com");

			expect(employee.getRole()).toEqual(testRole);
		});
	});

});