const Manager = require("../lib/Manager");

describe("Manager", () => {
	describe("constructor", () => {
	  it("should create an manager object", () => {
			const manager = new Manager("Vivi", 1738, "vivicowan0@gmail.com", 6969);
			
			expect(typeof(manager)).toEqual("object");
			expect(manager.name).toEqual(expect.any(String));
			expect(manager.id).toEqual(expect.any(Number));
			expect(manager.email).toEqual(expect.any(String));
			expect(manager.officeNumber).toEqual(expect.any(Number));
	  });
	});
      
	describe("getOffice", () => {
	  it("should get office information", () => {
		const testOfficeNumber = 6969;
		const manager = new Manager("Vivi", 1738, "vivicowan0@gmail.com", testOfficeNumber);

		expect(manager.officeNumber).toEqual(testOfficeNumber);
	  });
	});
      
	describe("getRole", () => {
		it("should return Intern as role", () => {
			const testRole = "Manager";
			const manager = new Manager("Vivi", 1738, "vivicowan0@gmail.com");

			expect(manager.getRole()).toEqual(testRole);
		});
	});
});