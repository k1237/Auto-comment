// typescriptを使用する場合は別途設定が必要

import { mount } from '@vue/test-utils'
import { createLocalVue,shallowMount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import cf_Component from '../components/com-footer.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('Footer.vue', () => {
  const wrapper = shallowMount(cf_Component)

  test('コンポーネントが存在するか', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
  test('Propsテスト', function () {
    const wrapper = mount(cf_Component, {
      propsData: {
        item: ['test1', 'test2','test3'],
      },
    })
    expect(wrapper.vm.$props.item).toEqual(['test1', 'test2','test3'])
  })
 
  test('クリック時にイベントが実行される', () => {

    wrapper.find('#bp').trigger('click');


    // const mock = jest.fn()

    // wrapper.setMethods({fastClick:mock,})

    // wrapper.find('#bp').trigger('click');

    // expect(mock).toHaveBeenCalled()
  })
})
