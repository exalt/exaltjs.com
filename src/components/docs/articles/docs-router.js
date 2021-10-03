import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "@components/gist-embed";

@define({ tag: "docs-router", shadow: false })
export class DocsRouter extends Component {

    render() {
        return html`
            <article class="docs-article" id="exalt-router">
                <header class="docs-header">
                    <h1 class="docs-heading">Exalt Router <span class="docs-time">Last updated: 09-30-2021</span></h1>
                    <section class="docs-intro">
                        <p>
                            Exalt Router provides simple client side routing in a declarative manner for Exalt Apps.
                            The components provided by @exalt/router are developed using Exalt itself so they can be treated as any other Exalt component.
                        </p>
                        <p>
                            <code>npm install @exalt/router</code>
                        </p>
                    </section>
                </header>
                <section class="docs-section" id="router-component">
                    <h2 class="section-heading">Router Component</h2>
                    <p>
                        The exalt-router component is used to handle all the routing.
                        It parses the routes behehind the scenes and will use push state routing by default.
                        If you want to use hash routing, you can set the hash attribute to enable it.
                    </p>
                    <p>
                        If you want to programatically change the route, ExaltRouter exposes a static navigate method.
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="exalt-router-programatically.js" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="route-component">
                    <h2 class="section-heading">Route Component</h2>
                    <p>
                        The exalt-route component is used to define a route and assign a component to it.
                        It takes two attributes, url and component.
                    </p>
                    <p>
                        Parameters are path fragments that are prefixed with a colon and if you want the parameter to be optional you can end it with a question mark.
                        Any route parameters get passed as attributes on the rendered component.
                    </p>
                    <p>
                        When you want to split the bundle at the route level, you can add an onresolve event.
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="code-splitting-routes.js" />
                        </div>
                    </p>
                    <p>
                        When defining a default route to render if there is no match, just omit the url attribute.
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="exalt-route.html" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="link-component">
                    <h2 class="section-heading">Link Component</h2>
                    <p>
                        The exalt-link component is used to wrap an anchor tag and change its default behavior to use client side routing.
                        This ensures that in server side rendered environments the routing still works without JavaScript.
                        The exalt-link component only takes a url attribute which is passed as an href attribute to the child anchor tag.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="exalt-link.html" />
                        </div>
                        The anchor tag does not need to be a direct child of the exalt-link component,
                        the component will just grab the first anchor tag it finds and enable client side rendering on it.
                    </p>
                </section>
                <section class="docs-section" id="redirect-component">
                    <h2 class="section-heading">Redirect Component</h2>
                    <p>
                        The exalt-redirect component is used to conditionally redirect to another page or website.
                        As soon as the component is rendered it will determine how to redirect based on the url attribute and then the page will be redirected.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="exalt-redirect.html" />
                        </div>
                    </p>
                </section>
            </article>
        `;
    }
}