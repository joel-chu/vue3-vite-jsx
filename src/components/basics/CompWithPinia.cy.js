import CompWithPinia from './CompWithPinia.tsx'

describe('<CompWithPinia />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(CompWithPinia)
  })
})
