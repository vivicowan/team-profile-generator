const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
	describe("constructor", () => {
		it("should set engineer's github username", () => {
			const testGithutUsername = "vivicowan";
			const engineer = new Engineer( "Vivi", 1738, "vivicowan0@gmail.com", testGithutUsername );

			expect(engineer.githubUsername).toEqual(testGithutUsername);
    	});
   });

	describe("getName", () => {
		it("should get github account using github", () => {
			const testGithutUsername = "vivicowan";
			const engineer = new Engineer( "Vivi", 1738, "vivicowan0@gmail.com", testGithutUsername );

			expect(engineer.githubUsername).toEqual(testGithutUsername);
		});
	});

	describe("getRole", () => {
		it("should return Engineer as role", () => {
			const testRole = "Engineer";
			const employee = new Engineer("Vivi", 1738, "vivicowan0@gmail.com");

			expect(employee.getRole()).toEqual(testRole);
		});
	});

});