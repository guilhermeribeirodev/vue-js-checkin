import User from '@/components/User.vue'
import { mount } from '@vue/test-utils'
describe('user component template', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(User)
    })

    it('should exists', () => {
        
        expect(wrapper.exists())
    })

    it('should contain header', () => {
        
        expect(wrapper.find('h1').text()).toBe('Welcome to the pub')
    })

    it('should contain input for user typing his/her name', () => {
        
        expect(wrapper.find('input').exists())
    })

    it('should store username', () => {
        const input = wrapper.find('input')
        input.element.value = 'Bob'
        input.trigger('input')

        expect(wrapper.vm.userfullname).toBe('Bob')

    })
})