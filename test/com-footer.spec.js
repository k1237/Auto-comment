// typescriptを使用する場合は別途設定が必要

import { mount } from '@vue/test-utils'
import { createLocalVue,shallowMount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import Footer from '../components/com-footer.vue'

// const localVue = createLocalVue()
// localVue.use(VueCompositionApi)

describe('Footer.vue', () => {
  const wrapper = shallowMount(Footer)

  test('コンポーネントが存在するか', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
  test('Propsテスト', function () {
    const wrapper = mount(Footer, {
      propsData: {
        item: ['test1', 'test2','test3'],
      },
    })
    expect(wrapper.vm.$props.item).toEqual(['test1', 'test2','test3'])
  })
 
  //  TypeError: _vm.fastClick is not a function
  //  クリック後にemitされたかを検証したい
  test('クリック時にイベントハンドラが実行される', () => {
    wrapper.find('button').trigger('click');
  })
})
