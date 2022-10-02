import TextInput from './TextInput.vue'

describe('<TextInput />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(TextInput, { propsData: {
      label: "Last Name",
      isRequired: true
    } });

    cy.get('label').should('have.text', 'First Name *');
  })
})