import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "app-footer", shadow: false })
export class Footer extends Component {

    render() {
        return html`
            <footer class="footer">
                <div class="footer-bottom text-center py-5">
                    <ul class="social-list list-unstyled pb-4 mb-0">
                        <li class="list-inline-item">
                            <a href="https://github.com/exalt/exalt" target="_blank"><i class="fab fa-github fa-fw"></i></a>
                        </li> 
                        <li class="list-inline-item">
                            <a href="https://twitter.com/exaltjs"><i class="fab fa-twitter fa-fw"></i></a>
                        </li>
                        <small class="copyright">Developed by <a class="theme-link" href="https://www.outwalkstudios.com/" target="_blank">Outwalk Studios</a></small>
                    </ul>
                </div>
            </footer>
        `;
    }
}