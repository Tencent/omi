
import  simple from '../assets/tdesign.svg'
import '../components/omiu/button.tsx'
export function Portfolio() {
    return (

    <div class="container mx-auto px-4 pt-8 mb-6 text-sm">
    <main class="px-4 sm:px-6 md:px-8 ">
        <section class="mt-12 md:mt-16">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold">我的作品</h2>
                <a class="text-sm font-medium text-primary hover:underline" href="#">
                    了解更多
                </a>
            </div>
            <div class="grid gap-8 md:grid-cols-2 mt-4 lg:grid-cols-3">
                <div class="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div class="flex flex-col items-center justify-center h-full p-6 text-center">
                        <img
                            src={simple}
                            width="400"
                            height="300"
                            alt="Project 1"
                            class="rounded-md"
                            style="aspect-ratio: 400 / 300; object-fit: cover;"
                        />
                        <div class="mt-4">
                            <h3 class="text-xl font-semibold">Project 1</h3>
                            <p class="text-gray-500">Description of Project 1</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div class="flex flex-col items-center justify-center h-full p-6 text-center">
                        <img
                            src={simple}
                            width="400"
                            height="300"
                            alt="Project 2"
                            class="rounded-md"
                            style="aspect-ratio: 400 / 300; object-fit: cover;"
                        />
                        <div class="mt-4">
                            <h3 class="text-xl font-semibold">Project 2</h3>
                            <p class="text-gray-500">Description of Project 2</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div class="flex flex-col items-center justify-center h-full p-6 text-center">
                        <img
                            src={simple}
                            width="400"
                            height="300"
                            alt="Project 3"
                            style="aspect-ratio: 400 / 300; object-fit: cover;"
                            class="rounded-md"
                        />
                        <div class="mt-4">
                            <h3 class="text-xl font-semibold">Project 3</h3>
                            <p class="text-gray-500">Description of Project 3</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div class="flex flex-col items-center justify-center h-full p-6 text-center">
                        <img
                            src={simple}
                            width="400"
                            height="300"
                            alt="Project 4"
                            class="rounded-md"
                            style="aspect-ratio: 400 / 300; object-fit: cover;"
                        />
                        <div class="mt-4">
                            <h3 class="text-xl font-semibold">Project 4</h3>
                            <p class="text-gray-500">Description of Project 4</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div class="flex flex-col items-center justify-center h-full p-6 text-center">
                        <img
                            src={simple}
                            width="400"
                            height="300"
                            alt="Project 5"
                            class="rounded-md"
                            style="aspect-ratio: 400 / 300; object-fit: cover;"
                        />
                        <div class="mt-4">
                            <h3 class="text-xl font-semibold">Project 5</h3>
                            <p class="text-gray-500">Description of Project 5</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-md border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                    <div class="flex flex-col items-center justify-center h-full p-6 text-center">
                        <img
                            src={simple}
                            width="400"
                            height="300"
                            alt="Project 6"
                            class="rounded-md"
                            style="aspect-ratio: 400 / 300; object-fit: cover;"
                        />
                        <div class="mt-4">
                            <h3 class="text-xl font-semibold">Project 6</h3>
                            <p class="text-gray-500">Description of Project 6</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
        <section class="mt-12 md:mt-16">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold">自我介绍</h2>
                <a class="text-sm font-medium text-primary hover:underline" href="#">
                    了解更多
                </a>
            </div>
            <div class="rounded-md border bg-card text-card-foreground shadow-sm mt-4" data-v0-t="card">
                <div class="grid gap-6 p-6 md:grid-cols-2">
                    <div>
                        <img
                            src={simple}
                            alt="About Me"
                            class="rounded-md w-full h-full"
                            style="aspect-ratio: 400 / 400; object-fit: cover;"
                        />
                    </div>
                    <div class="flex flex-col justify-center">
                        <h3 class="text-xl font-semibold">John Doe</h3>
                        <p class="text-gray-500">
                            I am a passionate web developer with a strong focus on creating beautiful and functional websites.
                            With years of experience, I have honed my skills in various technologies and frameworks to deliver
                            high-quality solutions.
                        </p>
                        <div class="mt-4">
                            <o-button theme="primary">与我联系</o-button>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-12 md:mt-16">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold">联系方式</h2>
               
            </div>
            <div class="rounded-md border bg-card text-card-foreground shadow-sm mt-4" data-v0-t="card">
                <div class="grid gap-6 p-6 md:grid-cols-2">
                    <div>
                        <h3 class="text-xl font-semibold">联系信息</h3>
                        <p class="text-gray-500 my-2">
                            如果有任何疑问或合作机会，请随时联系我。
                        </p>
                        <div class="mt-4 space-y-2 text-center">
                        <div class="flex items-center gap-1 justify-left">
                            <i class="flex items-center justify-center text-md  t-icon t-icon-mail w-8 h-8 text-primary"></i>
                            <span>john@example.com</span>
                        </div>
                        <div class="flex items-center gap-1 justify-left">
                            <i class="flex items-center justify-center text-md t-icon t-icon-call-1 w-8 h-8 text-primary"></i>
                            <span>+1 (123) 456-7890</span>
                        </div>
                        <div class="flex items-center gap-1 justify-left">
                            <i class="flex items-center justify-center text-md t-icon t-icon-map-aiming w-8 h-8 text-primary"></i>
                            <span>New York, USA</span>
                        </div>
                    </div>

                    </div>
                    <div>
                        <form class="grid gap-4">
                            <input
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Name"
                                type="text"
                            />
                            <input
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Email"
                                type="email"
                            />
                            <textarea
                                class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Message"
                            ></textarea>
                            <o-button theme="primary">发送消息</o-button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
   
</div>
    )
}
