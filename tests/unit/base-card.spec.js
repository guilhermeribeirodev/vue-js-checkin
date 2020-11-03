import BaseCard from '@/components/BaseCard.vue'
import { mount } from '@vue/test-utils'


describe('base card to apply some style', () => {

    let wrapper, baseCard;

    beforeEach(() => {
        wrapper = mount(BaseCard, {
          slots: {
            default: '<div class="fake-msg"></div>'
          }
        })
        baseCard = wrapper.find(".base-card")
      })

    it('should replace the slots', () => {
        
        expect(baseCard.findAll(".fake-msg").length).toBe(1)
    })
})