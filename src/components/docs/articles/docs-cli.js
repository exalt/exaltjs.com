import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "docs-cli", shadow: false })
export class DocsCLI extends Component {

    render() {
        return html`
            <article class="docs-article" id="exalt-cli">
                <header class="docs-header">
                    <h1 class="docs-heading">Exalt CLI <span class="docs-time">Last updated: 09-30-2021</span></h1>
                    <section class="docs-intro">
                        <p>
                            Exalt CLI provides a clean interface to start new exalt projects and run your build pipeline.
                        </p>
                        <p>
                            <code>npm install -g @exalt/cli</code>
                        </p>
                    </section>
                </header>
                <section class="docs-section" id="create-a-new-project">
                    <h2 class="section-heading">Create a New Project</h2>
                    <p>
                        You can create a new project by running the create command and supplying the project name.
                        This will generate your new project, install the required dependencies, and initialize a new git repository.
                        By default @exalt/toolchain is used to power your projects build pipeline.
                        This can be changed using the toolchain option in your exalt.json file.
                    </p>
                    <p>
                        If you wish to generate a component library simply add the <code>--library</code> flag to the command.
                        <br/>
                        <code>exalt create [app-name] &lt;options&gt;</code>
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
                                The Exalt CLI can only generate projects when used outside a project folder. However when using the cli inside a folder
                                containing an exalt.json file. It provides access to the full cli capabilities.
                            </p>
                        </div>
                    </p>
                </section>
                <section class="docs-section" id="running-a-development-server">
                    <h2 class="section-heading">Running a Development Server</h2>
                    <p>
                        The dev command will launch a web server, watch your files, and build the app as you make changes.
                        As soon as the initial build is complete it will open your app in your default web browser. Any builds after this will refresh the page.
                        <br/>
                        <code>exalt dev &lt;options&gt;</code>
                    </p>
                </section>
                <section class="docs-section" id="building-for-production">
                    <h2 class="section-heading">Building for Production</h2>
                    <p>
                        You can build the project for production using the build command.
                        This will build the project and place the files into the dist directory.
                        <br/>
                        <code>exalt build &lt;options&gt;</code>
                    </p>
                </section>
                <section class="docs-section" id="running-your-production-app">
                    <h2 class="section-heading">Running your Production App</h2>
                    <p>
                        After building your app for production, you can run it using the start command.
                        This will run your app on a simple http server capable of serving a single page app or static files.
                        <br/>
                        <code>exalt start &lt;options&gt;</code>
                    </p>
                </section>
            </article>
        `;
    }
}