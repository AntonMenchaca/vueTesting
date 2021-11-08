import { shallowMount } from "@vue/test-utils";
import Movie from "../../src/components/Movie.vue";
// TDD:

describe("Movie Player", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Movie, {});
  });

  it("renders playable video", () => {});

  it("contains a title underneath the video", () => {});

  it("contains a description underneath the title", () => {});
});
