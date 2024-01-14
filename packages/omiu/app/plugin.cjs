/*
--------------------------------------------------------------------------
Tailwind Elements is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

const plugin = require('tailwindcss/plugin')

module.exports = plugin(() => {}, {
  theme: {
    extend: {
      colors: {
        success: {
          DEFAULT: '#14A44D',
          50: '#EAFCF2',
          100: '#D6FAE4',
          200: '#ACF5C9',
          300: '#83F0AE',
          400: '#59EA93',
          500: '#1CE26B',
          600: '#118C42',
          700: '#0E7537',
          800: '#0C5D2C',
          900: '#094621',
        },
        danger: {
          DEFAULT: '#DC4C64',
          50: '#FCF2F4',
          100: '#FAE5E9',
          200: '#F5CCD3',
          300: '#F0B2BD',
          400: '#EB99A6',
          500: '#E37285',
          600: '#D42A46',
          700: '#B0233A',
          800: '#8D1C2F',
          900: '#6A1523',
        },
        warning: {
          DEFAULT: '#E4A11B',
          50: '#FDF8EF',
          100: '#FBF2DE',
          200: '#F7E4BE',
          300: '#F4D79D',
          400: '#F0C97D',
          500: '#EAB54C',
          600: '#C48A17',
          700: '#A37313',
          800: '#825C0F',
          900: '#62450B',
        },
        info: {
          DEFAULT: '#54B4D3',
          50: '#F3FAFC',
          100: '#E7F4F9',
          200: '#CEE9F2',
          300: '#B6DFEC',
          400: '#9ED4E6',
          500: '#79C4DC',
          600: '#34A4CA',
          700: '#2B89A8',
          800: '#236D86',
          900: '#1A5265',
        },
      },
    },
  },
})
