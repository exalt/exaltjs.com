import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "@components/docs/nav-item-title";
import "@components/docs/nav-item";

@define({ tag: "docs-sidebar", shadow: false })
export class DocsSidebar extends Component {

    sidebar = super.createRef();

    checkVisibility = () => {
        if (window.innerWidth >= 1200) {
            this.sidebar.classList.remove("sidebar-hidden");
            this.sidebar.classList.add("sidebar-visible");
        } else {
            this.sidebar.classList.remove("sidebar-visible");
            this.sidebar.classList.add("sidebar-hidden");
        }
    };

    mount() {
        window.addEventListener("resize", this.checkVisibility);
        this.checkVisibility();

        const sidebarLinks = this.root.querySelectorAll("#docs-sidebar .scrollto");

        for (let link of sidebarLinks) {
            link.addEventListener("click", (e) => {
                e.preventDefault();

                const target = link.getAttribute("href").replace("#", "");
                document.getElementById(target).scrollIntoView({
                    behavior: "smooth"
                });

                if (this.sidebar.classList.contains("sidebar-visible") && window.innerWidth < 1200) {
                    this.sidebar.classList.remove("sidebar-visible");
                    this.sidebar.classList.add("sidebar-hidden");
                }
            })
        }
    }

    unmount() {
        window.removeEventListener("resize", this.checkVisibility);
    }

    render() {
        return html`
            <div ref="sidebar" id="docs-sidebar" class="docs-sidebar">
                <nav id="docs-nav" class="docs-nav navbar">
                    <ul class="section-items list-unstyled nav flex-column pb-3">
                        <nav-item-title title="Introduction" icon="fa-map-signs" url="#introduction" />
                        <nav-item title="What is Exalt?" url="#what-is-exalt" />
                        <nav-item title="Installation" url="#installation" />
                        <nav-item title="Getting Started" url="#getting-started" />
            
                        <nav-item-title title="Exalt Core" icon="fa-code" url="#exalt-core" />
                        <nav-item title="Building Components" url="#building-components" />
                        <nav-item title="Styling Components" url="#styling-components" />
                        <nav-item title="Component Lifecycle" url="#component-lifecycle" />
                        <nav-item title="Reactive Properties" url="#reactive-properties" />
                        <nav-item title="Component Attributes" url="#component-attributes" />
                        <nav-item title="DOM Manipulation" url="#dom-manipulation" />
                        <nav-item title="Writing Templates" url="#writing-templates" />
                        <nav-item title="Store API" url="#store-api" />
            
                        <nav-item-title title="Exalt CLI" icon="fa-terminal" url="#exalt-cli" />
                        <nav-item title="Create a New Project" url="#create-a-new-project" />
                        <nav-item title="Running a Development Server" url="#running-a-development-server" />
                        <nav-item title="Building for Production" url="#building-for-production" />
                        <nav-item title="Running your Production App" url="#running-your-production-app" />
            
                        <nav-item-title title="Exalt Toolchain" icon="fa-tools" url="#exalt-toolchain" />
                        <nav-item title="Toolchain Features" url="#toolchain-features" />
                        <nav-item title="Toolchain Options" url="#toolchain-options" />
                        <nav-item title="TypeScript Support" url="#typescript-support" />
                        <nav-item title="Build your own Toolchain" url="#build-your-own-toolchain" />
            
                        <nav-item-title title="Exalt Router" icon="fa-route" url="#exalt-router" />
                        <nav-item title="Router Component" url="#router-component" />
                        <nav-item title="Route Component" url="#route-component" />
                        <nav-item title="Link Component" url="#link-component" />
                        <nav-item title="Redirect Component" url="#redirect-component" />
            
                        <nav-item-title title="Exalt SSR" icon="fa-cogs" url="#exalt-ssr" />
                        <nav-item title="Loading your App" url="#loading-your-app" />
                        <nav-item title="Rendering your App" url="#rendering-your-app" />
                    </ul>
                </nav>
            </div>
        `;
    }
}