
import { shallowMount } from '@vue/test-utils'
import comex from '../components/com-explain.vue'

describe('com-explain.vue', () => {
  const wrapper = shallowMount(comex)

  test('ページが存在するか', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
