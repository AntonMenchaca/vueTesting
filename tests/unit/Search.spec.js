import { mount } from "@vue/test-utils";
import Search from "@/components/Search.vue";

describe("Search.vue", () => {
  let wrapper;
  let button;
  beforeEach(() => {
    wrapper = mount(Search, {
      propsData: {showFaves: true}
    });
    button = wrapper.find("button").text();
  });

  it("initial render of button", () => {
    expect(button).toContain("Show All Movies");
  });

  it("clicking the button would cause a change in the button text", async() => {
    await wrapper.setProps({
      showFaves: false
    })
    let newRenderedButton = await wrapper.find("button").text()
    expect(newRenderedButton).toContain("Show Favorites");
  });
});
