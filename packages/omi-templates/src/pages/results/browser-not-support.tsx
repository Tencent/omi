export function BrowserNotSupport() {
  return (
    <div class="flex items-center justify-center" style="height:calc(100vh - 58px)">
      <div class="p-8  text-center">
        <div class="mb-4 text-primary">
          <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="140" fill="none">
            <g>
              <path
                fill="#97A3B7"
                fill-rule="evenodd"
                d="m144.569 105.61-48 27.712-48-27.712V83.712L96.57 56l48 27.713z"
                clip-rule="evenodd"
              ></path>
              <g opacity=".5">
                <path fill="#E3E6EB" d="M-3 33.999h80v60H-3z"></path>
              </g>
              <g opacity=".5">
                <path fill="#E3E6EB" d="M97 97.999h80v60H97z"></path>
              </g>
            </g>
            <mask id="a" width="86" height="69" x="53" y="16" maskUnits="userSpaceOnUse" style="mask-type: alpha;">
              <path
                fill="currentcolor"
                fill-rule="evenodd"
                d="m113.357 42.715 16.472-9.51a35.962 35.962 0 0 0-3.186-2.043c-5.375-3.104-11.92-5.147-18.885-6.139-4.209-5.562-10.18-8.898-17.324-8.828-6.755.087-15.486 5.746-21.507 14.365-.831.415-1.642.85-2.432 1.306-14.378 8.3-16.94 20.75-7.473 30.065-1.035-5.805-.31-10.865 3.101-16.215-.058.632-.21 4.427-.232 5.067-.67 18.914 15.02 34.058 26.139 33.928 8.45-.1 15.565-5.013 20.319-12.631 6.214-1.231 12.089-3.294 17.094-6.183 13.476-7.78 16.567-19.182 9.104-28.268l-16.599 9.582c1.762 3.654.049 7.823-5.078 10.783-5.126 2.96-12.347 3.948-18.677 2.931-2.843-.469-5.522-1.342-7.74-2.622l-.049-.028zM78.655 53.773c-6.127-3.977-5.683-10.226 1.195-14.197 6.878-3.97 17.703-4.226 24.591-.69zM93.556 18.17c4.61-.04 8.728 2.405 11.94 6.57-8.447-.918-17.384-.326-25.523 1.765 3.699-5.124 8.471-8.275 13.583-8.335m-2.232 63.447c-5.853.068-10.971-3.926-14.377-10.332 8.845 2.342 18.925 2.775 28.427 1.317-3.756 5.52-8.714 8.951-14.05 9.015"
                clip-rule="evenodd"
              ></path>
            </mask>
            <g>
              <path
                fill="currentcolor"
                fill-rule="evenodd"
                d="m113.357 42.715 16.472-9.51a35.962 35.962 0 0 0-3.186-2.043c-5.375-3.104-11.92-5.147-18.885-6.139-4.209-5.562-10.18-8.898-17.324-8.828-6.755.087-15.486 5.746-21.507 14.365-.831.415-1.642.85-2.432 1.306-14.378 8.3-16.94 20.75-7.473 30.065-1.035-5.805-.31-10.865 3.101-16.215-.058.632-.21 4.427-.232 5.067-.67 18.914 15.02 34.058 26.139 33.928 8.45-.1 15.565-5.013 20.319-12.631 6.214-1.231 12.089-3.294 17.094-6.183 13.476-7.78 16.567-19.182 9.104-28.268l-16.599 9.582c1.762 3.654.049 7.823-5.078 10.783-5.126 2.96-12.347 3.948-18.677 2.931-2.843-.469-5.522-1.342-7.74-2.622l-.049-.028zM78.655 53.773c-6.127-3.977-5.683-10.226 1.195-14.197 6.878-3.97 17.703-4.226 24.591-.69zM93.556 18.17c4.61-.04 8.728 2.405 11.94 6.57-8.447-.918-17.384-.326-25.523 1.765 3.699-5.124 8.471-8.275 13.583-8.335m-2.232 63.447c-5.853.068-10.971-3.926-14.377-10.332 8.845 2.342 18.925 2.775 28.427 1.317-3.756 5.52-8.714 8.951-14.05 9.015"
                clip-rule="evenodd"
              ></path>
              <g opacity=".3">
                <path fill="#97A3B7" d="m96.569 56 48 27.712v55.426l-48 27.712-48-27.712V83.712z"></path>
              </g>
            </g>
            <circle cx="155" cy="78" r="22" fill="#fff" stroke="#000" transform="rotate(180 155 78)"></circle>
            <path stroke="#000" d="M155 83V65"></path>
            <path
              fill="#C4C4C4"
              stroke="#000"
              stroke-linejoin="round"
              stroke-width="2"
              d="M155 87h.004v.004H155z"
            ></path>
            <path stroke="#fff" stroke-width="2" d="M96.57 112V88M86.57 98l10-10 9.999 10"></path>
          </svg>
        </div>

        <h2 class="text-2xl font-bold mb-2 text-gray-700 dark:text-foreground">浏览器版本低</h2>

        <p class="text-gray-600 mb-6 dark:text-foreground">抱歉，您正在使用的浏览器版本过低，无法打开当前网页。</p>

        <div class="flex justify-center space-x-4">
          <a href="#/" class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/85">
            返回首页
          </a>
        </div>

        <div class="container mx-auto my-10">
          <div class="p-8 rounded-lg shadow-md bg-card text-card-foreground">
            <h2 class="text-xl font-bold mb-6">OMI Templates 推荐以下主流浏览器</h2>
            <div class="grid grid-cols-4 gap-6">
              <div class="text-center">
                <svg
                  class="mx-auto mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="21.17" x2="12" y1="8" y2="8" />
                  <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                  <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
                </svg>
                <p>Chrome</p>
              </div>
              <div class="text-center">
                <svg
                  viewBox="0 0 512 512"
                  class="mx-auto mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  width="32"
                  height="32"
                >
                  <path d="M481.92,134.48C440.87,54.18,352.26,8,255.91,8,137.05,8,37.51,91.68,13.47,203.66c26-46.49,86.22-79.14,149.46-79.14,79.27,0,121.09,48.93,122.25,50.18,22,23.8,33,50.39,33,83.1,0,10.4-5.31,25.82-15.11,38.57-1.57,2-6.39,4.84-6.39,11,0,5.06,3.29,9.92,9.14,14,27.86,19.37,80.37,16.81,80.51,16.81A115.39,115.39,0,0,0,444.94,322a118.92,118.92,0,0,0,58.95-102.44C504.39,176.13,488.39,147.26,481.92,134.48ZM212.77,475.67a154.88,154.88,0,0,1-46.64-45c-32.94-47.42-34.24-95.6-20.1-136A155.5,155.5,0,0,1,203,215.75c59-45.2,94.84-5.65,99.06-1a80,80,0,0,0-4.89-10.14c-9.24-15.93-24-36.41-56.56-53.51-33.72-17.69-70.59-18.59-77.64-18.59-38.71,0-77.9,13-107.53,35.69C35.68,183.3,12.77,208.72,8.6,243c-1.08,12.31-2.75,62.8,23,118.27a248,248,0,0,0,248.3,141.61C241.78,496.26,214.05,476.24,212.77,475.67Zm250.72-98.33a7.76,7.76,0,0,0-7.92-.23,181.66,181.66,0,0,1-20.41,9.12,197.54,197.54,0,0,1-69.55,12.52c-91.67,0-171.52-63.06-171.52-144A61.12,61.12,0,0,1,200.61,228,168.72,168.72,0,0,0,161.85,278c-14.92,29.37-33,88.13,13.33,151.66,6.51,8.91,23,30,56,47.67,23.57,12.65,49,19.61,71.7,19.61,35.14,0,115.43-33.44,163-108.87A7.75,7.75,0,0,0,463.49,377.34Z" />
                </svg>

                <p>Edge</p>
              </div>
              <div class="text-center">
                <svg
                  role="img"
                  class="mx-auto mb-2"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Safari</title>
                  <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-.75c6.213 0 11.25-5.037 11.25-11.25S18.213.75 12 .75.75 5.787.75 12 5.787 23.25 12 23.25zM12 2a.25.25 0 0 1 .25.25v1a.25.25 0 1 1-.5 0v-1A.25.25 0 0 1 12 2zm0 18.5a.25.25 0 0 1 .25.25v1a.25.25 0 1 1-.5 0v-1a.25.25 0 0 1 .25-.25zm7.071-15.571a.25.25 0 0 1 0 .353l-.707.708a.25.25 0 0 1-.354-.354l.708-.707a.25.25 0 0 1 .353 0zM5.99 18.01a.25.25 0 0 1 0 .354l-.708.707a.25.25 0 1 1-.353-.353l.707-.708a.25.25 0 0 1 .354 0zM4.929 4.93a.25.25 0 0 1 .353 0l.708.707a.25.25 0 0 1-.354.354l-.707-.708a.25.25 0 0 1 0-.353zM18.01 18.01a.25.25 0 0 1 .354 0l.707.708a.25.25 0 1 1-.353.353l-.708-.707a.25.25 0 0 1 0-.354zM2 12a.25.25 0 0 1 .25-.25h1a.25.25 0 1 1 0 .5h-1A.25.25 0 0 1 2 12zm18.5 0a.25.25 0 0 1 .25-.25h1a.25.25 0 1 1 0 .5h-1a.25.25 0 0 1-.25-.25zm-4.593-9.205a.25.25 0 0 1 .133.328l-.391.92a.25.25 0 1 1-.46-.195l.39-.92a.25.25 0 0 1 .328-.133zM8.68 19.825a.25.25 0 0 1 .132.327l-.39.92a.25.25 0 0 1-.46-.195l.39-.92a.25.25 0 0 1 .328-.133zM21.272 8.253a.25.25 0 0 1-.138.325l-.927.375a.25.25 0 1 1-.188-.464l.927-.374a.25.25 0 0 1 .326.138zm-17.153 6.93a.25.25 0 0 1-.138.326l-.927.374a.25.25 0 1 1-.188-.463l.927-.375a.25.25 0 0 1 .326.138zM8.254 2.728a.25.25 0 0 1 .325.138l.375.927a.25.25 0 0 1-.464.188l-.374-.927a.25.25 0 0 1 .138-.326zm6.93 17.153a.25.25 0 0 1 .326.138l.374.927a.25.25 0 1 1-.463.188l-.375-.927a.25.25 0 0 1 .138-.326zM2.795 8.093a.25.25 0 0 1 .328-.133l.92.391a.25.25 0 0 1-.195.46l-.92-.39a.25.25 0 0 1-.133-.328zm17.03 7.228a.25.25 0 0 1 .327-.132l.92.39a.25.25 0 1 1-.195.46l-.92-.39a.25.25 0 0 1-.133-.328zM12.879 12.879L11.12 11.12l-4.141 5.9 5.899-4.142zm6.192-7.95l-5.834 8.308-8.308 5.834 5.834-8.308 8.308-5.834z" />
                </svg>

                <p>Safari</p>
              </div>
              <div class="text-center">
                <svg
                  role="img"
                  class="mx-auto mb-2"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Firefox</title>
                  <path d="M20.452 3.445a11.002 11.002 0 00-2.482-1.908C16.944.997 15.098.093 12.477.032c-.734-.017-1.457.03-2.174.144-.72.114-1.398.292-2.118.56-1.017.377-1.996.975-2.574 1.554.583-.349 1.476-.733 2.55-.992a10.083 10.083 0 013.729-.167c2.341.34 4.178 1.381 5.48 2.625a8.066 8.066 0 011.298 1.587c1.468 2.382 1.33 5.376.184 7.142-.85 1.312-2.67 2.544-4.37 2.53-.583-.023-1.438-.152-2.25-.566-2.629-1.343-3.021-4.688-1.118-6.306-.632-.136-1.82.13-2.646 1.363-.742 1.107-.7 2.816-.242 4.028a6.473 6.473 0 01-.59-1.895 7.695 7.695 0 01.416-3.845A8.212 8.212 0 019.45 5.399c.896-1.069 1.908-1.72 2.75-2.005-.54-.471-1.411-.738-2.421-.767C8.31 2.583 6.327 3.061 4.7 4.41a8.148 8.148 0 00-1.976 2.414c-.455.836-.691 1.659-.697 1.678.122-1.445.704-2.994 1.248-4.055-.79.413-1.827 1.668-2.41 3.042C.095 9.37-.2 11.608.14 13.989c.966 5.668 5.9 9.982 11.843 9.982C18.62 23.971 24 18.591 24 11.956a11.93 11.93 0 00-3.548-8.511z" />
                </svg>

                <p>Firefox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
