import UserSignInForm from '@/components/UserSignInForm.vue'
import { mount } from '@vue/test-utils'

describe('user checkin component template', () => {

    let wrapper, fullName, dob, button, tablecode;

    beforeEach(() => {
        wrapper = mount(UserSignInForm)
        fullName = wrapper.find('.full-name')
        dob = wrapper.find('.dob')
        button = wrapper.find('button')
        tablecode = wrapper.find('.table-code')
    })

    describe('userfullname input', () => {

        it('should contain input for user typing his/her name', () => {
            expect(fullName.exists()).toBe(true)
        })
    
        it('should store user full name', () => {

            //userfullname.element.value = 'Bob'  => alternative way
            fullName.setValue('Bob')
            expect(wrapper.vm.fullName).toBe('Bob')
        })

        
        it('should render the checkin button', () => {
            expect(button.exists()).toBe(true)
            expect(button.text()).toMatch('Checkin')
                // or
            expect(button.text()).toBe('Checkin')
    
        })

        describe('userfullname input validation', () => {

            it('should throw error if empty', () => {
                expect(wrapper.vm.validate).toThrowError()
            })

            it('should NOT throw error if NOT empty', () => {
                fullName.setValue('Some value')
                expect(wrapper.vm.validate).not.toThrowError()
            })

            it('should store error when validation error occurs', () => {
                expect(wrapper.vm.validate).toThrowError()
                expect(wrapper.vm.errors.length).toBe(1)
            })
            
        })
    })

    describe('dob input', () => {

        it('should store dob', () => {
            dob.setValue('12/12/1990')
            expect(wrapper.vm.dob).toBe('12/12/1990')
        })

        describe('dob validations', () => {
            it('should be over 18 years old', () => {
                dob.setValue('12/12/1990')
                expect(wrapper.vm.ageCheck).toBe(true)
            })
    
            it('should be false if less than 18 years old', () => {
                dob.setValue('12/12/2008')
                expect(wrapper.vm.ageCheck).toBe(false)
            })
        })
 
    })

    describe('enable and disable submit when empty fields', () => {

        it('should disable button when the userfullname input is empty', () => {
            
            fullName.setValue('')

            expect(button.element.disabled).toBe(true)
            expect(wrapper.vm.isDisabled).toBe(true)
        })
    
        it('should enable button when the input is NOT empty', () => {
            
            fullName.setValue('Bob')
            dob.setValue('10/10/1990')
    
            expect(wrapper.vm.isDisabled).toBe(false)
        })

        it('should disable button when the dob input is empty', () => {
            
            fullName.setValue('something')
            dob.setValue('')
            
            expect(button.element.disabled).toBe(true)
            expect(wrapper.vm.isDisabled).toBe(true)
        })

    })

    describe('table code input', () => {
        it('should store table code', () => {
            tablecode.setValue('21')
            expect(wrapper.vm.tableCode).toBe('21')
        })
    })


})