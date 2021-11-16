import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TasksList from "@/components/organisms/TasksList.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("test for TasksList", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getFilteredTasks: () => [],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('call "getFilteredTasks"', () => {
    const wrapper = shallowMount(TasksList, { store, localVue });
    expect(wrapper.find("Task")).toBeTruthy();
  });
});
