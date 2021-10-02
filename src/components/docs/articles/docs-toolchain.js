import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "@components/gist-embed";

@define({ tag: "docs-toolchain", shadow: false })
export class DocsToolchain extends Component {

    render() {
        return html`
            <article class="docs-article" id="exalt-toolchain">
                <header class="docs-header">
                    <h1 class="docs-heading">Exalt Toolchain <span class="docs-time">Last updated: 09-30-2021</span></h1>
                    <section class="docs-intro">
                        <p>
                            Exalt Toolchain provides a standard development environment with all the features you need for developing
                            websites, web apps, and component libraries with exalt.
                        </p>
                        <p>
                            <code>npm install --save-dev @exalt/toolchain</code>
                        </p>
                    </section>
                </header>
                <section class="docs-section" id="toolchain-features">
                    <h2 class="section-heading">Toolchain Features</h2>
                    <p>
                        Exalt Toolchain provides a set of standard build pipleline features.

                        <h5>Features:</h5>
                        <ul>
                            <li>JavaScript & TypeScript bundling, transpiling, and minification</li>
                            <li>Import aliasing</li>
                            <li>Live reloading development server</li>
                            <li>HTML generation based on build output</li>
                            <li>Support for importing css files</li>
                            <li>Support for importing json files</li>
                            <li>Support for folder components</li>
                            <li>Support for decorators</li>
                            <li>Code splitting support</li>
                            <li>Prerendering support</li>
                        </ul>
                    </p>
                </section>
                <section class="docs-section" id="toolchain-options">
                    <h2 class="section-heading">Toolchain Options</h2>
                    <p>
                        This toolchain offers some options to configure this functionality.

                        <h5>Options:</h5>
                        <ul>
                            <li>target (default: "es2015") - sets the JavaScript version to be transpiled to</li>
                            <li>publicPath (default: "/") - the asset path to append to the beginning of all asset paths</li>
                            <li>dest (default: "dist") - the build output directory</li>
                            <li>port (default: 3000) - sets the web server port</li>
                            <li>open (default: true) - tells the cli whether or not to launch your app or not</li>
                            <li>prerender (default: false) - tells the cli to prerender your app to static html files</li>
                            <li>legacy (default: false) - sets the build output to support legacy browsers</li>
                            <li>paths (default: {}) - object that maps aliases to file paths</li>
                            <li>external (default: []) - sets the modules to be exluded from the bundle</li>
                        </ul>
                    </p>
                </section>
                <section class="docs-section" id="typescript-support">
                    <h2 class="section-heading">TypeScript Support</h2>
                    <p>
                        Typescript support is ready out of the box.
                        All you need to do is change your files to have a <code>.ts</code> file extension and make sure your input field is updated in exalt.json.
                        The toolchain will then automatically compile your code down to JavaScript.
                    </p>
                </section>
                <section class="docs-section" id="build-your-own-toolchain">
                    <h2 class="section-heading">Build your own Toolchain</h2>
                    <p>
                        We try to make sure that the default toolchain meets the needs of most projects.
                        In cases where it fails to meet your project requirements, we offer an easy solution to build your own toolchain.
                    </p>
                    <p>
                        A toolchain is a file that exports a default function and returns an object of command functions.
                        This function recieves the config object consiting of name, input and toolchainOptions properties.
                        The commands that are availble for toolchains to control are dev, start, and build.
                    </p>
                    <p>
                        <h5>Config Object</h5>
                        The config object is controlled by your config file. The config object includes these properties.
                        <ul>
                            <li>name: string - the project name</li>
                            <li>input: string | object | array - the entry files to compile</li>
                            <li>toolchainOptions: object - the options to customize the toolchain</li>
                        </ul>
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="build-your-own-toolchain.js" />
                        </div>
                        <div class="callout-block callout-block-warning">
                            <h4 class="callout-title">
                                <span class="callout-icon-holder me-1">
                                    <i class="fa fa-warning-circle"></i>
                                </span>
                                Warning
                            </h4>
                            <p>
                                If you make use of ESM module syntax such as export and import, you must first compile it to commonjs format.
                            </p>
                        </div>
                    </p>
                </section>
            </article>
        `;
    }
}