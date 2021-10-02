import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "cta-section", shadow: false })
export class HeroSection extends Component {

    render() {
        return html`
            <section class="cta-section text-center py-5 theme-bg-dark position-relative">
                <div class="theme-bg-shapes-right"></div>
                <div class="theme-bg-shapes-left"></div>
                <div class="container">
                    <h3 class="mb-2 text-white mb-3">Ranked highly against the top frameworks!</h3>
                    <div class="section-intro text-white mb-3 single-col-max mx-auto">
                        In May 2021, Exalt was ranked #1 in bundle size when minified by <a href="https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/#bundle-size-30" target="_blank">webcomponents.dev</a>.
                        Since then Exalt has recieved numerous bundle size and performance benefits and
                        continues to focus on being a top performing framework.
                    </div>
                    <div class="pt-3 text-center">
                        <a class="btn btn-light" href="https://webcomponents.dev/create/exalt" target="_blank">Quick start a project</a>
                    </div>
                </div>
            </section>
        `;
    }
}