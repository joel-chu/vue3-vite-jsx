<<<<<<< HEAD
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
=======
import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
>>>>>>> 17d631a (adding cypress to the project)
