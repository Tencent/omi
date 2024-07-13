interface NewsCategory_t {
  name: string
  topics: string[]
}

interface NewsHeaderConfig_t {
  categories: NewsCategory_t[]
}

interface NewsCardConfig_t {
  title: string
  img: string
  isLong?: boolean
  isLarge?: boolean
}

interface NewsCardListConfig_t {
  cards: NewsCardConfig_t[]
}

interface BriefNews_t {
  isImportant?: boolean
  title: string
  url: string
}

interface BriefNewsList_t {
  news: BriefNews_t[]
}

/**
 * 渲染一个标题里的新闻分类块
 */
function renderNewsCategory(category: NewsCategory_t) {
  return (
    <div class="flex flex-row items-center h-32 px-4">
      <div class="text-2xl font-bold p-8 dark:text-foreground">{category.name}</div>
      <div class="grid grid-rows-2 grid-cols-3">
        {category.topics.map((topic) => {
          return (
            <a
              class="font-normal text-zinc-600 dark:text-zinc-400 px-2 py-1 hover:text-primary"
              href="https://example.org"
            >
              {topic}
            </a>
          )
        })}
      </div>
    </div>
  )
}

/**
 * 渲染一个新闻预览卡片
 */
function renderNewsPreviewCard(config: NewsCardConfig_t) {
  let sizePrefix = 'w-48 h-32 '
  if (config.isLong) sizePrefix = 'w-64 h-80 '
  if (config.isLarge) sizePrefix = 'w-96 h-64 '

  return (
    <div
      class={sizePrefix + 'relative shadow-md hover:shadow-lg duration-200 rounded-md overflow-hidden cursor-pointer'}
    >
      <img src={config.img} alt="news" class="absolute w-full h-full top-0 left-0 object-cover" />
      <p class="text-white absolute bottom-0 text-center w-full py-2 bg-black bg-opacity-60 hover:text-primary px-3">
        {config.title}
      </p>
    </div>
  )
}

/**
 * 渲染一条简要新闻
 */
function renderBriefNews(news: BriefNews_t) {
  let classModifier = ''
  if (news.isImportant) classModifier = ' font-bold'

  return (
    <a class={'py-2 hover:text-primary' + classModifier} href={news.url}>
      {news.title}
    </a>
  )
}

function NewsHeader(config: NewsHeaderConfig_t) {
  return (
    <div class="flex flex-row w-full items-center justify-center border-b-2 border-solid border-zinc-200 dark:border-zinc-800 mb-8">
      <div class="grid grid-cols-2 xl:grid-cols-4">
        {config.categories.map((category) => {
          return renderNewsCategory(category)
        })}
      </div>
    </div>
  )
}

function NewsCardList(config: NewsCardListConfig_t) {
  return (
    <div class="flex-row justify-center flex">
      <div class="grid grid-cols-2 gap-[4px]">
        {config.cards.map((card) => {
          return renderNewsPreviewCard(card)
        })}
      </div>
    </div>
  )
}

function BriefNewsList(config: BriefNewsList_t) {
  return (
    <div class="flex flex-col">
      <p class="text-2xl font-bold text-zinc-700 dark:text-foreground py-4">新闻速递</p>
      {config.news.map((news) => {
        return renderBriefNews(news)
      })}
    </div>
  )
}

const headerConfig: NewsHeaderConfig_t = {
  categories: [
    {
      name: '国内',
      topics: ['国内1', '国内2'],
    },
    {
      name: '国际',
      topics: ['国际1', '国际2', '国际3'],
    },
    {
      name: '财经',
      topics: ['财经1', '财经2', '财经3', '财经4', '财经5'],
    },
    {
      name: '汽车',
      topics: ['汽车1', '汽车2', '汽车3'],
    },
  ],
}

const cardListConfig: NewsCardListConfig_t = {
  cards: [
    {
      title: '奥米区多地出现猫猫',
      img: 'https://http.cat/101',
    },
    {
      title: '如何看待猫猫的出现',
      img: 'https://http.cat/200',
    },
    {
      title: '奥米公司惊现猫失踪',
      img: 'https://http.cat/404',
    },
    {
      title: '非法访问，何去何从？',
      img: 'https://http.cat/502',
    },
    {
      title: '高并发请求的下一代方案',
      img: 'https://http.cat/500',
    },
  ],
}

const briefNews: BriefNewsList_t = {
  news: [
    {
      title: '奥米区多地出现猫猫，引起社区轰动',
      isImportant: true,
      url: '/#/news/example',
    },
    {
      title: '企鹅操作系统重大更新，或称业界标杆',
      url: '/#/news/example',
    },
    {
      title: '量子计算机突破：谷歌宣布实现‘量子霸权+’',
      isImportant: true,
      url: '/#/news/example',
    },
    {
      title: '火星网络接入测试成功，首个星际Wi-Fi热点即将开放',
      url: '/#/news/example',
    },
    {
      title: 'AI助手通过律师资格考试，成为首个人工智能法律执业者',
      url: '/#/news/example',
    },
    {
      title: '苹果秘密研发新操作系统，代号‘iFuture’，传将于2025年面世',
      url: '/#/news/example',
    },
    {
      title: '全球首个商用时光机亮相，时间旅行不再是科幻梦想',
      isImportant: true,
      url: '/#/news/example',
    },
    {
      title: '特斯拉发布新款飞行汽车，预定已超百万',
      url: '/#/news/example',
    },
  ],
}

export function Home() {
  return (
    <div class="flex flex-col gap-2 pb-16">
      {NewsHeader(headerConfig)}
      <div class="w-full flex flex-row justify-center px-8">
        <div class="container flex flex-col items-center gap-8 xl:flex-row xl:items-start xl:justify-between">
          <div class="flex flex-col gap-2">
            <p class="text-2xl font-bold text-zinc-700 dark:text-foreground py-4">图看世界</p>
            <div class="w-full flex flex-col items-center py-2">
              {renderNewsPreviewCard({
                title: '高并发请求的下一代方案',
                img: 'https://http.cat/500',
                isLarge: true,
              })}
            </div>
            {NewsCardList(cardListConfig)}
          </div>
          <div class="flex flex-col gap-2">
            {BriefNewsList(briefNews)}
            {BriefNewsList(briefNews)}
          </div>

          <div class="flex flex-col gap-2">
            {BriefNewsList(briefNews)}
            <div class="w-full flex flex-col items-center py-2">
              {renderNewsPreviewCard({
                title: '特斯拉发布新款飞行汽车，预定已超百万',
                img: 'https://http.cat/500',
                isLong: true,
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
