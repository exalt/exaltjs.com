import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "gist-embed", shadow: false })
export class GistEmbed extends Component {

    loading = super.reactive(true);
    src = super.reactive("");

    static gistCallbackId = 0;
    static isStylesheetLoaded = false;

    static nextGistCallback = () => {
        return `embed_git_callback_${GistEmbed.gistCallbackId++}`;
    }

    addStylesheet = (href) => {
        if(!GistEmbed.stylesheetAdded) {
            GistEmbed.stylesheetAdded = true;
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = href;

            document.head.appendChild(link);
        }
    }

    mount() {
        const gistCallback = GistEmbed.nextGistCallback();

        window[gistCallback] = (gist) => {
            this.loading = false;
            this.src = gist.div;

            this.addStylesheet(gist.stylesheet);
        };

        let url = `https://gist.github.com/${this.props.gist}.json?callback=${gistCallback}`;
        if(this.props.file) url += `&file=${this.props.file}`;

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.head.appendChild(script);
    }

    render() {
        if(this.loading) return html`<div>loading...</div>`;
        else return html`<div>${this.src}</div>`;
    }
}