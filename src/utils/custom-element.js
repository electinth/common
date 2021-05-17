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
        console.log(tagName, attrName, oldValue, newValue);
        attrName = attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase());
        super.attributeChangedCallback(attrName, oldValue, newValue);
      }
    }

    window.customElements.define(tagName, CustomElementWrapper);
  },
};
