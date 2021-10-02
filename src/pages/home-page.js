import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "@components/home/hero-section";
import "@components/home/cta-section";

@define({ tag: "home-page", shadow: false })
export class Home extends Component {

    render() {
        return html`
            <hero-section />
            <div class="page-content">
                <div class="container">
                    <div class="docs-overview py-5">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-4 py-3">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">
                                            <span class="theme-icon-holder card-icon-holder me-2">
                                                <i class="fas fa-code"></i>
                                            </span>
                                            <span class="card-title-text">Exalt Core</span>
                                        </h5>
                                        <div class="card-text">
                                            Learn how to use components, templates, and reactivity in your apps.
                                        </div>
                                        <a href="/docs#exalt-core" class="card-link-mask"></a>
                                    </div>
                                </div>
                            </div>
            
                            <div class="col-12 col-lg-4 py-3">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">
                                            <span class="theme-icon-holder card-icon-holder me-2">
                                                <i class="fas fa-terminal"></i>
                                            </span>
                                            <span class="card-title-text">Exalt CLI</span>
                                        </h5>
                                        <div class="card-text">
                                            Learn how to use the Exalt CLI to power your development workflow.
                                        </div>
                                        <a href="/docs#exalt-cli" class="card-link-mask"></a>
                                    </div>
                                </div>
                            </div>
            
                            <div class="col-12 col-lg-4 py-3">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">
                                            <span class="theme-icon-holder card-icon-holder me-2">
                                                <i class="fas fa-box fa-tools"></i>
                                            </span>
                                            <span class="card-title-text">Exalt Toolchain</span>
                                        </h5>
                                        <div class="card-text">
                                            Learn how to configure the default build toolchain or create your own.
                                        </div>
                                        <a href="/docs#exalt-toolchain" class="card-link-mask"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-4 py-3">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">
                                            <span class="theme-icon-holder card-icon-holder me-2">
                                                <i class="fas fa-box fa-route"></i>
                                            </span>
                                            <span class="card-title-text">Exalt Router</span>
                                        </h5>
                                        <div class="card-text">
                                            Scale your app to multiple pages using the Exalt Router to handle client side routing.
                                        </div>
                                        <a href="/docs#exalt-router" class="card-link-mask"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-4 py-3">
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <h5 class="card-title mb-3">
                                            <span class="theme-icon-holder card-icon-holder me-2">
                                                <i class="fas fa-box fa-cogs"></i>
                                            </span>
                                            <span class="card-title-text">Exalt SSR</span>
                                        </h5>
                                        <div class="card-text">
                                            Increase performance and optimize SEO by rendering your app on the server.
                                        </div>
                                        <a href="/docs#exalt-ssr" class="card-link-mask"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <cta-section />
        `;
    }
}