// https://docs.cypress.io/api/introduction/api.html
describe("test for todo-app", () => {
  it("is App visible", () => {
    cy.visit("/");
    cy.get("#app").should("be.visible");
  });
  /*it("add new task", () => {
    cy.get("#form").type("Task1").submit("prevent");
    cy.get("#form").type("Task2").submit("prevent");
    cy.wait(1000);
  });*/
  it("check checkbox value", () => {
    cy.get("#task").find("span").click();
    cy.wait(1000);
  });
  it("delete task", () => {
    cy.get("#deleteTask").find("div").click();
    cy.wait(1000);
  });
  it("add new task", () => {
    cy.get("form").find("input").type("Task2").type("{enter}");
	});
	it("add new task", () => {
    cy.get("form").find("input").type("Task3").type("{enter}");
  });
});
