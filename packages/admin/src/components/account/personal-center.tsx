import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'

import '@omiu/card'
import '@omiu/avatar'
import '@omiu/link'
import '@omiu/tooltip'
import '@omiu/icon/chat-outlined'
import '@omiu/icon/date-range'
import '@omiu/icon/call-outlined'
import '@omiu/icon/mail-outline'
import '@omiu/icon/arrow-forward-ios'
import '@omiu/icon/insert-drive-file-outlined'
import '@omiu/icon/add-box-outlined'
import '@omiu/icon/delete-outlined'
import '@omiu/toast'
import {
  showLoading,
  hideLoading
} from '@omiu/toast'

interface Props { }

const tagName = 'personal-center'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  members = [
    {
      name: '杨阳洋',
      title: '部门主管',
      avatar: 'https://tdesign.gtimg.com/pro-template/personal/avatar5.png',
      email: 'yyy@omi.com',
      tel: '13656785678'
    },
    {
      name: '花朵朵',
      title: '客户经理',
      avatar: 'https://tdesign.gtimg.com/pro-template/personal/avatar1.png',
      email: 'hdd@omi.com',
      tel: '19856785678'
    },
    {
      name: '李晓红',
      title: '客户助理',
      avatar: 'https://tdesign.gtimg.com/pro-template/personal/avatar2.png',
      email: 'lxh@omi.com',
      tel: '18656785678'
    },
    {
      name: '韩梅梅',
      title: '客户助理',
      avatar: 'https://tdesign.gtimg.com/pro-template/personal/avatar3.png',
      email: 'hmm@omi.com',
      tel: '17856785678'
    },
  ]

  myContracts = [
    {
      contractCover: 'https://tdesign.gtimg.com/pro-template/personal/contract3.png',
      content: '腾讯大厦一楼改造施工项目',
      time: '2021-10-10 08:00:00'
    },
    {
      contractCover: 'https://tdesign.gtimg.com/pro-template/personal/contract2.png',
      content: '国家电网信息化建设项目',
      time: '2021-10-10 08:00:00'
    },
    {
      contractCover: 'https://tdesign.gtimg.com/pro-template/personal/contract1.png',
      content: '总部办公用品采购项目',
      time: '2021-10-10 08:00:00'
    },
    {
      contractCover: 'https://tdesign.gtimg.com/pro-template/personal/contract4.png',
      content: '深圳燃气云平台搭建项目二期',
      time: '2021-10-10 08:00:00'
    },
    {
      contractCover: 'https://tdesign.gtimg.com/pro-template/personal/contract2.png',
      content: '智慧园区私有化定制项目',
      time: '2021-10-10 08:00:00'
    },
    {
      contractCover: 'https://tdesign.gtimg.com/pro-template/personal/contract3.png',
      content: '政务云平台定制项目',
      time: '2021-10-10 08:00:00'
    },
  ]

  render() {
    return (
      <div class={tw`h-screen flex bg-gray-200 pb-2`}>
        <div class={tw`flex flex-col`}>
          <div class={tw`h-2/5 w-96 mt-6 ml-6`}>
            <o-card block="1" hoverable="false">
              <div slot="cover">
                <div class={tw`mt-10 mb-2 text-center flex flex-col`}>
                  <o-avatar size="150" src="https://wx.gtimg.com/resource/feuploader/202108/c86557cf91a25035325afd817bffc175_600x600.png" />
                  <span class={tw`my-2 text-2xl font-medium`}>OMIU Admin</span>
                  <span class={tw`my-1 text-xs font-thin`}>市场部 客户经理</span>
                </div>
              </div>
              <div class={tw`py-3 border-t-1`}>
                <div class={tw`my-2 pr-6`}>
                  <o-icon-date-range class={tw`text-lg`}/>
                  <span class={tw`pl-3`}>2021年1月10日入职</span>
                </div>
                <div class={tw`my-3 mr-1 pr-6`}>
                  <o-icon-call-outlined  class={tw`text-lg`}/>
                  <span class={tw`pl-3`}>15812341234</span>
                </div>
                <div class={tw`my-2 mr-1 pr-6`}>
                  <o-icon-mail-outline class={tw`text-lg`}/>
                  <span class={tw`pl-3`}>omiu@tencent.com</span>
                </div>
              </div>
            </o-card>
          </div>
          <div class={tw`h-2/5 w-96 mt-20 mb-12 ml-6`}>
            <o-card block="1" hoverable="false">
              <div class={tw`py-1`}>
                <div class={tw`h-10`}>
                  <span class={tw`float-left text-lg font-semibold`}>团队成员</span>
                  <span class={tw`float-right text-lg font-semibold text-black `}>
                    <o-link type="primary" underline={false} target='_blank' href="https://tencent.github.io/omi">
                      更多
                      <o-icon-arrow-forward-ios/>
                    </o-link>
                  </span>
                </div>
                {this.members.map((item, index) => {
                  return (
                    (index < 4) && <div class={tw`h-20`}>
                      <o-card block="1" >
                        <div class={tw`w-72`}>
                          <div class={tw`float-left py-1`}>
                            <o-avatar size="30" src={item.avatar}></o-avatar>
                            <span class={tw`pl-2 text-sm font-semibold`}>{item.name}</span>
                            <span class={tw`pl-2 text-xs font-thin`}>{item.title}</span>
                          </div>
                          <div class={tw`float-right py-2`}>
                            <span class={tw`pr-5`} >
                            <o-tooltip content={item.email} position="top">
                              <o-icon-mail-outline
                                onclick={(e) => {
                                  showLoading('正在发送email...')
                                  setTimeout(() => {
                                    hideLoading()
                                  }, 1000)
                                }}
                                class={tw`text-base cursor-pointer hover:text-green-500`}
                              />
                            </o-tooltip>
                            </span>
                            <span class={tw`pr-1`}>
                            <o-tooltip content={item.tel} position="top">
                              <o-icon-call-outlined 
                                onclick={(e) => {
                                  showLoading('正在呼叫...')
                                  setTimeout(() => {
                                    hideLoading()
                                  }, 1000)
                                }}
                                class={tw`text-base cursor-pointer hover:text-green-500`}
                              />
                            </o-tooltip>
                            </span>
                          </div>
                        </div>
                        <div slot="cover">
                        </div>
                      </o-card>
                    </div>)
                })}
              </div>
              <div slot="cover">
              </div>
            </o-card>
          </div>

        </div>
        
        <div class={tw`flex-1 pr-10 mt-6 ml-6`}>
          <div class={tw`h-16`}>
            <o-card block="1" hoverable="false">
              <div class={tw`h-10`}>
                <strong class={tw`text-2xl font-medium`}>Hi,</strong>
                <span class={tw`text-base font-thin pl-3`}>Admin~下午好，今天是你加入OMIU的第</span>
                <span class={tw`text-green-500 text-lg font-semibold`}>&nbsp;100&nbsp;</span>
                <span class={tw`text-base font-thin`}>天~</span>
              </div>
              <div slot="cover">
              </div>
            </o-card>
          </div>
          <div class={tw`h-44 mt-3`}>
            <o-card block="1" hoverable="false">
              <div class={tw`h-auto`}>
                <div class={tw`h-10`}>
                  <span class={tw`float-left text-lg font-semibold`}>最近动态</span>
                  <span class={tw`float-right text-lg font-semibold text-black `}>
                    <o-link type="primary" underline={false} target='_blank' href="https://tencent.github.io/omi">
                      更多
                      <o-icon-arrow-forward-ios/>
                    </o-link>
                  </span>
                </div>
                <div class={tw`py-1`}>
                  <div class={tw`my-1`}>
                    <o-icon-insert-drive-file-outlined class={tw`text-lg`}/>
                    <span class={tw`pl-3`}>新建合同【腾讯大楼一楼改造施工项目】</span>
                    <span class={tw`float-right text-sm font-thin text-gray-400`}>1小时前</span>
                  </div>
                  <div class={tw`my-2 mr-1`}>
                    <o-icon-add-box-outlined class={tw`text-lg`}/>
                    <span class={tw`pl-3`}>添加客户【福来】</span>
                    <span class={tw`float-right text-sm font-thin text-gray-400`}>2021-10-10 08:00:00</span>
                  </div>
                  <div class={tw`mt-1 mr-1`}>
                    <o-icon-delete-outlined class={tw`text-lg`}/>
                    <span class={tw`pl-3`}>删除产品【云服务器CVM】</span>
                    <span class={tw`float-right text-sm font-thin text-gray-400`}>2021-10-11 10:00:00</span>
                  </div>
                </div>
              </div>
              <div slot="cover">
              </div>
            </o-card>
          </div>
          <div class={tw`h-40 mt-2`}>
            <o-card block="1" hoverable="false">
              <div class={tw`h-36 py-1`}>
                <div class={tw`h-10`}>
                  <span class={tw`float-left text-lg font-semibold`}>待办事项</span>
                </div>
                <div>
                  <span>清空待办的快乐~</span>
                </div>
              </div>
              <div slot="cover">
              </div>
            </o-card>
          </div>
          <div class={tw`h-2/5 mt-8 mb-10`}>
            <o-card block="1" hoverable="false">
              <div class={tw`py-1`}>
                <div class={tw`h-10`}>
                  <span class={tw`float-left text-lg font-semibold`}>我签订的合同</span>
                  <span class={tw`float-right text-lg font-semibold text-black `}>
                    <o-link type="primary" underline={false} target='_blank' href="https://tencent.github.io/omi">
                      更多
                      <o-icon-arrow-forward-ios/>
                    </o-link>
                  </span>
                </div>
                <div class={tw`h-auto flex flex-wrap content-around justify-around mt-2`}>
                  {this.myContracts.map((item, index) => {
                    return (
                      (index < 6) && <div class={tw`flex h-20 w-96 my-3 `}>
                        <o-card block="1" bordered={false} hoverable="true">
                          <div class={tw`float-left`}>
                            <o-avatar square size="50" backgroundColor="#FFF" src={item.contractCover}/>
                          </div>
                          <div class={tw`ml-20 flex flex-col justify-around py-1`}>
                            <div>
                              <span class={tw`text-base font-semibold tracking-wider truncate`}>{item.content}</span>
                            </div>
                            <div>
                              <span class={tw`text-sm font-thin text-gray-400 truncate`}>{item.time}</span>
                            </div>
                          </div>
                          <div slot="cover">
                          </div>
                        </o-card>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div slot="cover">
              </div>
            </o-card>
          </div>
        </div>
      </div>
    )
  }
}
