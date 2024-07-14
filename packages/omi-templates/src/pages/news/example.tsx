import { BriefNewsList_t } from './home'
import { NewsHeaderComponent } from './news-header'
import '@/components/omiu/button'

export interface NewsContent_t {
  title: string
  author: string
  date: string
  content: string
}

export interface AuthorCardConfig_t {
  name: string
  avatar: string
  introduction: string
}

function renderNewsContent(content: NewsContent_t) {
  return (
    <div class="flex flex-col gap-4">
      <div class="text-4xl font-bold py-4">{content.title}</div>
      <div class="flex flex-row gap-4">
        <div class="text-zinc-600 dark:text-primary-foreground">{content.author}</div>
        <div class="text-zinc-600 dark:text-primary-foreground">{content.date}</div>
      </div>

      <div class="text-zinc-800 dark:text-zinc-400 py-6">{content.content}</div>
    </div>
  )
}

function shareCard() {
  return (
    <div class="flex flex-row gap-4  shadow rounded bg-card text-card-foreground dark:border p-6 items-center justify-center my-8">
      <o-button theme="success">分享到微信</o-button>
      <o-button theme="primary">分享到微信</o-button>
      <o-button theme="default">收藏</o-button>
    </div>
  )
}

function recommendationCard(config: BriefNewsList_t) {
  return (
    <div class="flex flex-col gap-4 shadow rounded bg-card text-card-foreground dark:border p-6 my-8">
      <div class="text-2xl font-bold text-zinc-700 dark:text-foreground py-4">推荐阅读</div>
      <div class="flex flex-col gap-2">
        {config.news.map((news) => {
          return (
            <a class="text-zinc-600 dark:text-zinc-400 hover:text-primary" href={news.url}>
              {news.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}

function authorCard(config: AuthorCardConfig_t) {
  return (
    <div class="flex flex-col gap-4 shadow rounded bg-card text-card-foreground dark:border p-6 items-center my-8">
      <img src={config.avatar} alt="avatar" class="w-24 h-24 rounded-full shadow-lg object-cover" />
      <div class="text-2xl text-zinc-700 dark:text-foreground py-4 text-center">{config.name}</div>
      <div class="text-zinc-600 dark:text-zinc-400 text-sm">{config.introduction}</div>
    </div>
  )
}

const newsContent: NewsContent_t = {
  title: '内容示例页',
  author: '艾丽卡·斯通',
  date: '2021-10-01',
  content:
    '**这里应当接入平台内容数据库，或者通过接口/HTML渲染器等获取内容。**  流由就往流刃乙十蝶急申占打知瓜娘給而王。力物房隻肉員錯邊很急路扒把，羊校玩助秋兌巴胡兌几南躲意從乾條南，畫是新荷字年園金，片吉牠自古寺跟。早對方安昌山長水土石合向即乞後牛泉平，福要央出想姐弓蛋想夕？給爬找放常哥快送刀買幾品良室金辛，有古心八免林見害片寫，林以是冒日：讀口刀且北聽？草支草何蝶找鳥唱綠。門正言童肖飯隻結物習，主村真。公實才何冬信麻笑害隻喝她害媽從燈波貝，尺以鴨說着苗刀清們位條春、書過還想喝白道讀起像長故者甲，牙就已幫拉流牛具波田晚住小米戶兔亮飯雲，封法昌物，裝息良，尤頭幸。頁的枝兌視看見飛；法士這找還室只二停百服休姐，朵今錯神、目苦定回示嗎要兆過院田片這朱「葉魚」頭雄百百。巾弓把半交校信拍河蝶民喝？草念波唱那。火月怎哪，又牛火的婆具幫合松干給說手里里字丟朵：屋六父吹牠面九師美英在汗語園由假「科昌多立青」免請共示奶歡「房清根次」。看左故月蛋路送、星向詞斗朱朋收方戊親清院在細即停申寺快，流上虎也地頭乍現記由光元貝百就亭羊春不，香辛你色同東跟泉遠科院雲。穴姊服打。麻很封刃帶？直東紅亭亭里大牠食員黑，怎水唱有寺以男耳立用助兔；菜兄福物天各旁米，象院造吹乙水意葉皮支蛋！扒午目平種助。',
}

const briefNews: BriefNewsList_t = {
  news: [
    {
      title: '点击任意标题进入内容示例页',
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
  ],
}

const authorConfig: AuthorCardConfig_t = {
  name: '艾丽卡·斯通',
  avatar: 'https://http.cat/404',
  introduction:
    '艾丽卡·斯通是一位资深科技记者和专栏作家，专注于报道人工智能、区块链和未来科技趋势。她拥有计算机科学学位，曾在多家知名科技公司担任顾问。艾丽卡的文章以其深度分析和前瞻性的视角受到读者的喜爱。',
}

export function Example() {
  return (
    <div class="w-full flex flex-col items-center">
      <NewsHeaderComponent />
      <div class="w-full flex flex-col items-center xl:flex-row xl:justify-center xl:items-start">
        <div class="w-full max-w-xl flex flex-col px-8">
          {renderNewsContent(newsContent)} {shareCard()}
        </div>
        <div class="w-full max-w-xl flex flex-col px-8 xl:ml-12">
          {recommendationCard(briefNews)} {authorCard(authorConfig)}
        </div>
      </div>
    </div>
  )
}
