import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import DeleteTask from "@/components/atoms/DeleteTask.vue";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for DeleteTask", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      deleteTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "deleteTask"', () => {
    const wrapper = shallowMount(DeleteTask, { store, localVue });
    wrapper.find(".cross").trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
});
