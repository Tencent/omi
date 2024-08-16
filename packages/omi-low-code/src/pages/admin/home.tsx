export function Home() {
  return (
    <div class="flex items-center justify-between mb-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
            1
          </div>
          <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
            2
          </div>
          <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
            3
          </div>
          <div class="bg-background shadow-md rounded p-4 dark:border h-40 text-5xl flex items-center justify-center">
            4
          </div>
        </div>

        <div class="grid grid-cols-4 gap-6 mb-6">
          <div class="md:col-span-3 col-span-4 bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
            5
          </div>
          <div class="md:col-span-1 col-span-4 bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
            6
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
            7
          </div>
          <div class="bg-background shadow-md rounded p-4 dark:border h-96 text-5xl flex items-center justify-center">
            8
          </div>
        </div>

        <div class="bg-background shadow-md rounded p-4 dark:border">
          <div class="flex justify-between items-center mb-4"></div>
          <div class="grid grid-cols-4 gap-6">
            <div class="md:col-span-3 col-span-4 text-5xl flex items-center justify-center">9</div>
            <div class="md:col-span-1 col-span-4 text-5xl flex items-center justify-center">10</div>
          </div>
        </div>
      </div>
    </div>
  )
}
