// https://docs.cypress.io/api/introduction/api.html
describe("test for todo-app", () => {
  it("is App visible", () => {
    cy.visit("/");
    cy.get("#app").should("be.visible");
  });
  it("add new task", () => {
    cy.get("#input").type("Task1").type("{enter}");
    cy.wait(800);
    cy.get("#input").type("Task2").type("{enter}");
    cy.wait(800);
    cy.get("#input").type("Task3").type("{enter}");
    cy.wait(800);
    cy.get("#input").type("deleteTask").type("{enter}");
    cy.wait(800);
  });
  it("delete task", () => {
    cy.get("#task:last-child").find("#deleteTask").click();
    cy.wait(800);
  });
  it("check checkbox value", () => {
    cy.get("#task:nth-child(2)").click();
    cy.wait(800);
  });
  it("check footer menu", () => {
    cy.get("#tab:nth-child(2)").click();
    cy.wait(800);
    cy.get("#tab:last-child").click();
    cy.wait(800);
    cy.get("#tab:first-child").click();
    cy.wait(800);
  });
});
