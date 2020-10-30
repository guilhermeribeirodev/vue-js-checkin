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

        const input = wrapper.find('input')

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

    it('should disable button when the input is empty', () => {
        expect(wrapper.find('button').element.disabled).toBe(true)
        expect(wrapper.vm.isDisabled).toBe(true)
    })

    it('should enable button when the input is NOT empty', () => {
        const input = wrapper.find('.userfullname')
        input.setValue('Bob')

        //console.log(wrapper.find('button').element.disabled)
        expect(wrapper.vm.isDisabled).toBe(false)
    })

    it('should be over 18 years old', () => {
        const input = wrapper.find('.age')

        //input.element.value = 'Bob'  => alternative way
        // input.trigger('input')

        // input.element.value = 20
        // input.trigger('input')
        console.log(input)

        input.setValue(20)

        wrapper.setData({ age: 20 })

        expect(wrapper.vm.age).toBeGreaterThan(18)
    })


})