import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "nav-item-title", shadow: false })
export class NavItemTitle extends Component {

    render({ title, icon, url }) {
        return html`
            <li class="nav-item section-title mt-3">
                <a class="nav-link scrollto" href=${url}>
                    <span class="theme-icon-holder me-2">
                        <i class="fas ${icon}"></i>
                    </span>
                    ${title}
                </a>
            </li>
        `;
    }
}