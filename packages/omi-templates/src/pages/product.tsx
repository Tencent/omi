export function Product(props: { id: string }) {
  return (
    <>
      <div class="container mx-auto gap-12 flex flex-wrap justify-center p-6">
        <div class="md:w-[450px] w-full dark:brightness-75">
          <img
            src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/183198/7/37470/61411/6500cf96Faa2fc356/b3ea84bed2c925c5.jpg.avif"
            class="h-[450px] object-cover w-full rounded-lg shadow-md"
            alt="Product Image"
          />
          <div class="relative text-gray-400 overflow-x-scroll whitespace-nowrap grid grid-cols-7 gap-2 mt-4">
            <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <img
              src="https://img14.360buyimg.com/n5/s54x54_jfs/t1/109268/30/44215/20629/6500cf96F725ec03f/b77300890e78bbaa.jpg.avif"
              class="h-16 object-cover w-full rounded-lg shadow-md"
              alt="Small Product Image"
            />
            <img
              src="https://img14.360buyimg.com/n5/s54x54_jfs/t1/183198/7/37470/61411/6500cf96Faa2fc356/b3ea84bed2c925c5.jpg.avif"
              class="h-16 object-cover w-full rounded-lg shadow-md"
              alt="Small Product Image"
            />
            <img
              src="https://img14.360buyimg.com/n5/s54x54_jfs/t1/190924/14/41483/35175/6500cf96F13b6162c/87a9e0d8a7c5fa8a.jpg.avif"
              class="h-16 object-cover w-full rounded-lg shadow-md"
              alt="Small Product Image"
            />
            <img
              src="https://img14.360buyimg.com/n5/s54x54_jfs/t1/214372/25/36493/8804/6500cf96F23d42147/d28c318c26cd36f6.jpg.avif"
              class="h-16 object-cover w-full rounded-lg shadow-md"
              alt="Small Product Image"
            />
            <img
              src="https://img14.360buyimg.com/n5/s54x54_jfs/t1/185575/2/37934/34612/6500cf96F6c6548a8/d8a1fffe5d6c7e57.jpg.avif"
              class="h-16 object-cover w-full rounded-lg shadow-md"
              alt="Small Product Image"
            />

            <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div class="md:w-[550px] w-full mt-4 md:mt-0">
          <h1 class="text-2xl font-bold">产品名称 - {props.id}</h1>
          <p class="text-md text-black mt-2 flex items-center">
            <span class="text-gray-500 w-32">价格:</span> <span class="text-2xl dark:text-foreground">$99.99</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">运送至:</span>
            <span class="text-black dark:text-foreground">南山大道粤海街道103号1栋2单元9楼</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">重量:</span>
            <span class="text-black dark:text-foreground">1kg</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">描述:</span>
            <span class="text-black flex-1 dark:text-foreground">这是一个示例产品描述，提供有关产品的更多信息。</span>
          </p>

          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">材料:</span>
            <span class="text-black dark:text-foreground">优质原料，天然添加剂</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">保质期:</span>
            <span class="text-black dark:text-foreground">12个月</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">包装:</span>
            <span class="text-black dark:text-foreground">精美包装，适合送礼</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">使用方法:</span>
            <span class="text-black dark:text-foreground">根据个人口味，适量食用</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">特点:</span>
            <span class="text-black dark:text-foreground">口感丰富，营养丰富，适合各年龄层</span>
          </p>
          <p class="text-md text-gray-500 mt-2 flex items-center">
            <span class="text-gray-500 w-32">评价:</span>
            <span class="text-black dark:text-foreground">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span class="text-md text-black ml-2 dark:text-foreground">4.8 (120条评价)</span>
            </span>
          </p>
          <div class="mt-4 flex items-center">
            <label for="flavor" class="text-gray-500 w-32">
              选择口味:
            </label>
            <select
              id="flavor"
              style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e'); background-size: 1em;  background-position: right 0.5rem center;"
              class="mt-1 max-w-32 block w-full px-2 py-1 rounded-md shadow-sm border focus:border-primary focus:ring-1 focus:ring-primary focus:ring-opacity-50 bg-no-repeat appearance-none dark:text-foreground dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-primary dark:focus:border-primary dark:focus:ring-opacity-50"
            >
              <option>香草</option>
              <option>巧克力</option>
              <option>草莓</option>
            </select>
          </div>

          <hr class="my-8"></hr>
          <div class="relative flex items-center w-96 mt-4 gap-4">
            <div class="flex text-left max-w-28">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 border dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="999"
              />
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
            <button class="bg-primary text-primary-foreground whitespace-nowrap text-white px-4 py-2 rounded-md transition ease-in-out duration-150 hover:bg-primary/85 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              添加到购物车
            </button>
          </div>
        </div>
      </div>

      <div class="bg-background text-foreground dark:bg-zinc-700">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10 w-full mx-auto px-4 py-10 md:w-[1080px]">
          <div>
            <div class="flex items-center">
              <div class="w-16 h-16 text-gray-700 rounded-md overflow-hidden mr-4 dark:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-battery-full"
                >
                  <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
                  <line x1="22" x2="22" y1="11" y2="13" />
                  <line x1="6" x2="6" y1="11" y2="13" />
                  <line x1="10" x2="10" y1="11" y2="13" />
                  <line x1="14" x2="14" y1="11" y2="13" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-xl font-bold">超强续航能力</h2>
                <p class="text-gray-600 dark:text-foreground">
                  这款手机拥有出色的电池寿命，无论是长时间的工作还是娱乐，都能满足你的需求。它的超强续航能力让你无需担心电量问题，让你的生活更加便捷。
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="flex items-center">
              <div class="w-16 h-16 text-gray-700 rounded-md overflow-hidden mr-4 dark:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-scan-eye"
                >
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  <circle cx="12" cy="12" r="1" />
                  <path d="M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-xl font-bold">卓越的摄像头性能</h2>
                <p class="text-gray-600 dark:text-foreground">
                  这款手机配备了先进的摄像头系统，无论是拍摄日常照片还是专业级别的摄影作品，都能轻松应对。它的卓越摄像头性能让你的每一张照片都充满生活色彩。
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <div class="w-16 h-16 text-gray-700 rounded-md overflow-hidden mr-4 dark:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-rocket"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-xl font-bold">流畅的操作体验</h2>
                <p class="text-gray-600 dark:text-foreground">
                  这款手机的处理器强大，运行流畅，无论是打开应用、浏览网页还是玩游戏，都能提供流畅的操作体验。它的高效性能让你的生活更加顺畅。
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <div class="w-16 h-16 text-gray-700 rounded-md overflow-hidden mr-4 dark:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-smartphone"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="text-xl font-bold">优雅的设计风格</h2>
                <p class="text-gray-600 dark:text-foreground">
                  这款手机的设计简洁而优雅，无论是手感还是视觉效果，都给人留下深刻的印象。它的优雅设计风格让你在众多手机中脱颖而出，展现你的独特品味。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full mx-auto px-4 pb-20 md:w-[1080px]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32">
          <div class="mt-16 md:mt-0 bg-card text-card-foreground p-6 rounded shadow text-center">
            <div class="relative">
              <div
                class="absolute border left-1/2 rounded-full -top-36 -ml-16 w-32 h-32 dark:brightness-90"
                style="background-image: url('https://tdesign.gtimg.com/site/images/banner-thumb.jpg'); background-size: cover; background-position: center;"
              ></div>
              <h2 class="text-xl font-bold mt-12">名称 3</h2>
              <p class="text-gray-600 dark:text-foreground">描述 3</p>
            </div>
          </div>

          <div class="mt-16 md:mt-0 bg-card text-card-foreground p-6 rounded shadow text-center">
            <div class="relative">
              <div
                class="absolute border rounded-full left-1/2 -top-36 -ml-16 w-32 h-32 dark:brightness-90"
                style="background-image: url('https://tdesign.gtimg.com/site/images/banner-thumb.jpg'); background-size: cover; background-position: center;"
              ></div>
              <h2 class="text-xl font-bold mt-12">名称 3</h2>
              <p class="text-gray-600 dark:text-foreground">描述 3</p>
            </div>
          </div>

          <div class="mt-16 md:mt-0 bg-card text-card-foreground p-6 rounded shadow text-center">
            <div class="relative">
              <div
                class="absolute border rounded-full left-1/2 -top-36 -ml-16 w-32 h-32 dark:brightness-90"
                style="background-image: url('https://tdesign.gtimg.com/site/images/banner-thumb.jpg'); background-size: cover; background-position: center;"
              ></div>
              <h2 class="text-xl font-bold mt-12">名称 3</h2>
              <p class="text-gray-600 dark:text-foreground">描述 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
