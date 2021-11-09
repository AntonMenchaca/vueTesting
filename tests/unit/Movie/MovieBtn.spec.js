import { shallowMount } from "@vue/test-utils";
import MovieBtn from "@/components/Movie/MovieBtn"

describe('Movie Buttons',() => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MovieBtn)
    })
    it('Has the proper text when not in the favorites/database: "Remove Favorite"',() => {

    })
    it('Has the proper text when in the favorites/database: "Add Favorite"', () => {
        
    })
})