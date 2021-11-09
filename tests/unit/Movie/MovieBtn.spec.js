import { shallowMount } from "@vue/test-utils";
import MovieBtn from "@/components/Movie/MovieBtn"

describe('Movie Buttons',() => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MovieBtn)
    })
    it('Has the proper text when not in the favorites/database: "Remove Favorite"', async() => {
        await wrapper.setProps({isFavorited: true})
        let renderedButton = await wrapper.find('button').text()
        expect(renderedButton).toContain('Remove Favorite')
    })
    it('Has the proper text when in the favorites/database: "Add Favorite"', async() => {
        let renderedButton = await wrapper.find('button').text()
        expect(renderedButton).toContain('Add Favorite')
    })
    it('Clicking The button should cause the buttons text to change', async() => {
        let renderedButton = await wrapper.find('button')
        if (renderedButton.text() === "Add Favorite") {
            await renderedButton.trigger('click')
            expect(renderedButton.text()).toContain('Remove Favorite')
        } else {
            await renderedButton.trigger('click')
            expect(renderedButton.text()).toContain('Add Favorite')
        }
      
    })
})