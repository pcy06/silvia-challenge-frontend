import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
})

export const config = createTamagui({
  themes,
  tokens,
  settings: {
    disableSSR: true, // for client-side apps gains a bit of performance
    allowedStyleValues: 'somewhat-strict-web', // if targeting only web
  },
  // ... see Configuration
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config