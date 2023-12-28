const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <header class="header">
      <div class="header__container">
        <div class="header__logo">
          <img src="./assets/Logo.svg" alt="logo" />
        </div>
        <div class="header__menu menu">
          <button type="button" class="menu_icon icon-menu" id='icon-menu'><span></span></button>
          <nav class="menu__body">
            <ul class="menu__list">
              <li class="menu__item">About Us</li>
              <li class="menu__item">Services</li>
              <li class="menu__item">Our Blog</li>
              <li class="menu__item">Contact</li>
            </ul>
          </nav>
        </div>
        <div class="header__schedule"><span>24 Hour Services</span></div>
      </div>
    </header>
`;

class Header extends HTMLElement {
  // constructor() {
  //   super();
  // }

  connectedCallback() {
    // const shadowRoot = this.attachShadow({ mode: 'closed' });
    // shadowRoot.appendChild(headerTemplate.content);
    this.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
