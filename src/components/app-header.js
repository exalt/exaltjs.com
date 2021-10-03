import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "@components/docs/docs-sidebar-toggler";

@define({ tag: "app-header", shadow: false })
export class Header extends Component {

    render() {
        const docs = (window.location.href.includes("/docs"));

        return html`
            <header class="header fixed-top">
                <div class="branding docs-branding">
                    <div class="container-fluid position-relative py-2">
                        <div class="docs-logo-wrapper">
                            ${docs && html`<docs-sidebar-toggler />`}
                            <div class="site-logo">
                                <a href="/" class="navbar-brand">
                                    <img class="logo-icon me-2" src="/assets/exalt_icon.svg" alt="logo" width="40px"
                                        height="40px" />
                                    <span class="logo-text">Exalt</span>
                                </a>
                            </div>
                        </div>
                        <div class="docs-top-utilities d-flex justify-content-end align-items-center">
                            <ul class="social-list list-inline mx-md-3 mx-lg-5 mb-0 d-none d-lg-flex">
                                <li class="list-inline-item">
                                    <a href="https://github.com/exalt/exalt" target="_blank" ref="noopener noreferrer"><i class="fab fa-github fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://twitter.com/exaltjs"><i class="fab fa-twitter fa-fw"></i></a>
                                </li>
                            </ul>
                            <a href="https://www.npmjs.com/package/@exalt/core" target="_blank" ref="noopener noreferrer"
                                class="btn btn-primary d-none d-lg-flex">Download</a>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}