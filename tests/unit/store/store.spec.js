import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("tests for store", () => {
  it("getTabStatus", () => {
    expect(store.getters.getTabStatus).toBe("All");
  });
  it("getFilteredTasks", () => {
    store.state.tabStatus = "All";
    expect(store.getters.getFilteredTasks.length).toBe(3);
    store.state.tabStatus = "Active";
    expect(store.getters.getFilteredTasks.length).toBe(2);
    store.state.tabStatus = "Completed";
    expect(store.getters.getFilteredTasks.length).toBe(1);
  });
  it("createTask", () => {
    let newTaskText = "taskText";
    store.commit("createTask", newTaskText);
    expect(store.state.tasks[0].text).toBe("taskText");
    expect(store.state.tasks[0].isChecked).toBe(false);
  });
  it("changeTabStatus", () => {
    store.commit("changeTabStatus", store.state.tabs[0].id);
    expect(store.state.tabs[0].isChosen).toBe(true);
  });
  it("changeTab", () => {
    store.commit("changeTab", "All");
    expect(store.state.tabStatus === "All").toBe(true);
  });
  it("deleteTask", () => {
    let length = store.state.tasks.length;
    store.commit("deleteTask", store.state.tasks[0].id);
    expect(store.state.tasks.length).toBe(length - 1);
  });
  it("checkLocalStorage", () => {
    store.dispatch("checkLocalStorage");
    expect(store.state.tasks.length).toBe(3);
  });
  it("changeTaskStatus", () => {
    let checked = store.state.tasks[0].isChecked;
    store.commit("changeTaskStatus");
    expect(store.state.tasks[0].isChecked === !checked);
  });
  it("getTabs", () => {
    expect(store.getters.getTabs.length).toBe(3);
  });
  it("getAllTasks", () => {
    expect(store.getters.getAllTasks.length === store.state.tasks.length).toBe(
      true
    );
  });
  it("getActiveTasks", () => {
    expect(
      store.getters.getActiveTasks.filter((task) => task.isChecked === false)
        .length
    ).toBe(2);
  });
});
