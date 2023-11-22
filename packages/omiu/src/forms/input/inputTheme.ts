const InputTheme = {
  wrapper: 'relative',
  tagWrapper: 'flex items-center flex-wrap transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] p-[5px]',
  tagInput: 'w-[100px] py-[0.32rem] leading-[1.6] dark:text-gray-200 dark:placeholder:text-gray-200',
  input:
    'peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary',
  activeInput: 'placeholder:opacity-100',
  label:
    'pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate text-neutral-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary',
  activeLabel: 'scale-[0.8]',
  notch: 'group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none',
  notchLeading:
    'pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem]',
  activeNotchLeading: 'border-r-0',
  focusedNotchLeading: 'border-r-0',
  notchLeadingDefault: 'border-neutral-300 dark:border-neutral-600',
  focusedNotchLeadingDefault:
    'shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] border-primary dark:border-primary',
  notchLeadingWhite: 'border-neutral-200',
  focusedNotchLeadingWhite: 'shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] border-white',
  notchMiddle:
    'pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0',
  activeNotchMiddle: 'border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent',
  focusedNotchMiddle: 'border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent',
  notchMiddleDefault: 'border-neutral-300 dark:border-neutral-600',
  focusedNotchMiddleDefault: 'shadow-[0_1px_0_0_#3b71ca] border-primary dark:border-primary',
  notchMiddleWhite: 'border-neutral-200',
  focusedNotchMiddleWhite: 'shadow-[0_1px_0_0_#ffffff] border-white',
  notchTrailing:
    'pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem]',
  activeNotchTrailing: 'border-l-0',
  focusedNotchTrailing: 'border-l-0',
  notchTrailingDefault: 'border-neutral-300 dark:border-neutral-600',
  focusedNotchTrailingDefault:
    'shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] border-primary dark:border-primary',
  notchTrailingWhite: 'border-neutral-200',
  focusedNotchTrailingWhite: 'shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] border-white',
  counter: 'text-right leading-[1.6]',
  inputSizeLg: 'px-3 py-[0.32rem] leading-[2.15]',
  inputSizeBase: 'px-3 py-[0.32rem] leading-[1.6]',
  inputSizeSm: 'px-3 py-[0.33rem] text-xs leading-[1.5]',
  labelSizeLg: 'pt-[0.36rem] leading-[2.15] peer-focus:-translate-y-[1.15rem]',
  activeLabelSizeLg: '-translate-y-[1.15rem]',
  labelSizeBase: 'pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]',
  activeLabelSizeBase: '-translate-y-[0.9rem]',
  labelSizeSm: 'pt-[0.36rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem]',
  activeLabelSizeSm: '-translate-y-[0.75rem]',
}

export default InputTheme
