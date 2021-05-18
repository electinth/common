// Allow hyphenated properties to be defined in a Svelte custom elements
// https://github.com/sveltejs/svelte/issues/3852

export const customElements = {
  define: (tagName, CustomElement) => {
    class CustomElementWrapper extends CustomElement {
      static get observedAttributes() {
        return (super.observedAttributes || []).map((attr) =>
          attr.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase(),
        );
      }

      attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(
          attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase()),
          oldValue,
          newValue === '' ? true : newValue, // Value of omitted value attribute will be true
        );
      }
    }

    window.customElements.define(tagName, CustomElementWrapper);
  },
};
