import { shallowMount } from "@vue/test-utils";
import Movie from "@/components/Movie/Movie.vue";
jest.mock('axios', () => ({
  get: Promise.resolve('value')
}))
// TDD:

describe("Movie Player", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Movie, {
      propsData: {
        videoUrl: {type: String}
      }
    });
  });

  it("renders playable video", async() => {
  });

  it("contains a title underneath the video", () => {});

  it("contains a description underneath the title", () => {});
});
