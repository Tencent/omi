import { signal, Component, tag } from "omi";
import "../components/omiu/button";

const donateLink = "#";
const contactLink = "#";
const signUpLink = "#"; 

const stories = signal([
  {
    title: '露天电影院之夜',
    description: '团队了解到孩子们对于电影和外面世界的渴望。在一个温暖的夏夜，他们搭建起一个简易的露天电影院，放映了几部适合儿童的经典动画片。孩子们坐在星空下，第一次体验到了电影带来的乐趣和启发，这也成为了他们珍贵的回忆。',
    image: 'https://s2.loli.net/2024/07/15/VvgXmENZ85FI4ri.jpg',
    article_link: '#',
  },
  {
    title: '彩虹桥上的笑声',
    description: '团队在一次走访中发现了一座破旧的小桥，它是孩子们上学的必经之路。每当雨季来临，桥下就会变成一条湍急的河流，孩子们的安全受到威胁。团队发起募捐，与当地社区合作，重建了一座坚固的新桥，确保孩子们每天都能安全往返于学校与家之间。',
    image: 'https://s2.loli.net/2024/07/15/mkilMehBEy9Sbvx.jpg',
    article_link: '#',
  },
  {
    title: '图书馆重生',
    description: '团队发起了“图书捐赠计划”，从城市收集了上千本新书，涵盖了各种主题。现在，孩子们可以借阅书籍，享受阅读的乐趣，开阔视野。',
    image: 'https://s2.loli.net/2024/07/15/SB2M4mueO8Fgotz.jpg',
    article_link: '#',
  },
]);

const stats = [
  {
    name: '年',
    value: 6,
  },
  {
    name: '场活动',
    value: 42,
  },
  {
    name: '位儿童',
    value: 3500,
  },
]

const sortedStats = stats.sort((a, b) => a.value - b.value);

// icon reference link: https://omi.cdn-go.cn/templates/latest/#/icons
const features = [
  {
    name: '教育援助',
    description: '提供书籍、文具和资助',
    icon: "t-icon t-icon-book",
  },
  {
    name: '心理关怀',
    description: '定期的心理健康讲座和一对一咨询',
    icon: "t-icon t-icon-chat-heart",
  },
  {
    name: '健康保障',
    description: '定期体检和医疗援助', 
    icon: "t-icon t-icon-apple",
  },
  {
    name: '生活技能',
    description: '组织烹饪、园艺等实用课程',
    icon: "t-icon t-icon-filter-3",
  },
  {
    name: '节日活动',
    description: '举办传统节日庆祝，让孩子们感受家的温暖',
    icon: "t-icon t-icon-happy",
  },
]

@tag('charity-template')
export class CharityTemplate extends Component {
  render() {
    return (
      <>
        <div class="hero-section w-full h-screen relative">
          <img class="w-full h-full object-cover" src="https://s2.loli.net/2024/07/15/hORgyQbYzvWD4I2.jpg" />
          <div class="absolute bottom-6 left-6">
            <h1 class="text-white text-4xl sm:text-6xl lg:text-8xl font-bold mb-2">携手共筑爱的桥梁<br />关爱留守儿童行动</h1>
            <p class="text-white text-base md:text-3xl">让我们共同为每一个孤独的心灵点亮希望的灯塔</p>
          </div>
        </div>

        <div class="w-full py-12 overflow-hidden flex justify-center">
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-20 2xl:gap-40">
            {
              stories.value.map((story, index) => (
                <div class="w-[320px] md:w-[600px] xl:w-[320px] flex flex-none flex-col items-center" 
                  key={index}>
                  <a href={story.article_link}><img class="w-[320px] h-[260px] object-cover rounded-lg" src={story.image} /></a>
                  <h3 class="text-2xl font-bold mt-2 mb-2">{story.title}</h3>
                  <p class="text-base px-2">{story.description}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div class={`about-section w-full flex justify-center bg-amber-100 dark:bg-amber-900 py-8`}>
          <div class="w-10/12 flex items-center justify-center gap-12">
            <div class="w-11/12 md:w-5/12 flex flex-col justify-center">
              <h2 class="text-3xl md:text-5xl mb-4">关于我们 —— <br />我们的使命与愿景</h2>
              <p class="text-base">我们是一家致力于改善中国留守儿童生活质量的非营利组织。我们的使命是通过教育、健康和情感支持，确保每个孩子都能享有平等的成长机会。我们相信，每个孩子都有无限的潜力，只需一点爱与关注，就能绽放出最耀眼的光芒。</p>
            </div>
            <div class="w-7/12 hidden md:block">
              <img class="object-cover md:h-auto rounded-lg" src="https://s2.loli.net/2024/07/15/ljcfdbWUwNu2vns.jpg" />
            </div>
          </div>
        </div>

        <div class="impact-section w-full py-12 flex flex-col sm:flex-row gap-20 justify-center items-center">
          <div class="w-11/12 sm:w-1/3 flex sm:flex-col justify-center sm:justify-normal gap-6">
            {
              sortedStats.map(stat => (
                <div>
                  <span class="text-2xl sm:text-4xl font-bold mr-2">{stat.value}</span>
                  <span class="text-base sm:text-lg">{stat.name}</span>
                </div>
              )) 
            }
          </div>
          <div class="w-9/12 sm:w-1/3 flex flex-col gap-6 justify-center">
            <h2 class="text-3xl sm:text-5xl text-center whitespace-nowrap">改变正在发生</h2>
            <p>自成立以来，我们的足迹已覆盖全国多个省份，帮助超过3000名留守儿童，显著提高了他们的学习动力、社交能力和心理韧性。</p>
            <div class="flex justify-center items-center gap-4">
              <o-button   
                variant="base"
                theme="primary"
                onClick={() => {window.location.href = donateLink}}
              >
                捐赠以帮助孩子们
              </o-button>
              <o-button   
                variant="base"
                theme="default"
                onClick={() => {window.location.href = contactLink}}
              >
                尝试其他方式帮助
              </o-button>
            </div>
          </div>
        </div>

        <div class={`feature-section w-full flex flex-col items-center py-12 px-6 bg-amber-100 dark:bg-amber-900`}>
          <h2 class="text-3xl sm:text-5xl mb-16">我们所提供的</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6">
            {
              features.map(feature => (
                <div class="flex gap-4">
                  <div class="pt-4">
                    <i class={`${feature.icon} text-xl sm:text-3xl`}></i>
                  </div>
                  <div>
                    <h3 class="text-xl sm:text-2xl font-bold">{ feature.name }</h3>
                    <p class="text-base">{ feature.description }</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div class="cta-section w-full py-12">
          <div class="relative w-10/12 mx-auto">
            <img class="w-full mx-auto h-[480px] object-cover rounded-lg" src="https://s2.loli.net/2024/07/15/lNMtiXHabTev76Q.jpg" />
            <a href={signUpLink} class=""><h2 class="text-4xl sm:text-5xl md:text-7xl text-white underline absolute bottom-8 left-8">加入我们,<br />一起创造更多可能</h2></a>
          </div>
        </div>
      </>
    )
  }
}


export function CharityPage() {
  return <charity-template />
}
