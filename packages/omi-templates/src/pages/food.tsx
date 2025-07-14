import { signal } from 'omi'
import '../components/omiu/button'

const recipes = signal([
  {
    title: '宫保鸡丁',
    description: '经典的川菜，以辣椒和花生炒制而成，口感麻辣鲜香。',
    image: 'https://p0.itc.cn/q_70/images03/20221213/d0752efeb0b0485d8d6dfa416a3b0176.jpeg',
    article_link: '#',
  },
  {
    title: '红烧肉',
    description: '肥而不腻的五花肉，经过长时间的炖煮，入口即化，酱香浓郁。',
    image: 'https://p4.itc.cn/images01/20210618/093ed59347254d1babf8811f24d2abd0.jpeg',
    article_link: '#',
  },
  {
    title: '北京烤鸭',
    description: '外皮酥脆，肉质鲜嫩，搭配薄饼和甜面酱，尽显皇家风范。',
    image: 'https://q4.itc.cn/images01/20241013/14d65496c27842c6839b47f596b611ed.jpeg',
    article_link: '#',
  },
])

const techniques = signal([
  {
    title: '爆炒',
    description: '高温快速翻炒，保持食材的鲜嫩和营养。',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flaming_wok_by_KellyB_in_Bountiful%2C_Utah.jpg/330px-Flaming_wok_by_KellyB_in_Bountiful%2C_Utah.jpg',
    article_link: '#',
  },
  {
    title: '清蒸',
    description: '利用蒸汽使食物熟透，最大程度保留原汁原味。',
    image:
      'https://cdn.hk01.com/di/media/images/dw/20240416/856948446853074944590376.jpeg/x95y1yKGslmV-W7xpBgL3Ai55ChCTTo2cd4YBHHeGAQ?v=w800',
    article_link: '#',
  },
  {
    title: '煲汤',
    description: '长时间的炖煮，使汤品鲜美滋补，适合各个季节。',
    image:
      'http://k.sinaimg.cn/n/sinakd20211015ac/260/w655h405/20211015/2f3d-d8353fc61c5e4d7254649aaf4d3fe0ae.jpg/w700d1q75cms.jpg',
    article_link: '#',
  },
])


export function Food() {
  return (
    <div>

      <main class="text-sm sm:text-base">
        <div class="hero-section w-full h-screen relative flex items-center justify-center">
          <img
            class="w-full h-full object-cover absolute inset-0"
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&auto=format&fit=crop&q=60"
            alt="Food Banner"
          />
          <div class="text-gray-100 text-3xl font-bold absolute bottom-40 left-10 text-left">
            <h1 className="sm:text-4xl lg:text-6xl mb-2">OMI 美食</h1>
            <h2 className="text-blue-600 sm:text-5xl lg:text-6xl mb-4">品味中华美食</h2>
            <o-button
              variant="base"
              theme="primary"
              onClick={() => {
                window.location.href = '#'
              }}
            >
              开始您的美食之旅
            </o-button>
          </div>
        </div>

        <div class="w-full py-12 overflow-hidden pl-10 pr-5">
          <p>Recipes</p>
          <div class="text-left text-2xl font-bold mb-8">精选菜谱</div>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-20 2xl:gap-40">
            {recipes.value.map((recipe, index) => (
              <div class="w-[320px] flex flex-none flex-col items-center" key={index}>
                <a href={recipe.article_link}>
                  <img class="w-[320px] h-[260px] object-cover rounded-lg" src={recipe.image} />
                </a>
                <h3 class="text-2xl font-bold mt-2 mb-2">{recipe.title}</h3>
                <p class="text-base px-2">{recipe.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-100 to-blue-400 dark:from-blue-900 dark:to-blue-800 pt-16 pb-10">
          <div class="flex lg:flex-row flex-col max-w-7xl mx-auto">
            <div class="lg:w-1/2 w-full pl-10 pr-5 flex flex-col justify-center mt-5 lg:mt-0 text-center lg:text-left">
              <h2 class="text-xl sm:text-2xl lg:text-3xl">
                领略<span class="text-blue-600 ml-1">中华烹饪技艺</span>
              </h2>
              <p class="mt-2 mb-4">探索中国传统的烹饪方法，感受千年文化的传承与创新。</p>
              <div class="flex justify-center items-center gap-4">
                <o-button
                  variant="base"
                  theme="primary"
                  onClick={() => {
                    window.location.href = '#'
                  }}
                >
                  了解更多
                </o-button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full py-12 overflow-hidden pl-10 pr-5">
          <p>Techniques</p>
          <div class="text-left text-2xl font-bold mb-8">烹饪技艺</div>
          <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10">
            {techniques.value.map((technique, index) => (
              <div class="flex flex-col items-center" key={index}>
                <a href={technique.article_link}>
                  <img
                    class="w-[200px] h-[200px] object-cover rounded-lg"
                    src={technique.image}
                    alt={technique.title}
                  />
                </a>
                <h3 class="text-xl font-bold mt-2 mb-2">{technique.title}</h3>
                <p class="text-base text-center px-2">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
