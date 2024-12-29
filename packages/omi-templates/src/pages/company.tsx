import { signal } from 'omi'
import '../components/omiu/button'

const Home = '#'
const About = '#'
const contactLink = '#'
const signUpLink = '#'

const service = signal([
  {
    title: '创意娱乐',
    description:
      'AI驱动的娱乐活动SaaS平台，提供从活动发布、智能报名到自动营收的全方位解决方案，助力活动组织者高效、智能地管理活动全流程。',
    image: 'https://static.www.tencent.com/uploads/2024/06/18/008115f8fce2e232dffcc2701f1ed899.jpg',
    article_link: '#',
  },
  {
    title: '数据加密技术',
    description: '自研数据存储加密技术，凭借卓越的算法设计，为企业及个人数据提供高强度保护，确保数据的隐私性与安全性。',
    image: 'https://static.www.tencent.com/img/banner/%E5%85%A8%E7%90%83%E6%95%B0%E5%AD%97%E6%A6%82%E5%BF%B5.jpg',
    article_link: '#',
  },
  {
    title: '跨境商务服务',
    description:
      '腾讯支付合作服务商，为国内企业出海，境外企业入中提供全方位的市场咨询业务、境内广告业务、审批服务和在线技术支持',
    image: 'https://static.www.tencent.com/uploads/2024/07/09/50bebe3c4f7747b950beefcbdfe95402.jpg!article.cover',
    article_link: '#',
  },
])

const team = signal([
  {
    title: 'Manuel G. Wilmer',
    description: 'CEO & Founder',
    image:
      'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=',
    article_link: '#',
  },
  {
    title: 'Robert E. Whitmore',
    description: 'Web Designer',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww',
    article_link: '#',
  },
  {
    title: 'Robert E. Whitmore',
    description: 'Product Designer',
    image:
      'https://images.unsplash.com/photo-1718209881014-83732ea8376d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww',
    article_link: '#',
  },
  {
    title: 'Johnny M. Smith',
    description: 'IT Consultant',
    image:
      'https://media.istockphoto.com/id/1487345042/photo/smiling-young-businessman-standing-in-the-corridor-of-an-office.webp?b=1&s=170667a&w=0&k=20&c=lS8Vb4BzOsFiDo39wZj4l8AMXe4bL64LjZmRiyTcpdM=',
    article_link: '#',
  },
])

export function Company() {
  return (
    <>
      <main class="text-sm sm:text-base">
        <div class="hero-section w-full h-screen relative flex items-center justify-center">
          <img
            class="w-full h-full object-cover absolute inset-0"
            src="https://tdesign.gtimg.com/site/images/banner-thumb.jpg"
            alt="Banner"
          />
          <div class="text-grey-100 text-3xl font-bold absolute bottom-40 left-10 text-left">
            <h1 className=" sm:text-4xl lg:text-6xl mb-2 ">Omi Tech</h1>
            <h2 className=" text-blue-600 sm:text-5xl lg:text-6xl mb-4">将您的创意带入数字化新时代</h2>
            <h3 className="">
              全方位 IT 解决方案<span> 尽享卓越服务 </span>
              <o-button
                variant="base"
                theme="primary"
                onClick={() => {
                  window.location.href = Home
                }}
              >
                即刻开始
              </o-button>
            </h3>
          </div>
        </div>

        <div class="w-full py-12 overflow-hidden pl-10 pr-5">
          <p>Service</p>
          <div class="text-left text-2xl font-bold mb-8">业务与研究</div>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-20 2xl:gap-40">
            {service.value.map((service, index) => (
              <div class="w-[320px] md:w-[600px] xl:w-[320px] flex flex-none flex-col items-center" key={index}>
                <a href={service.article_link}>
                  <img class="w-[320px] h-[260px] object-cover rounded-lg" src={service.image} />
                </a>
                <h3 class="text-2xl font-bold mt-2 mb-2">{service.title}</h3>
                <p class="text-base px-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div class="bg-gradient-to-br from-indigo-100 to-blue-400 dark:from-indigo-900 dark:to-blue-800 pt-16 pb-10">
          <div class="flex lg:flex-row flex-col max-w-7xl mx-auto">
            <div class="lg:w-1/2 w-full sm:flex font-semibold text-gray-800">
              <div class="sm:w-1/2 flex flex-col justify-between items-center">
                <div class="w-11/12 md:w-5/12 flex flex-col justify-center">
                  <p>About Us</p>
                  <div class="text-left text-2xl font-bold mb-8">关于我们</div>
                </div>
                <img src="https://www.tencent.com/data/index/index_develop_bg1.jpg" alt="" />
              </div>
              <div class="sm:w-1/2 flex sm:flex-col flex-col-reverse justify-between items-center mt-3 sm:mt-0">
                <div class="flex flex-col lg:-space-y-12 sm:-space-y-16 lg:space-x-8 sm:space-x-7 -space-y-12 space-x-10">
                  <img class="w-120" src="https://www.tencent.com/data/index/index_develop_bg3.jpg" alt="" />
                </div>
                <div class="w-11/12 md:w-5/12">
                  <p class="text-lg  lg:text-l">
                    将创意变成产品 <br />
                    推向目标市场
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 w-full pl-10 pr-5 flex flex-col justify-center mt-5 lg:mt-0 text-center lg:text-left">
              <h2 class="text-xl sm:text-2xl lg:text-3xl">
                我们的团队不断集思广益，始终充满创意，为您的品牌
                <span class="text-blue-600 ml-1"> 提供一切所需的支持。</span>
              </h2>
              <p class="mt-2 mb-4">
                凭借我们的专业技能和丰富经验，我们能够将客户的创新想法转化为高质量的产品，通过精益开发流程和市场推广，确保每个产品都能在市场上取得成功。
              </p>
              <div class="flex justify-center items-center gap-4">
                <o-button
                  variant="base"
                  theme="primary"
                  onClick={() => {
                    window.location.href = About
                  }}
                >
                  了解更多
                </o-button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full py-12 overflow-hidden pl-10 pr-5">
          <p>Team</p>
          <div class="text-left text-2xl font-bold mb-8">我们的团队</div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {team.value.map((team, index) => (
              <div class="flex flex-col items-center" key={index}>
                <a href={`#`}>
                  <img class="w-[200px] h-[200px] object-cover rounded-lg" src={team.image} alt={team.title} />
                </a>
                <h3 class="text-xl font-bold mt-2 mb-2">{team.title}</h3>
                <p class="text-base text-center px-2">{team.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div class="hero-section w-full h-[60vh] relative flex items-center justify-start">
          <div class="w-full h-full absolute inset-0">
            <img
              class="w-full h-full object-cover rounded-lg"
              src="https://www.tencent.com/data/student/join-bg.jpg"
              alt="Join Us"
            />
          </div>

          <div class="relative z-10 w-full py-12 pl-20">
            <p class=" text-l font-bold text-gray-800">Join Us</p>
            <a href={signUpLink} class="text-white">
              <h2 class="text-xl sm:text-4xl md:text-5xl text-blue-600 font-bold underline">
                加入我们,
                <br />
                一起创造更多可能
              </h2>
            </a>
            <div class="mt-6">
              <o-button
                variant="base"
                theme="primary"
                onClick={() => {
                  window.location.href = contactLink
                }}
              >
                联系我们
              </o-button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
