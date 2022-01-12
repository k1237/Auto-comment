//自分でテストする項目を決め(最低限)CircleCIでデプロイ時にテストするようにする
//値の代入等はTypescriptでカバーできない箇所をテストする
//フロントバックそれぞれ別のテストが存在
//空白時エラーをはくようにできないのか

import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Footer from '../components/com-footer.vue'

describe('Footer.vue', () => {
  const wrapper = shallowMount(Footer)

  test('コンポーネントが存在するか', () => {
    expect(wrapper.exists()).toBe(true)
  })
  
  //他の型が代入できてしまう
  test('Propsテスト', function () {
    const wrapper = mount(Footer, {
      propsData: {
        item: ['1', '2'],
      },
    })
    expect(wrapper.vm.$props.item).toEqual(['1', '2'])
  })

  test('クリック時にイベントハンドラが実行される', async () => {
    await wrapper.find('button').trigger('click')
  })
})
