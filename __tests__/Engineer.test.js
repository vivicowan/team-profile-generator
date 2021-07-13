const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
	describe("constructor", () => {
		it("should set engineer's github username", () => {
			const engineer = new Engineer("Vivi", 1738, "vivicowan0@gmail.com", "vivicowan");

			expect( typeof( engineer )).toEqual("object");
			expect(engineer.name).toEqual(expect.any(String));
			expect(engineer.id).toEqual(expect.any(Number));
			expect(engineer.email).toEqual(expect.any(String))
			expect(engineer.github).toEqual(expect.any(String));
    	});
   });

	describe("getGitHub", () => {
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