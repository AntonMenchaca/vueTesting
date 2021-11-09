import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

jest.mock('axios', () => ({
  get: Promise.resolve('videoURL')
}))

describe('App.vue',() => 
{
    let wrapper;    
beforeEach(() => {
    wrapper = shallowMount(App, {
        propsData: {
            videoURL: '' 
        }
    })
    })
    it('fetches videoURL string async when a movie is clicked', () => {
        wrapper.find()
    })
})