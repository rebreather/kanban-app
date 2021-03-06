/* eslint-disable */
import {mount} from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue'

describe('KbnButton', () => {
    describe('프로퍼티', () => {
        describe('type', () => {
            describe('기본값', () => {
                it('kbn-Button 클래스를 갖는 button 요소로 구성됨', () => {
                    const button = mount(KbnButton)
                    expect(button.is('button')).to.equal(true)
                    expect(button.classes()).to.include('kbn-button')
                })
            })

            describe('button', () => {
                it('kbn-button 클래스를 갖는 button 요소로 구성됨', () => {
                    const button = mount(KbnButton, {
                        propsData: {
                            type: 'button'
                        }
                    })
                    expect(button.is('button')).to.equal(true)
                    expect(button.classes()).to.include('kbn-button')
                })
            })

            describe('text', () => {
                it('kbn-button-text 클래스를 갖는 button 요소로 구성됨', () => {
                    const button = mount(KbnButton, {
                        propsData: {
                            type: 'text'
                        }
                    })
                    expect(button.is('button')).to.equal(true)
                    expect(button.classes()).to.include('kbn-button-text')
                })
            })
        })

        describe('disabled', () => {
            describe('기본값', () => {
                it('disabled 속성이 부여되지 않음', () => {
                    const button = mount(KbnButton)
                    expect(button.attributes().disabled).to.be.an('undefined')
                })
            })

            describe('true', () => {
                it('disabled 속성이 부여됨', () => {
                    const button = mount(KbnButton, {
                        propsData: {
                            disabled: true
                        }
                    })
                    expect(button.attributes().disabled).to.equal('disabled')
                })
            })

            describe('false', () => {
                it('disabled 속성이 부여되지 않음', () => {
                    const button = mount(KbnButton)
                    expect(button.attributes().disabled).to.be.an('undefined')
                })
            })
        })
    })

    describe('이벤트', () => {
        describe('click', () => {
            it('일어나지 않음', () => {
                const button = mount(KbnButton)
                button.trigger('click')
                expect(button.emitted().click.length).to.equal(1)
            })
        })
    })

    describe('슬롯', () => {
        describe('콘텐츠 있음', () => {
            it('콘텐츠가 삽입됨', () => {
                const button = mount(KbnButton, {
                    slots: {
                        default: '<p>hello</p>'
                    }
                })
                expect(button.text()).to.equal('hello')
            })
        })

        describe('콘텐츠 없음', () => {
            it('콘텐츠가 삽입되지 않음', () => {
                const button = mount(KbnButton)
                expect(button.text()).to.equal('')
            })
        })
    })
})

/*
Mocha에서 기본 설정으로 사용되는 BDD 스타일로 코드가 어떻게 동작해야 하는지 규정한다.
describe()는 테스트 유형을 구분하고 it()에 개별 테스트 대상의 동작을 정의한 다음,
expect()에서 기대하는 동작 결과를 정의한다.
*/