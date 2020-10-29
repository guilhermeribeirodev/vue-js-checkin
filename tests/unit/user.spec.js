import User from '@/components/User.vue'
import { mount } from '@vue/test-utils'
describe('user component template', () => {

    let component;

    beforeEach(() => {
        component = mount(User)
    })

    it('should exists', () => {
        
        expect(component.exists())
    })

    it('should contain header', () => {
        
        expect(component.find('h1').text()).toBe('Welcome to the pub')
    })

    it('should contain input for user typing his/her name', () => {
        
        expect(component.find('input').exists())
    })
})