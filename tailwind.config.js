const {
  screens
} = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xxxsm': '200px',
      'xxsm': '340px',
      'xsm': '480px',
      // ...screens
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      '2lg': '1150px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'ghdata-green':'#38F49A',
        'ghdata-green-secondary': '#38F44A',
      },

      fontSize: {
        'ghdata-xsm': '14px',
        'ghdata-sm': '16px',
        'ghdata-md-sm': '18px',
        'ghdata-md': '20px',
        'ghdata-lg': '24px',


      },

      fontFamily: {
        
      },

      minHeight: (theme) => ({
        ...theme('spacing'),
        "ghdata-px-332": "332px",
        "h-ghdata-px-250": "250px"
      }),

      minWidth: (theme) => ({
        ...theme('spacing'),
      }),

      height: {
        'ghdata-px-70': '70px',
        'ghdata-px-49': '49px',
        'ghdata-px-60': '60px',
        
      },

      width: {
        'ghdata-px-180': '180px',
        'ghdata-px-189': '189px',
        'ghdata-px-173': '173px',
        'ghdata-px-150': '150px',
        'ghdata-px-580': '450px',
        'ghdata-pct-13': '13%',
        'ghdata-pct-19': '19%'
      },

      scale: {
        'ghdata-scale-btn': '.98'
      },

      borderRadius: {
        'ghdata-px-12': '12px',
      },

      backgroundImage: {
        "ghdata-section-gradient":
          "linear-gradient(0deg, #38F49A 100%, #359E6C 100%)",
      },
      

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}