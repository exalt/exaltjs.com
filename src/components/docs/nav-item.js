import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "nav-item", shadow: false })
export class NavItemTitle extends Component {

    render({ title, url }) {
        return html`
            <li class="nav-item">
                <a class="nav-link scrollto" href=${url}>${title}</a>
            </li>
        `;
    }
}