'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Ionic-Chat-Socket</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-01bca21be5e86a2f1208f96f94331c9bd439d09c7ebbe2a7ea32cb6a06199d2635bfffbdbd3e4b0afbbe91927e1f07b699bb1ca84e7d8bb967f6eaba03ac23a4"' : 'data-bs-target="#xs-components-links-module-AppModule-01bca21be5e86a2f1208f96f94331c9bd439d09c7ebbe2a7ea32cb6a06199d2635bfffbdbd3e4b0afbbe91927e1f07b699bb1ca84e7d8bb967f6eaba03ac23a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-01bca21be5e86a2f1208f96f94331c9bd439d09c7ebbe2a7ea32cb6a06199d2635bfffbdbd3e4b0afbbe91927e1f07b699bb1ca84e7d8bb967f6eaba03ac23a4"' :
                                            'id="xs-components-links-module-AppModule-01bca21be5e86a2f1208f96f94331c9bd439d09c7ebbe2a7ea32cb6a06199d2635bfffbdbd3e4b0afbbe91927e1f07b699bb1ca84e7d8bb967f6eaba03ac23a4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentsModule-0def8d4fe44807460d7486b92e5ba7cadf10c32dbb030c461aea725f9fab3ac6e82dd249ff3186b170eac0010e96cd71c60944b8c6514e9a3b07fa853d4f3dd6"' : 'data-bs-target="#xs-components-links-module-ComponentsModule-0def8d4fe44807460d7486b92e5ba7cadf10c32dbb030c461aea725f9fab3ac6e82dd249ff3186b170eac0010e96cd71c60944b8c6514e9a3b07fa853d4f3dd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-0def8d4fe44807460d7486b92e5ba7cadf10c32dbb030c461aea725f9fab3ac6e82dd249ff3186b170eac0010e96cd71c60944b8c6514e9a3b07fa853d4f3dd6"' :
                                            'id="xs-components-links-module-ComponentsModule-0def8d4fe44807460d7486b92e5ba7cadf10c32dbb030c461aea725f9fab3ac6e82dd249ff3186b170eac0010e96cd71c60944b8c6514e9a3b07fa853d4f3dd6"' }>
                                            <li class="link">
                                                <a href="components/MessagesChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesChatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PagesModule-454692a7e05ea14b15c7f78164d5b470f1fd9bbe49e601608ddff85ac8e17c72290bad1abcff5f9fc5c79633f8a6b2ea8b1c85f5efe367505f4bbae226b815cb"' : 'data-bs-target="#xs-components-links-module-PagesModule-454692a7e05ea14b15c7f78164d5b470f1fd9bbe49e601608ddff85ac8e17c72290bad1abcff5f9fc5c79633f8a6b2ea8b1c85f5efe367505f4bbae226b815cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-454692a7e05ea14b15c7f78164d5b470f1fd9bbe49e601608ddff85ac8e17c72290bad1abcff5f9fc5c79633f8a6b2ea8b1c85f5efe367505f4bbae226b815cb"' :
                                            'id="xs-components-links-module-PagesModule-454692a7e05ea14b15c7f78164d5b470f1fd9bbe49e601608ddff85ac8e17c72290bad1abcff5f9fc5c79633f8a6b2ea8b1c85f5efe367505f4bbae226b815cb"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/Alerts.html" data-type="entity-link" >Alerts</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Connection.html" data-type="entity-link" >Connection</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Messages.html" data-type="entity-link" >Messages</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});