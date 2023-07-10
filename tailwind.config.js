/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        },
        'fade-out': {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' }
        },
        'slide-down-and-fade-in': {
          '0%': {
            opacity: '0%',
            transform: 'translateY(-30px) scale(0)'
          },
          '100%': {
            opacity: '100%',
            transform: 'translateY(0) scale(1)'
          }
        },
        'slide-up-and-fade-out': {
          '0%': {
            opacity: '100%',
            transform: 'translateY(0) scale(1)'
          },
          '100%': {
            opacity: '0%',
            transform: 'translateY(-30px) scale(0)'
          }
        },
        'dialog-show': {
          from: { opacity: 0.8, transform: 'translate(-50%, -40%) scale(0.9)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        'dialog-hide': {
          from: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          to: { opacity: 0, transform: 'translate(-50%, -40%) scale(0.9)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms cubic-bezier(0.05, 0.7, 0.1, 1)',
        'fade-out': 'fade-out 200ms cubic-bezier(0.3, 0, 0.8, 0.15)',
        'slide-down-and-fade-in': 'slide-down-and-fade-in 200ms cubic-bezier(0.05, 0.7, 0.1, 1)',
        'slide-up-and-fade-out': 'slide-up-and-fade-out 100ms cubic-bezier(0.3, 0, 0.8, 0.15)',
        'dialog-show': 'dialog-show 500ms cubic-bezier(0.05, 0.7, 0.1, 1)',
        'dialog-hide': 'dialog-hide 200ms cubic-bezier(0.3, 0, 0.8, 0.15)',
      },
      transitionDuration: {
        short1: '50ms',
        short2: '100ms',
        short3: '150ms',
        short4: '200ms',
        medium1: '250ms',
        medium2: '300ms',
        medium3: '350ms',
        medium4: '400ms',
        long1: '450ms',
        long2: '500ms',
        long3: '550ms',
        long4: '600ms',
        'extra-long1': '700ms',
        'extra-long2': '800ms',
        'extra-long3': '900ms',
        'extra-long4': '1000ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1.0)',
        'standard-decelerate': 'cubic-bezier(0, 0, 0, 1)',
        'standard-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
        emphasized: 'cubic-bezier(0.2, 0, 0, 1.0)',
        'emphasized-decelerate': 'cubic-bezier(0.05, 0.7, 0.1, 1)',
        'emphasized-accelerate': 'cubic-bezier(0.3, 0, 0.8, 0.15)',
      },
      boxShadow: {
        elevation1: '0 1px 2px 0 rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
        elevation2: '0 1px 2px 0 rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
        elevation3: '0 1px 3px 0 rgba(0,0,0,0.3), 0 4px 8px 3px rgba(0,0,0,0.15)',
        elevation4: '0 2px 3px 0 rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15)',
        elevation5: '0 4px 4px 0 rgba(0,0,0,0.3), 0 8px 12px 6px rgba(0,0,0,0.15)'
      },
      colors: {
        "light": {
          "primary": "#6750A4",
          "onPrimary": "#FFFFFF",
          "primaryContainer": "#EADDFF",
          "onPrimaryContainer": "#21005D",
          "primaryFixed": "#EADDFF",
          "onPrimaryFixed": "#21005D",
          "primaryFixedDim": "#D0BCFF",
          "onPrimaryFixedVariant": "#4F378B",
          "secondary": "#625B71",
          "onSecondary": "#FFFFFF",
          "secondaryContainer": "#E8DEF8",
          "onSecondaryContainer": "#1D192B",
          "secondaryFixed": "#E8DEF8",
          "onSecondaryFixed": "#1D192B",
          "secondaryFixedDim": "#CCC2DC",
          "onSecondaryFixedVariant": "#4A4458",
          "tertiary": "#7D5260",
          "onTertiary": "#FFFFFF",
          "tertiaryContainer": "#FFD8E4",
          "onTertiaryContainer": "#31111D",
          "tertiaryFixed": "#FFD8E4",
          "onTertiaryFixed": "#31111D",
          "tertiaryFixedDim": "#EFB8C8",
          "onTertiaryFixedVariant": "#633B48",
          "error": "#B3261E",
          "onError": "#FFFFFF",
          "errorContainer": "#F9DEDC",
          "onErrorContainer": "#410E0B",
          "outline": "#79747E",
          "background": "#FEF7FF",
          "onBackground": "#1D1B20",
          "surface": "#FEF7FF",
          "onSurface": "#1D1B20",
          "surfaceVariant": "#E7E0EC",
          "onSurfaceVariant": "#49454F",
          "inverseSurface": "#322F35",
          "inverseOnSurface": "#F5EFF7",
          "inversePrimary": "#D0BCFF",
          "shadow": "#000000",
          "surfaceTint": "#6750A4",
          "outlineVariant": "#CAC4D0",
          "scrim": "#000000",
          "surfaceContainerHighest": "#E6E0E9",
          "surfaceContainerHigh": "#ECE6F0",
          "surfaceContainer": "#F3EDF7",
          "surfaceContainerLow": "#F7F2FA",
          "surfaceContainerLowest": "#FFFFFF",
          "surfaceBright": "#FEF7FF",
          "surfaceDim": "#DED8E1"
        },
        "dark": {
          "primary": "#D0BCFF",
          "onPrimary": "#381E72",
          "primaryContainer": "#4F378B",
          "onPrimaryContainer": "#EADDFF",
          "primaryFixed": "#EADDFF",
          "onPrimaryFixed": "#21005D",
          "primaryFixedDim": "#D0BCFF",
          "onPrimaryFixedVariant": "#4F378B",
          "secondary": "#CCC2DC",
          "onSecondary": "#332D41",
          "secondaryContainer": "#4A4458",
          "onSecondaryContainer": "#E8DEF8",
          "secondaryFixed": "#E8DEF8",
          "onSecondaryFixed": "#1D192B",
          "secondaryFixedDim": "#CCC2DC",
          "onSecondaryFixedVariant": "#4A4458",
          "tertiary": "#EFB8C8",
          "onTertiary": "#492532",
          "tertiaryContainer": "#633B48",
          "onTertiaryContainer": "#FFD8E4",
          "tertiaryFixed": "#FFD8E4",
          "onTertiaryFixed": "#31111D",
          "tertiaryFixedDim": "#EFB8C8",
          "onTertiaryFixedVariant": "#633B48",
          "error": "#F2B8B5",
          "onError": "#601410",
          "errorContainer": "#8C1D18",
          "onErrorContainer": "#F9DEDC",
          "outline": "#938F99",
          "background": "#141218",
          "onBackground": "#E6E0E9",
          "surface": "#141218",
          "onSurface": "#E6E0E9",
          "surfaceVariant": "#49454F",
          "onSurfaceVariant": "#CAC4D0",
          "inverseSurface": "#E6E0E9",
          "inverseOnSurface": "#322F35",
          "inversePrimary": "#6750A4",
          "shadow": "#000000",
          "surfaceTint": "#D0BCFF",
          "outlineVariant": "#49454F",
          "scrim": "#000000",
          "surfaceContainerHighest": "#36343B",
          "surfaceContainerHigh": "#2B2930",
          "surfaceContainer": "#211F26",
          "surfaceContainerLow": "#1D1B20",
          "surfaceContainerLowest": "#0F0D13",
          "surfaceBright": "#3B383E",
          "surfaceDim": "#141218"
        }
      }
    },
  },
  plugins: [],
}
