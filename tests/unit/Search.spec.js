import { mount } from "@vue/test-utils";
import Search from "@/components/Search.vue";

describe("Search.vue", () => {
  let wrapper;
  let button;
  beforeEach(() => {
    wrapper = mount(Search, {});
    button = wrapper.find("button");
  });

  it("initial render of button", () => {
    expect(button.text()).toContain("Show Favorites");
  });
});
