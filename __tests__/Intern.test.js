const Intern = require("../lib/Intern");

describe("Intern", () => {
	describe("constructor", () => {
	  it("should create an intern object", () => {
			const intern = new Intern("Vivi", 1738, "vivicowan0@gmail.com", "UTA");
			
			expect(typeof(intern)).toEqual("object");
			expect(intern.name).toEqual(expect.any(String));
			expect(intern.id).toEqual(expect.any(Number));
			expect(intern.email).toEqual(expect.any(String))
			expect(intern.school).toEqual(expect.any(String));
	  });
	});
      
	describe("getSchool", () => {
	  it("should get school information", () => {
		const testSchool = "UTA";
		const intern = new Intern("Vivi", 1738, "vivicowan0@gmail.com", testSchool);
	
		expect(intern.getSchool()).toEqual(testSchool);
	  });
	});
      
	describe("getRole", () => {
		it("should return Intern as role", () => {
			const testRole = "Intern";
			const intern = new Intern("Vivi", 1738, "vivicowan0@gmail.com");

			expect(intern.getRole()).toEqual(testRole);
		});
	});
});