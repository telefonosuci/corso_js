class CustomExpandableNav extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Clone the content of the template and append it to the shadow root
    const template = document.querySelector('#custom-expandable-nav-template');
    const instance = template.content.cloneNode(true);
    this.shadowRoot.appendChild(instance);

    // Get the slot element
    this.slot = this.shadowRoot.querySelector('slot');

    // Add event listener to handle click events
    this.shadowRoot.addEventListener('click', this.toggleExpand.bind(this));
  }

  toggleExpand(event) {
    // Check if the clicked element is a list item with children
    if (event.target.tagName === 'A' && event.target.parentElement.classList.contains('has-children')) {
      // Toggle the 'expanded' class to expand/collapse the children
      event.target.parentElement.classList.toggle('expanded');

      // Prevent the default behavior of the anchor tag
      event.preventDefault();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded custom nav component");

  // Registriamo il custom web component
  customElements.define('custom-expandable-nav', CustomExpandableNav);
});
