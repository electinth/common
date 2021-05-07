// windi.config.ts
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        heading: ['Kondolar Thai', 'serif'],
        subtitle: ['Anuphan', 'sans-serif'],
        body: ['Bai Jamjuri', 'sans-serif'],
      },
    },
  },
});
