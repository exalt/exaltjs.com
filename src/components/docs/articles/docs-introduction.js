import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "docs-introduction", shadow: false })
export class DocsIntroduction extends Component {

    render() {
        return html`
            <article class="docs-article" id="introduction">
                <header class="docs-header">
                    <h1 class="docs-heading">Introduction <span class="docs-time">Last updated: 09-30-2021</span></h1>
                    <section class="docs-intro">
                        <p>
                            Exalt is a JavaScript framework for developing websites, web apps and component libraries.
                            Exalt prioritizes bundle size and cross framework compatibilty by making use of Web Components.
                            As a result of using web components, you can use Exalt components with your favorite libraries and frameworks
                            without being restricted to a specific tech stack.
                        </p>
                    </section>
                </header>
                <section class="docs-section" id="what-is-exalt">
                    <h2 class="section-heading">What is Exalt?</h2>
                    <p>
                        Exalt is a JavaScript framework built as a minimal layer on top of web standards.
                        This was done in order to provide a great developer experience without bloating your app bundles with framework code.
                        Unlike other major frameworks that immediately bloat your bundles, Exalt is ~2kb minified + gzipped.
                    </p>
                    <p>
                        One of key benefits to using web standards is not only smaller bundle sizes
                        but there is less to learn in order to get a project up and running.
                        Exalt can be used to develop websites, web apps and component libraries.
                        Component libraries powered by the Exalt runtime are able to be used in any other framework
                        thanks to the capabilities provided by Web Components.
                    </p>
                    <p>
                        <h5>Key features of Exalt include:</h5>
                        <ul>
                            <li>Component API with built in encapsulation</li>
                            <li>Standards based declarative templates</li>
                            <li>Store API for cross component state management</li>
                            <li>Developer tools to streamline the development process</li>
                            <li>Painless prerendering via @exalt/toolchain</li>
                        </ul>
                    </p>
                    <p>
                        <div class="callout-block callout-block-info">
                            <h4 class="callout-title">
                                <span class="callout-icon-holder me-1">
                                    <i class="fa fa-info-circle"></i>
                                </span>
                                Notice
                            </h4>
                            <p>
                                Exalt uses web standards that are not available in outdated browsers such IE 11 and older.
                                The @exalt/toolchain provides a "legacy" option to support older browsers.
                                However we do not provide official support for browsers that dont support the Web Component spec.
                            </p>
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="installation">
                    <h2 class="section-heading">Installation</h2>
                    <p>
                        Exalt is easy to get up and running. First install the <a class="theme-link" href="#cli">Exalt CLI</a>
                        globaly. This will give you access to the exalt commands to help you create and develop your project.
                        To install the Exalt CLI, run the following command: <code>npm install -g @exalt/cli</code>
                    </p>
                    <p>
                        When the Exalt CLI is used outside a project folder, it can only generate projects but when used inside a project
                        folder, it can load the specified toolchain and power the development commands. This allows the CLI to be used
                        regardless of build requirements. If the default toolchain does not fit your needs you can
                        <a class="theme-link" href="#toolchain">create your own</a>.
                    </p>
                    <p>
                        If you are using VSCode, you can get a better development experience by using the
                        <a class="theme-link" href="https://marketplace.visualstudio.com/items?itemName=jleeson.vscode-exalt" target="_blank">Exalt VSCode Extension</a>.
                        This extension provides support for syntax highlighting, auto completion, and intellisense for Exalt templates.
                    </p>
                </section>
                <section class="docs-section" id="getting-started">
                    <h2 class="section-heading">Getting Started</h2>
                    <h5>Create a new project</h5>
                    <p>
                        You can create a new project by running the create command and supplying the project name.
                        This will generate your new project, install the required dependencies, and initialize a new git repository.
                        By default @exalt/toolchain is used to power your projects build pipeline.
                        This can be changed using the toolchain option in your exalt.json file.
                    </p>
                    <p><code>exalt create &lt;app-name&gt;</code></p>
                    <h5>Run the application</h5>
                    <p>
                        While using the default toolchain, the dev command will launch a web server, watch your files, and build the app as you make changes.
                        As soon as the initial build is complete it will open your app in your default web browser. Any builds after this will refresh the page.
                    </p>
                    <p>
                        <div>
                            Navigate to your project and launch the dev server
                            <code>cd &lt;app-name&gt; && exalt dev</code>
                        </div>
                    </p>
                </section>
            </article>
        `;
    }
}