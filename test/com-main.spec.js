import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import commain from '../components/com-main.vue'

describe('Footer.vue', () => {
  const wrapper = shallowMount(commain)

  test('コンポーネントが存在するか', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('Propsテスト', function () {
    const wrapper = mount(commain, {
      propsData: {
        comment: {item:'test'},
      },
    })
    expect(wrapper.vm.$props.comment).toEqual({item:'test'})
  })
})
