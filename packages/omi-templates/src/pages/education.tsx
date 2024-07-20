import { signal, tag, Component } from 'omi'
import '../components/omiu/button'
import '../components/omiu/swiper/swiper'
import 'omi-ripple'
// 分类数据
const categories = signal([
  { name: '前端开发' },
  { name: '后端开发' },
  { name: 'AI开发' },
  { name: '数据科学' },
  { name: '移动开发' },
])

// 课程数据
const allCourses = [
  {
    title: 'Python编程基础',
    date: '2024 / 7 / 1',
    duration: '7小时',
    description: '学习Python编程基础，包括语法、数据结构和基本算法。',
    author: '李明',
    price: '￥200',
    image: 'http://yywebsite.cn/assets/img/class1.jpg',
    authorImage: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
    category: '后端开发',
  },
  {
    title: 'Web开发入门',
    date: '2024 / 7 / 5',
    duration: '4.5小时',
    description: '掌握HTML、CSS和JavaScript的基础知识，开始你的Web开发之旅。',
    author: '王华',
    price: '￥300',
    image: 'http://yywebsite.cn/assets/img/class1.jpg',
    authorImage: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
    category: '前端开发',
  },
  {
    title: '机器学习基础',
    date: '2024 / 7 / 10',
    duration: '6小时',
    description: '了解机器学习的基本概念和应用，使用Python进行实践。',
    author: '赵倩',
    price: '免费',
    image: 'http://yywebsite.cn/assets/img/class1.jpg',
    authorImage: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
    category: 'AI开发',
  },
  {
    title: '数据分析与可视化',
    date: '2024 / 7 / 15',
    duration: '8小时',
    description: '学习如何使用Python进行数据分析和可视化，包括Pandas和Matplotlib。',
    author: '陈浩',
    price: '￥250',
    image: 'http://yywebsite.cn/assets/img/class2.jpg',
    authorImage: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
    category: '数据科学',
  },
  {
    title: '前端框架Vue.js',
    date: '2024 / 7 / 20',
    duration: '10小时',
    description: '深入了解Vue.js框架，构建高性能的Web应用。',
    author: '刘静',
    price: '免费',
    image: 'http://yywebsite.cn/assets/img/class3.jpg',
    authorImage: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
    category: '前端开发',
  },
]

const courses = signal(allCourses)

// 名师风采 数据
let teachers = [
  {
    name: '李明',
    title: 'Python编程专家',
    description: 'Python编程领域的专家，拥有多年的开发和教学经验。',
    image: 'http://yywebsite.cn/assets/img/edu/teacher1.jpg',
  },
  {
    name: '王华',
    title: 'Web开发教授',
    description: '在Web开发方面有着丰富的经验，专注于HTML、CSS和JavaScript教学。',
    image: 'http://yywebsite.cn/assets/img/edu/teacher3.jpg',
  },
  {
    name: '赵倩',
    title: '机器学习研究员',
    description: '机器学习领域的资深研究员，擅长Python和数据分析。',
    image: 'http://yywebsite.cn/assets/img/edu/teacher2.jpg',
  },
  {
    name: '陈浩',
    title: '数据科学家',
    description: '数据分析与可视化方面有着多年的实践经验，精通Pandas和Matplotlib。',
    image: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
  },
  {
    name: '刘静',
    title: '前端开发总监',
    description: '前端开发的专家，特别擅长Vue.js框架的应用与开发。',
    image: 'https://omi.cdn-go.cn/admin/latest/home/omi.svg',
  },
]

// 学生评价 数据
var studentReviews = [
  {
    name: '学生A',
    title: '前端开发工程师',
    description: '这门《Python编程基础》课程为我打开了新世界的大门，让我更深入地了解了编程的奥秘。',
    image: 'http://yywebsite.cn/assets/img/edu/student1.jpg',
  },
  {
    name: '学生B',
    title: '欧米大学大学生',
    description: '《Web开发入门》课程让我掌握了许多实用的技能，我对Web开发的热情更加高涨了。',
    image: 'http://yywebsite.cn/assets/img/edu/student2.jpg',
  },
  {
    name: '学生C',
    title: '欧米大学小学生',
    description: '《机器学习基础》课程让我对AI有了更深刻的认识，对未来的工作充满期待。',
    image: 'http://yywebsite.cn/assets/img/edu/student3.jpg',
  },
  {
    name: '学生D',
    title: '后端开发工程师',
    description: '《数据分析与可视化》课程让我学习到了如何将数据转化为有价值的见解，对我的工作非常有帮助。',
    image: 'http://yywebsite.cn/assets/img/edu/student1.jpg',
  },
]

