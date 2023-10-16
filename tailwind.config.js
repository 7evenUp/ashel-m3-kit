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
      borderRadius: {
        'extra-small': '0.25rem',
        small: '0.5rem',
        medium: '0.75rem',
        large: '1rem',
        'extra-large': '1.75rem'
      },
      boxShadow: {
        elevation1: '0 1px 2px 0 rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
        elevation2: '0 1px 2px 0 rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
        elevation3: '0 1px 3px 0 rgba(0,0,0,0.3), 0 4px 8px 3px rgba(0,0,0,0.15)',
        elevation4: '0 2px 3px 0 rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15)',
        elevation5: '0 4px 4px 0 rgba(0,0,0,0.3), 0 8px 12px 6px rgba(0,0,0,0.15)'
      },
      colors: {
        "primary": "hsl(var(--primary) / <alpha-value>)",
        "onPrimary": "hsl(var(--onPrimary) / <alpha-value>)",
        "primaryContainer": "hsl(var(--primaryContainer) / <alpha-value>)",
        "onPrimaryContainer": "hsl(var(--onPrimaryContainer) / <alpha-value>)",
        "primaryFixed": "hsl(var(--primaryFixed) / <alpha-value>)",
        "onPrimaryFixed": "hsl(var(--onPrimaryFixed) / <alpha-value>)",
        "primaryFixedDim": "hsl(var(--primaryFixedDim) / <alpha-value>)",
        "onPrimaryFixedVariant": "hsl(var(--onPrimaryFixedVariant) / <alpha-value>)",
        "secondary": "hsl(var(--secondary) / <alpha-value>)",
        "onSecondary": "hsl(var(--onSecondary) / <alpha-value>)",
        "secondaryContainer": "hsl(var(--secondaryContainer) / <alpha-value>)",
        "onSecondaryContainer": "hsl(var(--onSecondaryContainer) / <alpha-value>)",
        "secondaryFixed": "hsl(var(--secondaryFixed) / <alpha-value>)",
        "onSecondaryFixed": "hsl(var(--onSecondaryFixed) / <alpha-value>)",
        "secondaryFixedDim": "hsl(var(--secondaryFixedDim) / <alpha-value>)",
        "onSecondaryFixedVariant": "hsl(var(--onSecondaryFixedVariant) / <alpha-value>)",
        "tertiary": "hsl(var(--tertiary) / <alpha-value>)",
        "onTertiary": "hsl(var(--onTertiary) / <alpha-value>)",
        "tertiaryContainer": "hsl(var(--tertiaryContainer) / <alpha-value>)",
        "onTertiaryContainer": "hsl(var(--onTertiaryContainer) / <alpha-value>)",
        "tertiaryFixed": "hsl(var(--tertiaryFixed) / <alpha-value>)",
        "onTertiaryFixed": "hsl(var(--onTertiaryFixed) / <alpha-value>)",
        "tertiaryFixedDim": "hsl(var(--tertiaryFixedDim) / <alpha-value>)",
        "onTertiaryFixedVariant": "hsl(var(--onTertiaryFixedVariant) / <alpha-value>)",
        "error": "hsl(var(--error) / <alpha-value>)",
        "errorContainer": "hsl(var(--errorContainer) / <alpha-value>)",
        "onError": "hsl(var(--onError) / <alpha-value>)",
        "onErrorContainer": "hsl(var(--onErrorContainer) / <alpha-value>)",
        "background": "hsl(var(--background) / <alpha-value>)",
        "onBackground": "hsl(var(--onBackground) / <alpha-value>)",
        "outline": "hsl(var(--outline) / <alpha-value>)",
        "inverseOnSurface": "hsl(var(--inverseOnSurface) / <alpha-value>)",
        "inverseSurface": "hsl(var(--inverseSurface) / <alpha-value>)",
        "inversePrimary": "hsl(var(--inversePrimary) / <alpha-value>)",
        "shadow": "hsl(var(--shadow) / <alpha-value>)",
        "surfaceTint": "hsl(var(--surfaceTint) / <alpha-value>)",
        "outlineVariant": "hsl(var(--outlineVariant) / <alpha-value>)",
        "scrim": "hsl(var(--scrim) / <alpha-value>)",
        "surface": "hsl(var(--surface) / <alpha-value>)",
        "onSurface": "hsl(var(--onSurface) / <alpha-value>)",
        "surfaceVariant": "hsl(var(--surfaceVariant) / <alpha-value>)",
        "onSurfaceVariant": "hsl(var(--onSurfaceVariant) / <alpha-value>)",
        "surfaceContainerHighest": "hsl(var(--surfaceContainerHighest) / <alpha-value>)",
        "surfaceContainerHigh": "hsl(var(--surfaceContainerHigh) / <alpha-value>)",
        "surfaceContainer": "hsl(var(--surfaceContainer) / <alpha-value>)",
        "surfaceContainerLow": "hsl(var(--surfaceContainerLow) / <alpha-value>)",
        "surfaceContainerLowest": "hsl(var(--surfaceContainerLowest) / <alpha-value>)",
        "surfaceDim": "hsl(var(--surfaceDim) / <alpha-value>)",
        "surfaceBright": "hsl(var(--surfaceBright) / <alpha-value>)"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
