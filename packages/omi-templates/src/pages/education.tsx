import { render, signal, tag, Component } from 'omi';
import '../components/omiu/button';

// 初始化分类数据
const categories = signal([
  { name: '前端开发' },
  { name: '后端开发' },
  { name: 'AI开发' },
  { name: '数据科学' },
  { name: '移动开发' },
]);

// 初始化课程数据
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
];

const courses = signal(allCourses);

@tag('course-list')
class CourseList extends Component {
  
  activeCategory: string = "";
  // 筛选课程
  filterCourses(category:string) {
    if (category === '全部') {
      courses.value = allCourses;
    } else {
      courses.value = allCourses.filter((course) => course.category === category);
    }
  }

  render() {
    return (
      // 分类和课程卡片列表
      <section id="courses" class="py-12">
        <div class="container mx-auto">
          {/* 分类section */}
          <div class="flex justify-around mb-8">
            {['全部', ...categories.value.map((category) => category.name)].map((category, index) => (
              <o-button
                key={index}
                variant="text"
                theme={category === this.activeCategory ? 'primary' : 'default'}
                onClick={() => {
                  this.activeCategory = category;
                  this.filterCourses(category);
                }}
              >
                {category}
              </o-button>
            ))}
          </div>

          {/* 课程section */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.value.map((course, index) => (
              <div key={index} class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                <img class="w-full" src={course.image} alt="Course Image" />
                <div class="p-4">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600 text-sm">
                      <i class="far fa-calendar"></i> {course.date}
                    </span>
                    <span class="text-gray-600 text-sm">
                      <i class="far fa-clock"></i> {course.duration}
                    </span>
                  </div>
                  <div class="mt-2">
                    <h3 class="text-xl font-semibold">
                      <a href="#">{course.title}</a>
                    </h3>
                    <p class="text-gray-700 mt-2">{course.description}</p>
                  </div>
                  <div class="flex justify-between items-center mt-4">
                    <div class="flex items-center">
                      <img class="w-8 h-8 rounded-full" src={course.authorImage} alt="Author Image" />
                      <span class="text-gray-700 ml-2">{course.author}</span>
                    </div>
                    <div>
                      <a href="#" class="text-green-500 font-semibold">
                        {course.price}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

// 渲染组件到页面
export function Questionnaire() {
  return <course-list />;
}
