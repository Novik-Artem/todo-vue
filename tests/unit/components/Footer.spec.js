import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Footer from "@/components/organisms/Footer.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("test for Footer", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getAllTasks: () => [],
      getActiveTasks: () => [],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('call "render counter"', () => {
    const wrapper = shallowMount(Footer, { store, localVue });
    expect(wrapper.find(".counter")).toBeTruthy();
  });
});