@tag('education-template')
export class EducationTemplate extends Component {
  activeCategory: string = '全部'

  static css = [
    `
    o-button {
      position: relative;
      overflow: hidden;
      transition: background 400ms;
      font-size: 1.5rem;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  
    `,
  ]

  // 筛选课程
  filterCourses(category: string) {
    if (category === '全部') {
      courses.value = allCourses
    } else {
      courses.value = allCourses.filter((course) => course.category === category)
    }
  }

  render() {
    return (
      <div>
        <section id="courses" class="py-12  p-6">
          <div class="container mx-auto">
            {/* 分类section */}
            <div class="flex justify-around mb-8">
              {['全部', ...categories.value.map((category) => category.name)].map((category, index) => (
                <o-button
                  key={index}
                  variant="text"
                  o-ripple
                  theme={category === this.activeCategory ? 'primary' : 'default'}
                  onClick={() => {
                    this.activeCategory = category
                    this.filterCourses(category)
                  }}
                >
                  {category}
                </o-button>
              ))}
            </div>

            {/* 课程section */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.value.length === 0 ? (
                <div class="col-span-full text-center text-foreground">暂无相关课程</div>
              ) : (
                courses.value.map((course, index) => (
                  <div
                    key={index}
                    class="max-w-sm mx-auto bg-background rounded-lg  overflow-hidden shadow-lg"
                    o-ripple
                  >
                    <img
                      class="w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
                      src={course.image}
                      alt="Course Image"
                    />

                    <div class="p-4">
                      <div class="flex justify-between items-center">
                        <span class="text-zinc-600 dark:text-foreground text-sm">
                          <i class="far fa-calendar"></i> {course.date}
                        </span>
                        <span class="text-zinc-600 dark:text-foreground text-sm">
                          <i class="far fa-clock"></i> {course.duration}
                        </span>
                      </div>
                      <div class="mt-2">
                        <h3 class="text-xl font-semibold">
                          <a href="#">{course.title}</a>
                        </h3>
                        <p class="dark:text-foreground mt-2">{course.description}</p>
                      </div>
                      <div class="flex justify-between items-center mt-4">
                        <div class="flex items-center">
                          <img class="w-8 h-8 rounded-full" src={course.authorImage} alt="Author Image" />
                          <span class="dark:text-foreground ml-2">{course.author}</span>
                        </div>
                        <div>
                          <a href="#" class="text-green-500 font-semibold">
                            {course.price}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/** 名师风采 */}
        <section class="container mx-auto p-6">
          <h1 class="text-3xl font-bold mb-1 text-center">名师风采</h1>
          <p class="text-lg text-zinc-600 dark:text-foreground mb-4 text-center">
            我们骄傲地介绍我们的优秀教师团队，他们在各自的领域拥有丰富的经验和卓越的成就。
          </p>
          <o-swiper
            class="w-full"
            direction="horizontal"
            loop={true}
            navigation={false}
            pagination={true}
            slidesPerView={'auto'}
          >
            {teachers.map((teacher) => (
              <div class="m-4 p-8 md:min-w-1/2 sm:w-full flex flex-col items-center bg-background rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
                <img src={teacher.image} alt={teacher.name} class="w-48 rounded object-cover object-center mb-4" />
                <h2 class="text-xl font-semibold">{teacher.name}</h2>
                <h3 class="text-lg dark:text-foreground">{teacher.title}</h3>
                <p class="text-zinc-600 dark:text-foreground mt-2">{teacher.description}</p>
              </div>
            ))}
          </o-swiper>
        </section>

        {/** 学生课程评价 */}
        <section class="container mx-auto p-6">
          <h1 class="text-3xl font-bold mb-4 text-center">学生课程评价</h1>
          <o-swiper direction="horizontal" loop={true} navigation={false} pagination={true} slidesPerView={'auto'}>
            {studentReviews.map((student) => (
              <div class="m-4 p-8 flex flex-col items-center bg-background rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
                <img
                  src={student.image}
                  alt={student.name}
                  class="w-32 h-32 rounded-full object-cover object-center mb-4"
                />
                <h2 class="text-xl font-semibold">{student.name}</h2>
                <h3 class="text-lg dark:text-foreground">{student.title}</h3>
                <p class="text-zinc-600 ">{student.description}</p>
              </div>
            ))}
          </o-swiper>
        </section>
      </div>
    )
  }
}

// 渲染组件到页面
export function EducationPage() {
  return <education-template />
}
