import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "docs-sidebar-toggler", shadow: false })
export class DocsSidebarToggler extends Component {

    toggle = () => {
        const sidebar = document.querySelector("#docs-sidebar");

        if(sidebar.classList.contains("sidebar-visible")) {
            sidebar.classList.remove("sidebar-visible");
            sidebar.classList.add("sidebar-hidden");
        } else {
            sidebar.classList.remove("sidebar-hidden");
            sidebar.classList.add("sidebar-visible");
        }
    }

    render() {
        return html`
            <button onclick=${this.toggle} class="docs-sidebar-toggler docs-sidebar-visible me-2 d-xl-none" type="button">
                <span></span>
                <span></span>
                <span></span>
            </button>
        `;
    }
}