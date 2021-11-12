import { shallowMount } from "@vue/test-utils";
import MovieBtn from "@/components/Movie/MovieBtn"

describe('Movie Buttons',() => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MovieBtn,{
            propsData: {
                isFavorited: true,
                movie: {title: 'example', overview: 'test example'}
            }
        })
    })
    it('Has the proper text when not in the favorites/database: "Remove Favorite"', async() => {
        await wrapper.setProps({isFavorited: true})
        let renderedButton = await wrapper.find('button').text()
        expect(renderedButton).toContain('Remove Favorite')
    })
    it('Has the proper text when in the favorites/database: "Add Favorite"', async() => {
        wrapper = shallowMount(MovieBtn,{
            propsData: {
                isFavorited: false,
                movie: {title: 'example', overview: 'test example'}
            }
        })
        let renderedButton = await wrapper.find('button').text()
        expect(renderedButton).toContain('Add Favorite')
    })
    it('Clicking The button should cause the buttons text to change', async() => {
        let renderedButton = await wrapper.find('button')
            await renderedButton.trigger('click')
            expect(renderedButton.text()).toContain('Remove Favorite')
    })
  
})