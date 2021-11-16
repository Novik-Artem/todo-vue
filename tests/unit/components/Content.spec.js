import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Content from "@/components/organisms/Content.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("test for Content", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      createTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "createTask"', () => {
    const wrapper = shallowMount(Content, { store, localVue });
    wrapper.find("form").trigger("submit.prevent");
    expect(mutations.createTask).toHaveBeenCalled();
  });
});
