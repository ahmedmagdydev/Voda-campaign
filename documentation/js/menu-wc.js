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
                    <a href="index.html" data-type="index-link">voda-cms documentation</a>
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
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' : 'data-target="#xs-components-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' :
                                            'id="xs-components-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' : 'data-target="#xs-injectables-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' :
                                        'id="xs-injectables-links-module-AppModule-9468e45de2b432f264248d089c6821a4"' }>
                                        <li class="link">
                                            <a href="injectables/BreadcrumbService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BreadcrumbService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SaveModalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SaveModalService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SegmentsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SegmentsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SideMenuService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SideMenuService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-39df11d42ed05b641f65d24dd7b3e288"' : 'data-target="#xs-components-links-module-LayoutModule-39df11d42ed05b641f65d24dd7b3e288"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-39df11d42ed05b641f65d24dd7b3e288"' :
                                            'id="xs-components-links-module-LayoutModule-39df11d42ed05b641f65d24dd7b3e288"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StaticMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StaticMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainTabsModule.html" data-type="entity-link">MainTabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainTabsModule-909af97128d037ac2715f5eea10e670d"' : 'data-target="#xs-components-links-module-MainTabsModule-909af97128d037ac2715f5eea10e670d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainTabsModule-909af97128d037ac2715f5eea10e670d"' :
                                            'id="xs-components-links-module-MainTabsModule-909af97128d037ac2715f5eea10e670d"' }>
                                            <li class="link">
                                                <a href="components/MainTabsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainTabsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaveModalModule.html" data-type="entity-link">SaveModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaveModalModule-9511bfa5cd02e3e1dcaf22327a1f18e0"' : 'data-target="#xs-components-links-module-SaveModalModule-9511bfa5cd02e3e1dcaf22327a1f18e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaveModalModule-9511bfa5cd02e3e1dcaf22327a1f18e0"' :
                                            'id="xs-components-links-module-SaveModalModule-9511bfa5cd02e3e1dcaf22327a1f18e0"' }>
                                            <li class="link">
                                                <a href="components/SaveModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaveModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentModule.html" data-type="entity-link">SegmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' : 'data-target="#xs-components-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' :
                                            'id="xs-components-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' }>
                                            <li class="link">
                                                <a href="components/SegmentAuditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SegmentAuditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SegmentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SegmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SegmentConfigComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SegmentConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SegmentDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SegmentDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SegmentDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SegmentDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' : 'data-target="#xs-injectables-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' :
                                        'id="xs-injectables-links-module-SegmentModule-a07b69f2c4c0db7a59342b6c93e2d005"' }>
                                        <li class="link">
                                            <a href="injectables/auditService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>auditService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TextEditorModule.html" data-type="entity-link">TextEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TextEditorModule-45f82ad8dee9bb698955f3bffd20e4cf"' : 'data-target="#xs-components-links-module-TextEditorModule-45f82ad8dee9bb698955f3bffd20e4cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TextEditorModule-45f82ad8dee9bb698955f3bffd20e4cf"' :
                                            'id="xs-components-links-module-TextEditorModule-45f82ad8dee9bb698955f3bffd20e4cf"' }>
                                            <li class="link">
                                                <a href="components/TextEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/auditService.html" data-type="entity-link">auditService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BreadcrumbService.html" data-type="entity-link">BreadcrumbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarService.html" data-type="entity-link">CarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SaveModalService.html" data-type="entity-link">SaveModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SegmentsService.html" data-type="entity-link">SegmentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SideMenuService.html" data-type="entity-link">SideMenuService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Car.html" data-type="entity-link">Car</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/segmentsNode.html" data-type="entity-link">segmentsNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/segmentsNode-1.html" data-type="entity-link">segmentsNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/segmentsTab.html" data-type="entity-link">segmentsTab</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TreeNode.html" data-type="entity-link">TreeNode</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});