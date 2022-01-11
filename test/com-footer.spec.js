//自分でテストする項目を決め(最低限)CircleCIでデプロイ時にテストするようにする
//値の代入等はTypescriptでカバーできない箇所をテストする
//フロントバックそれぞれ別のテストが存在

import { mount } from '@vue/test-utils'
import footer from '@/components/com-footer.vue'

describe('com-footer.vue', () => {
 

  test('コンポーネントが存在するか', () => {
    const wrapper = mount(footer);
    expect(wrapper.exists()).toBe(true)
  })

  test('クリックイベントが動作しているか', () => {
    const wrapper = mount(footer);
    wrapper.find('button').trigger('click');
  })

})
