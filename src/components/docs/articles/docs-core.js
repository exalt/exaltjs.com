import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "@components/gist-embed";

@define({ tag: "docs-core", shadow: false })
export class DocsCore extends Component {

    render() {
        return html`
            <article class="docs-article" id="exalt-core">
                <header class="docs-header">
                    <h1 class="docs-heading">Exalt Core <span class="docs-time">Last updated: 09-30-2021</span></h1>
                    <section class="docs-intro">
                        <p>
                            Exalt Core is the framework runtime. It provides the component model, declarative templates, and the
                            Store API.
                        </p>
                        <p>
                            <code>npm install @exalt/core</code>
                        </p>
                    </section>
                </header>
                <section class="docs-section" id="building-components">
                    <h2 class="section-heading">Building Components</h2>
                    <p>
                        Exalt Components are a small wrapper over native Web Components.
                        This means they work as valid HTML elements and can be used anywhere HTML can be used, including other
                        frameworks.
                        You can use components to build independent and reusable pieces of your application.
                        Components allow you to define your own html tags and hook into the component state and lifecycle.
                    </p>
                    <p>
                        Component names must have a hypen in the name as required by the custom elements standard.
                        By Default Exalt components make use of the <a class="theme-link"
                            href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"
                            target="_blank" ref="noopener noreferrer">Shadow DOM</a> in order to provide encapsulation.
                        This can easily be disabled using the component options.
                    </p>
                    <p>
                        <h5>Component Options:</h5>
                        <ul>
                            <li>tag: string - Sets the component tag</li>
                            <li>shadow: boolean - Tells the component to use the ShadowDOM</li>
                            <li>styles: string[] - Set the styles to be used in the component</li>
                            <li>connect: Store[] - tells the component to react to changes in the provided stores</li>
                        </ul>
            
                        You can define default component options by setting the <code>Component.defaultOptions</code> property.
                        <br />
                        To create a component all you need to do is create a class that extends "Component" and return a template in
                        the render method.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="build-components.js" />
                        </div>
                        <div class="callout-block callout-block-warning">
                            <h4 class="callout-title">
                                <span class="callout-icon-holder me-1">
                                    <i class="fa fa-warning-circle"></i>
                                </span>
                                Warning
                            </h4>
                            <p>
                                The ShadowDOM provides slots and DOM and CSS encapsulation when enabled. If you are using a global
                                css
                                framework such as bootstrap or tailwindcss, the ShadowDOM must be disabled.
                            </p>
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="styling-components">
                    <h2 class="section-heading">Styling Components</h2>
                    <p>
                        You can apply css to your components in a variety of ways including importing a global stylesheet, inline
                        style elements, and inline style attributes.
                        When using the ShadowDOM, we reccomend using the "styles" component option. You can import your stylesheet
                        as a string and pass an array of stylesheets to the component.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="styling-components.js" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="component-lifecycle">
                    <h2 class="section-heading">Component Lifecycle</h2>
                    <p>
                        In your components, you may want to run specific code at certain times in a components life.
                        Exalt provides a couple lifecycle methods for this purpose.
                    </p>
                    <p>
                        <h5>Lifecycle Methods:</h5>
                        <ul>
                            <li>render() - render the components html</li>
                            <li>mount() - called when the component is added to the DOM</li>
                            <li>unmount() - called when the component is removed from the DOM</li>
                            <li>onUpdate(key, value) - called when a component's state or attributes are updated</li>
                            <li>shouldUpdate(key, value) - called when a component is about to be updated</li>
                        </ul>
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="component-lifecycle.js" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="reactive-properties">
                    <h2 class="section-heading">Reactive Properties</h2>
                    <p>
                        Components have access to state an attributes for updating the DOM.
                        When making use of state, users can initialize a reactive property using <code>super.reactive()</code>.
                        This function will take the value and make the property reactive so that whenever the value is changed, the view automatically updates.
                        This example displays the current time and updates the time every second.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="reactive-properties.js" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="component-attributes">
                    <h2 class="section-heading">Component Attributes</h2>
                    <p>
                        Attributes are passed into a component like any other html element. When an attribute changes, the component is automatically updated.
                        Attributes can be accessed using the <code>this.props</code> property. THe attributes are also passed into the <code>render()</code> method for easy destructuring.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="component-attributes.js" />
                        </div>
                    </p>
                    <p>
                        The component can then be used as <code>&lt;say-hello name="John Doe" /&gt;</code>
                    </p>
                </section>
                <section class="docs-section" id="dom-manipulation">
                    <h2 class="section-heading">DOM Manipulation</h2>
                    <p>
                        Sometimes you may need to access a DOM element from the template.
                        Because Exalt renders directly to the real dom, you can simply use normal dom manipulation methods.
                        Alternatively Exalt offers a ref api to help clean up your DOM manipulation code.
                        <br/>
                        Simply use the component's <code>createRef()</code> method and give an element the corresponding ref attribute name.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="dom-manipulation.js" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="writing-templates">
                    <h2 class="section-heading">Writing Templates</h2>
                    <p>
                        Exalt provides a tagged template function for creating templates. This is similar to JSX but its entirely native to the web.
                        You can write standard HTML inside them and use JavaScript expressions through placeholders indicated by curly braces prefixed with a dollar sign.
                    </p>
                    <p>
                        The <code>html</code> function provides an easier way to bind events to elements and pass data to components,
                        You can pass any data you want as an attribute and Exalt will process it for you. Events are functions bound to attributes with the "on" prefix,
                        these can be any native dom events or custom events.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="writing-templates.js" />
                        </div>
                    </p>
                    <p>
                        Additionally you can spread an object as attributes using the spread attribute.
                        All properties on the object will be bound as an attribute using the key as the attribute name, and the value as the attribute value.
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="writing-templates-spread.js" />
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="store-api">
                    <h2 class="section-heading">Store API</h2>
                    <p>
                        Exalt Components have reactive properties for updating the component it belongs to, but in cases where components need to share state,
                        Exalt provides a global state solution via a store api. You can create a store and then tell individial components to listen to changes on the store using
                        the <code>connect</code> component option. It is best practice to not manipulate the store directly and instead define functions inside the store.
                    </p>
                    <p>
                        <div class="docs-code-block">
                            <gist-embed gist="jleeson/d7270d0cadd076237c234c863bfa414f" file="store-api.js" />
                        </div>
                    </p>
                </section>
            </article>
        `;
    }
}