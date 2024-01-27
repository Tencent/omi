/*
 Base on
 https://github.com/envomer/tailwindcss-chat 

*/
export function Chat() {
  return (
    <div class="w-full h-[calc(100vh-60px)] dark:brightness-90">
      <div class="flex h-full">
        <div class="hidden xl:block sm:flex-2 w-64 bg-gray-200">
          <div class="user-profile text-center">
            <div class="w-32 h-32 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg">
              <img src="https://omi.cdn-go.cn/admin/latest/home/omi.svg" alt="user" class="block" />
            </div>
            <div class="text-gray-800 mt-8">
              Omer Mohamed Ali
              <span class="inline-block align-text-bottom">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </div>
          </div>

          <div class="menu mt-8">
            <a
              class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
              href="javascript:return false;"
            >
              <span class="inline-block align-text-bottom mr-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </span>
              Home
            </a>
            <a
              class="block py-4 px-12 border-l-4 border-gray-800 bg-gray-300 text-black hover:bg-gray-300 hover:text-black"
              href="javascript:return false;"
            >
              <span class="inline-block align-text-bottom mr-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </span>
              Chat
            </a>
            <a
              class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
              href="javascript:return false;"
            >
              <span class="inline-block align-text-bottom mr-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </span>
              Calendar
            </a>
            <a
              class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
              href="javascript:return false;"
            >
              <span class="inline-block align-text-bottom mr-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                </svg>
              </span>
              Files
            </a>
            <a
              class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
              href="javascript:return false;"
            >
              <span class="inline-block align-text-bottom mr-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </span>
              Jobs
            </a>
            <a
              class="block py-4 px-12 border-l-4 text-gray-600 hover:bg-gray-300 hover:text-black"
              href="javascript:return false;"
            >
              <span class="inline-block align-text-bottom mr-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-4 h-4"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              Settings
            </a>
          </div>
        </div>
        <div class="flex-1 bg-gray-100 w-full h-full">
          <div class="main-body container m-auto w-11/12 h-full flex flex-col">
            <div class="py-4 flex-2 flex flex-row">
              <div class="flex-1">
                <span class="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                  <span class="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </span>
                </span>
                <span class="lg:hidden inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                  <span class="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      class="h-4 w-4"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div class="flex-1 text-right">
                <span class="inline-block text-gray-700">
                  Status:{' '}
                  <span class="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>{' '}
                  <b>Online</b>
                  <span class="inline-block align-text-bottom">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-4 h-4"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </span>

                <span class="inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                  <span class="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-4 h-4"
                    >
                      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  </span>
                </span>
              </div>
            </div>

            <div class="main flex-1 flex flex-col">
              <div class="hidden lg:block heading flex-2">
                <h1 class="text-3xl text-gray-700 mb-4">Chat</h1>
              </div>

              <div class="flex-1 flex h-full">
                <div class="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
                  <div class="search flex-2 pb-6 px-2">
                    <input
                      type="text"
                      class="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
                      placeholder="Search"
                    />
                  </div>
                  <div class="flex-1 h-full overflow-auto px-2">
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class="text-gray-800">Ryann Remo</span>
                        </div>
                        <div>
                          <small class="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class="text-gray-500">15 April</small>
                        </div>
                        <div>
                          <small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            23
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class="text-gray-800">Karp Bonolo</span>
                        </div>
                        <div>
                          <small class="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class="text-gray-500">15 April</small>
                        </div>
                        <div>
                          <small class="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            10
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-red-500">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class="text-gray-800">Mercedes Yemelyan</span>
                        </div>
                        <div>
                          <small class="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class="text-gray-800">Cadi Kajetán</span>
                        </div>
                        <div>
                          <small class="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="truncate w-32">
                          <span class="text-gray-800">Rina Samuel</span>
                        </div>
                        <div>
                          <small class="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div class="flex-2 text-right">
                        <div>
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat-area flex-1 flex flex-col">
                  <div class="flex-3">
                    <h2 class="text-xl py-1 mb-8 border-b-2 border-gray-200">
                      Chatting with <b>Mercedes Yemelyan</b>
                    </h2>
                  </div>
                  <div class="messages flex-1 overflow-auto">
                    <div class="message mb-4 flex">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                          <span>
                            Hey there. We would like to invite you over to our office for a visit. How about it?
                          </span>
                        </div>
                        <div class="pl-4">
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message mb-4 flex">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                          <span>All travel expenses are covered by us of course :D</span>
                        </div>
                        <div class="pl-4">
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message me mb-4 flex text-right">
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-primary rounded-full p-2 px-6 text-white">
                          <span>It's like a dream come true</span>
                        </div>
                        <div class="pr-4">
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message me mb-4 flex text-right">
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-primary rounded-full p-2 px-6 text-white">
                          <span>I accept. Thank you very much.</span>
                        </div>
                        <div class="pr-4">
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                    <div class="message mb-4 flex">
                      <div class="flex-2">
                        <div class="w-12 h-12 relative">
                          <img
                            class="w-12 h-12 rounded-full mx-auto"
                            src="https://omi.cdn-go.cn/admin/latest/home/omi.svg"
                            alt="chat-user"
                          />
                          <span class="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div class="flex-1 px-2">
                        <div class="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                          <span>You are welome. We will stay in touch.</span>
                        </div>
                        <div class="pl-4">
                          <small class="text-gray-500">15 April</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-2 pt-4 pb-10">
                    <div class="write bg-white shadow flex rounded-lg">
                      <div class="flex-3 flex content-center items-center text-center p-4 pr-0">
                        <span class="block text-center text-gray-400 hover:text-gray-800">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            class="h-6 w-6"
                          >
                            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </span>
                      </div>
                      <div class="flex-1">
                        <textarea
                          name="message"
                          class="w-full block outline-none py-4 px-4 bg-transparent"
                          rows="1"
                          placeholder="Type a message..."
                          autofocus
                        ></textarea>
                      </div>
                      <div class="flex-2 w-32 p-2 flex content-center items-center">
                        <div class="flex-1 text-center">
                          <span class="text-gray-400 hover:text-gray-800">
                            <span class="inline-block align-text-bottom">
                              <svg
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                class="w-6 h-6"
                              >
                                <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                        <div class="flex-1">
                          <button class="bg-primary hover:bg-primary/85 w-10 h-10 rounded-full inline-block">
                            <span class="inline-block align-text-bottom">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                class="w-4 h-4 text-white"
                              >
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
