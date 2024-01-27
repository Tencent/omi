import '../components/md-docs'
import testContent from '@/assets/test.md?raw'

export function ProductDocs() {
  return (
    <div class="flex min-h-full bg-white dark:bg-zinc-800">
      <div class="flex w-full flex-col">
        <div class="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
          <div class="hidden lg:relative lg:block lg:flex-none">
            <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>
            <div class="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"></div>
            <div class="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block"></div>
            <div class="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
              <nav class="text-base lg:text-sm">
                <ul role="list" class="space-y-9">
                  <li>
                    <h2 class="font-display font-medium text-slate-900 dark:text-white">Introduction</h2>
                    <ul
                      role="list"
                      class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                    >
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/"
                        >
                          Getting started
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-primary before:bg-primary brightness-125"
                          href="/docs/installation"
                        >
                          Installation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2 class="font-display font-medium text-slate-900 dark:text-white">Core concepts</h2>
                    <ul
                      role="list"
                      class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                    >
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/understanding-caching"
                        >
                          Understanding caching
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/predicting-user-behavior"
                        >
                          Predicting user behavior
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/basics-of-time-travel"
                        >
                          Basics of time-travel
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/introduction-to-string-theory"
                        >
                          Introduction to string theory
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/the-butterfly-effect"
                        >
                          The butterfly effect
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2 class="font-display font-medium text-slate-900 dark:text-white">Advanced guides</h2>
                    <ul
                      role="list"
                      class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                    >
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/writing-plugins"
                        >
                          Writing plugins
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/neuralink-integration"
                        >
                          Neuralink integration
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/temporal-paradoxes"
                        >
                          Temporal paradoxes
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/testing"
                        >
                          Testing
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/compile-time-caching"
                        >
                          Compile-time caching
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/predictive-data-generation"
                        >
                          Predictive data generation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2 class="font-display font-medium text-slate-900 dark:text-white">API reference</h2>
                    <ul
                      role="list"
                      class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                    >
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/cacheadvance-predict"
                        >
                          CacheAdvance.predict()
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/cacheadvance-flush"
                        >
                          CacheAdvance.flush()
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/cacheadvance-revert"
                        >
                          CacheAdvance.revert()
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/cacheadvance-regret"
                        >
                          CacheAdvance.regret()
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2 class="font-display font-medium text-slate-900 dark:text-white">Contributing</h2>
                    <ul
                      role="list"
                      class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                    >
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/how-to-contribute"
                        >
                          How to contribute
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/architecture-guide"
                        >
                          Architecture guide
                        </a>
                      </li>
                      <li class="relative">
                        <a
                          class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          href="/docs/design-principles"
                        >
                          Design principles
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
            <article>
              <header class="mb-9 space-y-1">
                <p class="font-display text-sm font-medium text-primary brightness-125">Introduction</p>
                <h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Installation</h1>
              </header>

              <md-docs content={testContent}></md-docs>
            </article>
            <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
              <div>
                <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">Previous</dt>
                <dd class="mt-1">
                  <a
                    class="flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 flex-row-reverse"
                    href="/"
                  >
                    Getting started
                    <svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 flex-none fill-current -scale-x-100">
                      <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path>
                    </svg>
                  </a>
                </dd>
              </div>
              <div class="ml-auto text-right">
                <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">Next</dt>
                <dd class="mt-1">
                  <a
                    class="flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/docs/understanding-caching"
                  >
                    Understanding caching
                    <svg viewBox="0 0 16 16" aria-hidden="true" class="h-4 w-4 flex-none fill-current">
                      <path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z"></path>
                    </svg>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div class="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
            <nav aria-labelledby="on-this-page-title" class="w-56">
              <h2 id="on-this-page-title" class="font-display text-sm font-medium text-slate-900 dark:text-white">
                On this page
              </h2>
              <ol role="list" class="mt-4 space-y-3 text-sm">
                <li>
                  <h3>
                    <a class="text-primary brightness-125" href="#quis-vel-iste-dicta">
                      Quis vel iste dicta
                    </a>
                  </h3>
                  <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                    <li>
                      <a class="hover:text-slate-600 dark:hover:text-slate-300" href="#et-pariatur-ab-quas">
                        Et pariatur ab quas
                      </a>
                    </li>
                    <li>
                      <a class="hover:text-slate-600 dark:hover:text-slate-300" href="#natus-aspernatur-iste">
                        Natus aspernatur iste
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  <h3>
                    <a
                      class="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                      href="#quos-porro-ut-molestiae"
                    >
                      Quos porro ut molestiae
                    </a>
                  </h3>
                  <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                    <li>
                      <a class="hover:text-slate-600 dark:hover:text-slate-300" href="#voluptatem-quas-possimus">
                        Voluptatem quas possimus
                      </a>
                    </li>
                    <li>
                      <a class="hover:text-slate-600 dark:hover:text-slate-300" href="#id-vitae-minima">
                        Id vitae minima
                      </a>
                    </li>
                  </ol>
                </li>
                <li>
                  <h3>
                    <a
                      class="font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                      href="#vitae-laborum-maiores"
                    >
                      Vitae laborum maiores
                    </a>
                  </h3>
                  <ol role="list" class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                    <li>
                      <a class="hover:text-slate-600 dark:hover:text-slate-300" href="#corporis-exercitationem">
                        Corporis exercitationem
                      </a>
                    </li>
                    <li>
                      <a class="hover:text-slate-600 dark:hover:text-slate-300" href="#reprehenderit-magni">
                        Reprehenderit magni
                      </a>
                    </li>
                  </ol>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
