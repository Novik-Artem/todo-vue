import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Tab from "@/components/atoms/Tab.vue";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("test for Tab", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      changeTabStatus: jest.fn(),
      changeTab: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });
  it('call "changeTabStatus"', () => {
    const wrapper = shallowMount(Tab, { store, localVue });
    wrapper.find("input").trigger("click");
    expect(mutations.changeTabStatus).toHaveBeenCalled();
  });
  it('call "changeTab"', () => {
    const wrapper = shallowMount(Tab, { store, localVue });
    wrapper.find("input").trigger("click");
    expect(mutations.changeTab).toHaveBeenCalled();
  });
});
