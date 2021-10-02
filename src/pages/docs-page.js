import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import Gumshoe from "gumshoejs";
import "@components/docs/docs-sidebar";
import "@components/docs/articles/docs-introduction";
import "@components/docs/articles/docs-core";
import "@components/docs/articles/docs-cli";
import "@components/docs/articles/docs-toolchain";
import "@components/docs/articles/docs-router";
import "@components/docs/articles/docs-ssr";

@define({ tag: "docs-page", shadow: false })
export class Docs extends Component {

    mount() {
        new Gumshoe("docs-sidebar #docs-nav a", { offset: 69 });
    }

    render() {
        return html`
            <div class="docs-wrapper">
                <docs-sidebar />
                <div class="docs-content">
                    <div class="container">
                        <docs-introduction />
                        <docs-core />
                        <docs-cli />
                        <docs-toolchain />
                        <docs-router />
                        <docs-ssr />
                    </div>
                </div>
            </div>
        `;
    }
}