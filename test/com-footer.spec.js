//typescriptを使用する場合は別途設定が必要
  //警告がでる(Invalid handler for event "click": got undefined)

import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Footer from '../components/com-footer.vue'

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
 

  test('クリック時にイベントハンドラが実行される', async () => {
    const wrapper = mount(Footer)
    await wrapper.find('#bp').trigger('fastClick')
  })
})
