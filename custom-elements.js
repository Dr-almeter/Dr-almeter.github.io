// custom-elements.js
class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer> Contact: dralmeter@gmail.com, or almeterj@durhamtech.edu.</footer>
        `
    }
}
window.customElements.define('app-footer', AppFooter)