type caseType = {
    company: string,
    logoUrl: string,
    caseUrl: string,
    bgUrl: string
}

const nav1: string[] = [
    "产品",
    "解决方案",
    "资源",
    "套餐和定价"
]

const cases: caseType[] = [
    {
        company: "腾讯",
        logoUrl: "https://cdn.meeting.tencent.com/pro/NzM2MjkxZGMtMzAyMy00YTAyLThhMjUtYTEyNTAwMTAwNTgz",
        caseUrl: "https://meeting.tencent.com/customer/tencentrooms.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/MTc3MjFhZWEtYjVkYi00MjQ2LWFkMGItNzEyMmE0NjUwNTVi"
    },
    {
        company: "阅文集团",
        logoUrl: "https://cdn.meeting.tencent.com/pro/MTIzMWNhZTEtZWFhMS00MmNlLTkyNTUtMTM4YzJhMGRjOTJj",
        caseUrl: "https://meeting.tencent.com/customer/yewenjituan.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/YTAzNDcwM2EtYzdiNC00NzhkLWFmMDAtYjkzZjIyODY3OGMy"
    },
    {
        company: "卫材（中国）",
        logoUrl: "https://cdn.meeting.tencent.com/pro/Y2IyODEyYTYtMDZiNi00MmE2LWIzYWUtYmFlZThhYTljN2Y5",
        caseUrl: "https://meeting.tencent.com/customer/weicaizhongguo.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/NTQ2NzYwZTUtY2E4ZS00NDc1LWJjOTgtZGFmYWNmMjEwZjY1"
    },
    {
        company: "中裕能源",
        logoUrl: "https://cdn.meeting.tencent.com/pro/M2MwZjQxYTUtOTNhZS00MWVkLWFkYzAtMDExODhhOWUyMDcx",
        caseUrl: "https://meeting.tencent.com/customer/zhongyuranqi.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/ZTk1NjkxMDAtNWU2Zi00MmYwLWExMWYtZDY3ZmEyZjI2ZDEy"
    },
    {
        company: "美的集团",
        logoUrl: "https://cdn.meeting.tencent.com/pro/YTYxZWY0MWUtNmQwYS00ZDQ4LWE4ZjctMjBmNDk1YWNlNTBi",
        caseUrl: "https://meeting.tencent.com/customer/meidi.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/YjI1ODE1YWEtNjY2Mi00YmE1LTkwZjctYjI4MGY3YzNlMTc3"
    },
    {
        company: "深圳大学",
        logoUrl: "https://cdn.meeting.tencent.com/pro/NTI0ODZiOTYtZDkyOC00YWFjLWIxMGQtZDNlNjIwYWVjNWJj",
        caseUrl: "https://meeting.tencent.com/customer/shenzhendaxue.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/ZWI5YmM4M2MtYmU4Yi00NDBiLTk5OTEtZjhiODMwYzU0MzJm"
    },
    {
        company: "腾讯",
        logoUrl: "https://cdn.meeting.tencent.com/pro/NzM2MjkxZGMtMzAyMy00YTAyLThhMjUtYTEyNTAwMTAwNTgz",
        caseUrl: "https://meeting.tencent.com/customer/tencentrooms.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/MTc3MjFhZWEtYjVkYi00MjQ2LWFkMGItNzEyMmE0NjUwNTVi"
    },
    {
        company: "阅文集团",
        logoUrl: "https://cdn.meeting.tencent.com/pro/MTIzMWNhZTEtZWFhMS00MmNlLTkyNTUtMTM4YzJhMGRjOTJj",
        caseUrl: "https://meeting.tencent.com/customer/yewenjituan.html",
        bgUrl: "https://cdn.meeting.tencent.com/pro/YTAzNDcwM2EtYzdiNC00NzhkLWFmMDAtYjkzZjIyODY3OGMy"
    }
]
export function Meeting() {
    return (
        <>
            <header class="shadow-sm dark:shadow-gray-700 mt-4">
                <div class="flex max-w-7xl mx-auto pt-2 pb-3 lg:justify-normal justify-between px-1 lg:px-0 sm:px-3">
                    <div class="flex items-center cursor-pointer">
                        <img class=" w-8 h-8" src="https://omi.cdn-go.cn/admin/latest/home/omi.svg" alt="OMI Logo" />
                        <div class="ml-1 text-xl font-semibold text-green-500">OMI Meeing</div>
                    </div>
                    <i class="t-icon t-icon-bulletpoint text-xl sm:text-2xl lg:hidden"></i>
                    <div class="flex-1 lg:pl-16 lg:flex hidden">
                        <div class="lg:flex items-center">
                            {
                                nav1.map((item, key) => <div class="cursor-pointer ml-6 hover:text-blue-600" key={key}>{item}</div>)
                            }
                        </div>
                        <div class="lg:flex items-center justify-end flex-1">
                            <div class="ml-6 cursor-pointer hover:text-blue-600">联系我们</div>
                            <div class="ml-6 cursor-pointer hover:text-blue-600">登录/注册</div>
                            <div class="ml-6 cursor-pointer rounded-md bg-blue-600 hover:bg-blue-600/90 text-white px-5 py-2">下载中心</div>
                        </div>
                    </div>
                </div>
            </header>
            <main class="text-sm sm:text-base">
                <div class="flex lg:flex-row flex-col-reverse max-w-7xl mx-auto py-10 px-2 lg:px-0">
                    <div class="lg:w-1/2 w-full flex flex-col justify-center pr-10 text-center lg:text-left mt-5 lg:mt-0">
                        <h2 class="text-xl sm:text-2xl lg:text-3xl">OMI Meeting + 混元大模型助力职场<span class="text-blue-600 ml-1">沟通效果</span></h2>
                        <p class="mt-2 mb-4">OMI Meeting不仅是选择一款产品，更是选择一个高效、智能的未来工作方式</p>
                        <a href="/#/meeting" class="text-blue-600 font-semibold hover:text-blue-600/90 w-fit mx-auto lg:mx-0">了解OMI Meeting</a>
                    </div>
                    <div class="lg:w-1/2 w-full rounded-md overflow-clip">
                        <video src="https://cdn-portal.hunyuan.tencent.com/public/40e442ac789855319f62.mp4" autoPlay loop muted></video>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-indigo-100 to-blue-400 dark:from-indigo-900 dark:to-blue-800 pt-16 pb-10">
                    <div class="flex lg:flex-row flex-col max-w-7xl mx-auto">
                        <div class="lg:w-1/2 w-full sm:flex font-semibold text-gray-600">
                            <div class="sm:w-1/2 flex flex-col justify-between items-center">
                                <div class="w-fit flex flex-col items-center rounded-lg lg:p-3 p-2 bg-gradient-to-br from-blue-500/30 to-transparent backdrop-blur-sm sm:mb-0 mb-5">
                                    <i class="t-icon t-icon-chat-heart absolute lg:-top-5 -top-4 bg-gradient-to-br from-blue-300 from-10% to-blue-600 lg:text-2xl text-lg text-white p-2 rounded-xl"></i>
                                    <div class="flex items-center bg-white lg:py-5 py-3 lg:px-7 px-4 rounded-lg shadow w-full">
                                        <i class="t-icon t-icon-animation-1 text-blue-500 mr-2"></i>
                                        <p class="text-xs lg:text-base">Make communication simpler</p>
                                    </div>
                                </div>
                                <img src="https://cdn.meeting.tencent.com/pro/OTVjNDkxYTMtNmQ5Mi00ZjNjLWJlYzMtNDcxZjAxNzU2YTdi.png" alt="" />
                            </div>
                            <div class="sm:w-1/2 flex sm:flex-col flex-col-reverse justify-between items-center mt-3 sm:mt-0">
                                <div class="flex flex-col lg:-space-y-12 sm:-space-y-16 lg:space-x-8 sm:space-x-7 -space-y-12 space-x-10">
                                    <img class="w-40" src="https://cdn.meeting.tencent.com/assets/next-website/_next/static/images/webinardbf-b11114a7afd0e024.png" alt="" />
                                    <img class="w-56 sm:w-auto" src="https://cdn.meeting.tencent.com/pro/ZTI1ZGM0ZjktOTEyZi00YmE5LTk4NTYtNWE0OGY2OTY1NWRl" alt="" />
                                </div>
                                <div class="w-fit flex flex-col items-center mt-10 rounded-lg lg:p-3 p-2 bg-gradient-to-br from-blue-500/30 to-blue-200/20 backdrop-blur-sm mb-5 sm:mb-0">
                                    <i class="t-icon t-icon-mail absolute lg:-top-5 -top-4 bg-gradient-to-br from-blue-300 from-10% to-blue-600 lg:text-2xl text-lg text-white p-2 rounded-xl"></i>
                                    <div class="flex items-center bg-white lg:py-5 py-3 lg:px-7 px-4 rounded-lg shadow">
                                        <i class="t-icon t-icon-animation-1 text-blue-500 mr-2"></i>
                                        <p class="text-xs lg:text-base text-nowrap">Make meetings more efficient</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/2 w-full pl-10 pr-5 flex flex-col justify-center mt-5 lg:mt-0 text-center lg:text-left">
                            <h2 class="text-xl sm:text-2xl lg:text-3xl">OMI Meeting，让每一次会议都成为推动项目向前的<span class="text-blue-600 ml-1">有力一步</span></h2>
                            <p class="mt-2 mb-4">立即体验OMI Meeting，让沟通和管理变得前所未有的简单和高效。</p>
                            <a href="/#/meeting" class="text-blue-600 font-semibold hover:text-blue-600/90 w-fit mx-auto lg:mx-0">了解OMI Meeting</a>
                        </div>
                    </div>
                </div>

                <div class="max-w-7xl mx-auto py-10">
                    <h2 class="text-center text-xl sm:text-2xl lg:text-3xl">客户案例</h2>
                    <ol class="flex flex-wrap justify-center pt-5 pb-4">
                        {
                            cases.map((item, key) => <li key={key} class=" w-[80%] sm:w-2/5 lg:w-1/5 flex flex-col sm:mx-3 mx-1 my-2 rounded-lg overflow-clip shadow-md group bg-gradient-to-br dark:from-blue-200 dark:to-white">
                                <a class="flex flex-col items-center" href={item.caseUrl} target="_blank">
                                    <div class="w-full h-36 bg-no-repeat bg-[length:100%] bg-center transition-all duration-500 group-hover:bg-[length:150%]" style={`background-image: url(${item.bgUrl})`}></div>
                                    <div class="py-5">
                                        <div class="w-[120px] h-[30px]">
                                            <img class="max-w-full max-h-full mx-auto" src={item.logoUrl} alt={item.company} />
                                        </div>
                                    </div>
                                </a>
                            </li>)
                        }
                    </ol>
                    <a href="https://meeting.tencent.com/customers/" target="_blank" class="mx-auto block w-fit text-white transition-all bg-blue-500 px-4 py-2 rounded hover:bg-blue-500/80 dark:bg-blue-500/20 dark:text-blue-500 dark:border-blue-500 dark:border dark:hover:bg-blue-500 dark:hover:text-white">更多案例</a>
                </div>

                <div class="bg-gradient-to-bl from-indigo-100 to-blue-400 dark:from-indigo-900 dark:to-blue-800 pt-10">
                    <div class="sm:flex max-w-7xl mx-auto relative">
                        <div class="sm:w-1/2 sm:flex flex-col justify-center text-center sm:static absolute w-full z-10">
                            <h2 class="lg:text-3xl sm:text-2xl text-xl">准备好使用OMI Meeting了吗？</h2>
                            <div class="flex justify-center mt-5">
                                <div class="px-5 py-1 rounded text-white bg-blue-500 mr-5 cursor-pointer hover:bg-blue-500/80">联系我们</div>
                                <div class="px-5 py-1 rounded text-blue-500 border-blue-500 border cursor-pointer hover:bg-blue-500/30">下载使用</div>
                            </div>
                        </div>
                        <div class="bg-contain bg-bottom sm:w-1/2 sm:h-96 h-36 bg-no-repeat opacity-80 sm:opacity-100" style={"background-image:url(https://cdn.meeting.tencent.com/assets/next-website/_next/static/images/bg-bottom474-0deb54e6958be07d.png)"}>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
