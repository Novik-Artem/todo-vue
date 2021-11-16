import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Task from "@/components/molecules/Task.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("test for Task", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      changeTaskStatus: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "changeTaskStatus"', () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find("input").trigger("click");
    expect(mutations.changeTaskStatus).toHaveBeenCalled();
  });
});
