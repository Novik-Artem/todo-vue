import vuex from "@/store/modules/tasks.js";
import { v4 as uuidv4 } from "uuid";
export default {
  state: {
    tasks: [
      {
        id: uuidv4(),
        text: "taskText",
        isChecked: false,
      },
      {
        id: uuidv4(),
        text: "taskText",
        isChecked: true,
      },
      {
        id: uuidv4(),
        text: "taskText",
        isChecked: false,
      },
    ],
    tabs: [
      {
        id: uuidv4(),
        text: "All",
        isChosen: true,
      },
      {
        id: uuidv4(),
        text: "Active",
        isChosen: false,
      },
      {
        id: uuidv4(),
        text: "Completed",
        isChosen: false,
      },
    ],
    tabStatus: "All",
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
