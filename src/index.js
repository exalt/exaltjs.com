import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";
import "@exalt/router";
import "@components/app-header";
import "@components/app-footer";
import "@pages/home-page";
import "@pages/docs-page";
import "./index.css";


@define({ tag: "app-root", shadow: false })
export class App extends Component {

    render() {
        return html`
            <app-header />
            <exalt-router>
                <exalt-route url="/" component="home-page" />
                <exalt-route url="/docs" component="docs-page" />
            </exalt-router>
            <app-footer />
        `;
    }
}