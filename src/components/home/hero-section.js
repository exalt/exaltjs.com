import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "hero-section", shadow: false })
export class HeroSection extends Component {

    searchInput = super.reactive("");

    handleSearch = (e) => {
        e.preventDefault();
        window.location.href = this.formatToUrl(this.searchInput);
    }

    formatToUrl(input) {
        return `/docs#${input.toLowerCase().replace(/ /g, "-")}`;
    } 

    render() {
        return html`
            <div class="page-header theme-bg-dark py-5 text-center position-relative">
                <div class="theme-bg-shapes-right"></div>
                <div class="theme-bg-shapes-left"></div>
                <div class="container">
                    <h1 class="page-heading single-col-max mx-auto">Exalt</h1>
                    <div class="page-intro single-col-max mx-auto">
                        A JavaScript framework for building universal apps.
                    </div>
                    <div class="main-search-box pt-3 d-block mx-auto">
                        <form class="search-form w-100" onsubmit=${this.handleSearch}>
                            <input 
                                type="text"
                                list="search-list"
                                placeholder="Search the docs..."
                                autocomplete="off"
                                class="form-control search-input"
                                value=${this.searchInput}
                                oninput=${(e) => this.searchInput = e.target.value}
                            />
                            <button type="submit" class="btn search-btn" value="Search"><i class="fas fa-search"></i></button>
                            <datalist id="search-list">
                                    <option>Introduction</option>
                                    <option>What is Exalt</option>
                                    <option>Installation</option>
                                    <option>Getting Started</option>

                                    <option>Exalt Core</option>
                                    <option>Building Components</option>
                                    <option>Styling Components</option>
                                    <option>Component Lifecycle</option>
                                    <option>Reactive Properties</option>
                                    <option>Component Attributes</option>
                                    <option>DOM Manipulation</option>
                                    <option>Writing Templates</option>
                                    <option>Store API</option>

                                    <option>Exalt CLI</option>
                                    <option>Create a New Project</option>
                                    <option>Running a Development Server</option>
                                    <option>Building for Production</option>
                                    <option>Running your Production App</option>

                                    <option>Exalt Toolchain</option>
                                    <option>Toolchain Features</option>
                                    <option>Toolchain Options</option>
                                    <option>TypeScript Support</option>
                                    <option>Build your own Toolchain</option>

                                    <option>Exalt Router</option>
                                    <option>Router Component</option>
                                    <option>Route Component</option>
                                    <option>Link Component</option>
                                    <option>Redirect Component</option>

                                    <option>Exalt SSR</option>
                                    <option>Loading your App</option>
                                    <option>Rendering your App</option>
                            </datalist>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }
}