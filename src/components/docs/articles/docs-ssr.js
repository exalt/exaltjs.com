import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "@components/gist-embed";

@define({ tag: "docs-ssr", shadow: false })
export class DocsSSR extends Component {

    render() {
        return html`
            <article class="docs-article" id="exalt-ssr">
                <header class="docs-header">
                    <h1 class="docs-heading">Exalt SSR <span class="docs-time">Last updated: 09-30-2021</span></h1>
                    <section class="docs-intro">
                        <p>
                            Exalt SSR is a module that provides everything you need to render your app on the server.
                            For rendering your app to static html you can use the <code>--prerender</code> option in @exalt/toolchain.
                        </p>
                        <p>
                            <code>npm install @exalt/ssr</code>
                        </p>
                    </section>
                </header>
                <section class="docs-section" id="loading-your-app">
                    <h2 class="section-heading">Loading your App</h2>
                    <p>
                        @exalt/ssr provides a <code>loadBundle(path)</code> function that will
                        initalize the DOM environment and load the application bundle.
                    </p>
                    <p>
                        The loadBundle function returns whatever exports your app has, in most cases this will be your App component.
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="loading-your-app.js" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="rendering-your-app">
                    <h2 class="section-heading">Rendering your App</h2>
                    <p>
                        For rendering your app on the server, @exalt/ssr provides a <code>renderToString(component, callback)</code> function
                        that will take your component and render it out to a string.
                    </p>
                    <p>
                        The DOM environment provided is a subset of the DOM spec and is designed to render exalt components,
                        however as long as the required apis are provided any web component can be rendered. Whenever the renderer encounters a
                        shadow root, it will be rendered as a <a class="theme-link" href="https://web.dev/declarative-shadow-dom/">declarative shadow root</a>.
                    </p>
                    <p>
                        The renderToString function provides a optional second argument that acts as a callback.
                        This callback recieves the node currently being rendered so you can modify or do extra processing per node.
                        This callback is used to detect the routes to be rendered when using @exalt/toolchain's <code>--prerender</code> option.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="rendering-your-app.js" />
                        </div>
                    </p>
                </section>
            </article>
        `;
    }
}