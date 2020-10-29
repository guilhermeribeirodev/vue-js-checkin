import User from '@/components/User.vue'
import { mount } from '@vue/test-utils'
describe('user component template', () => {

    it('should exists', () => {
        const component = mount(User)
        expect(component.exists())
    })
})