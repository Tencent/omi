interface NewsCategory_t {
  name: string
  topics: string[]
}

interface NewsHeaderConfig_t {
  categories: NewsCategory_t[]
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

export const NewsHeaderComponent = () => <NewsHeader {...headerConfig} />
