import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'grid grid-cols-1 space-y-3 mb-3',
        label: 'block text-2xl text-slate-500',
        message:
          'border border-red-100 border-l-4 border-l-red-600 text-red-600 p-3 uppercase text-sm font-bold text-center my-1',
        input: 'w-full mb-1 bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400',
      },
      submit: {
        input:
          '$reset bg-cyan-400 hover:bg-cyan-600 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer',
      },
    }),
  },
}

export default config
