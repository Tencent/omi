export function Forbidden() {
  return (
    <div class="flex items-center justify-center" style="height:calc(100vh - 58px)">
      <div class="p-8  text-center">
        <div class="mb-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="140" fill="none">
            <g mask="url(#mask0_17_619)">
              <path fill="#97A3B7" d="M30 62h88v60H30z"></path>
              <g opacity=".5">
                <path fill="#E3E6EB" d="M12 84h80v60H12z"></path>
              </g>
              <g opacity=".5">
                <path fill="#E3E6EB" d="M80 54h80v60H80z"></path>
              </g>
              <path fill="#fff" d="M46 105h32v2H46zM46 98h32v2H46zM46 88h16v2H46z"></path>
            </g>
            <path fill="currentcolor" d="M63 20h88v10H63z" opacity=".9"></path>
            <mask id="a" width="88" height="50" x="63" y="30" maskUnits="userSpaceOnUse" style="mask-type: alpha;">
              <path fill="currentcolor" d="M63 30h88v50H63z"></path>
            </mask>
            <g mask="url(#a)">
              <path fill="currentcolor" d="M63 30h88v50H63z"></path>
              <g filter="url(#filter2_f_17_619)" opacity=".3">
                <path fill="#97A3B7" d="M30 62h88v60H30z"></path>
              </g>
            </g>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="m95.686 40.858 10.278 10.277A4.03 4.03 0 0 1 107 51c2.213 0 4 1.786 4 4 0 .357-.047.704-.134 1.033l10.276 10.28-2.828 2.829-4.598-4.597A17.103 17.103 0 0 1 107 65.909c-7.273 0-13.484-4.524-16-10.91a17.29 17.29 0 0 1 5.696-7.472l-3.838-3.84zM99 55a8.003 8.003 0 0 0 12.063 6.892l-3.029-3.026c-.33.087-.676.134-1.034.134-2.213 0-4-1.787-4-4 0-.358.047-.704.134-1.034l-3.027-3.027A7.96 7.96 0 0 0 99 54.999m8-10.91c7.273 0 13.484 4.524 16 10.91a17.273 17.273 0 0 1-4.166 6.177l-4.105-4.105a8.003 8.003 0 0 0-9.801-9.8l-2.55-2.551c1.47-.41 3.02-.63 4.622-.63"
              clip-rule="evenodd"
            ></path>
            <path fill="#fff" d="M68 24h2v2h-2zM74 24h2v2h-2zM80 24h66v2H80z"></path>
            <path fill="#fff" stroke="#000" d="m157 54 24.249 42h-48.498z"></path>
            <path stroke="#000" d="M157 89V71"></path>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2 text-gray-700 dark:text-foreground">项目已创建成功</h2>

        <p class="text-gray-600 mb-6 dark:text-foreground">可以联系负责人分发应用</p>

        <div class="flex justify-center space-x-4">
          <a href="#/" class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/85">
            返回首页
          </a>
          <button class="bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded flex items-center">
            查看进度
          </button>
        </div>
      </div>
    </div>
  )
}
