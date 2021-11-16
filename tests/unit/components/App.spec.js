import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "@/App.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("test for Footer", () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      checkLocalStorage: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('call "checkLocalStorage"', () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.find(".content")).toBeTruthy();
  });
});
