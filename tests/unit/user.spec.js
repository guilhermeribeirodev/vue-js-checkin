import User from '@/components/User.vue'
import { mount } from '@vue/test-utils'

describe('user component template', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(User)
    })

    it('should exist', () => {

        expect(wrapper.exists())
    })

    it('should contain header', () => {

        expect(wrapper.find('h1').text()).toBe('Welcome to the pub')
    })

    it('should contain input for user typing his/her name', () => {

        expect(wrapper.find('input').exists()).toBe(true)
    })

    it('should store username', () => {

        const input = wrapper.find('.userfullname')

        //input.element.value = 'Bob'  => alternative way
        input.setValue('Bob')

        expect(wrapper.vm.userfullname).toBe('Bob')

    })

    it('should render the checkin button', () => {
        expect(wrapper.find('button').exists()).toBe(true)
        expect(wrapper.find('button').text()).toMatch('Checkin')
            // or
        expect(wrapper.find('button').text()).toBe('Checkin')

    })

    

    it('should be over 18 years old', () => {
        const input = wrapper.find('.dob')
        input.setValue('12/12/1990')

        expect(wrapper.vm.age).toBeGreaterThan(18)
    })

    describe('enable and disable submit when empty fields', () => {

        it('should disable button when the fullusername input is empty', () => {
            const input = wrapper.find('.userfullname')
            input.setValue('')

            expect(wrapper.find('button').element.disabled).toBe(true)
            expect(wrapper.vm.isDisabled).toBe(true)
        })
    
        it('should enable button when the input is NOT empty', () => {
            const input = wrapper.find('.userfullname')
            input.setValue('Bob')
            const dob = wrapper.find('.dob')
            dob.setValue('10/10/1990')
    
            expect(wrapper.vm.isDisabled).toBe(false)
        })

        it('should disable button when the dob input is empty', () => {
            const userfullname = wrapper.find('.userfullname')
            userfullname.setValue('something')
            const dob = wrapper.find('.dob')
            dob.setValue('')
            
            expect(wrapper.find('button').element.disabled).toBe(true)
            expect(wrapper.vm.isDisabled).toBe(true)
        })

    })

    


})