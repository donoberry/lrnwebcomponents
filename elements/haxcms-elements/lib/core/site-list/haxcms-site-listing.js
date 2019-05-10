/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { setPassiveTouchGestures } from "@polymer/polymer/lib/utils/settings.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "@lrnwebcomponents/json-outline-schema/json-outline-schema.js";
import "@lrnwebcomponents/simple-toast/simple-toast.js";
import "@lrnwebcomponents/simple-modal/simple-modal.js";
import "@lrnwebcomponents/simple-datetime/simple-datetime.js";
import "@lrnwebcomponents/jwt-login/jwt-login.js";
import "@vaadin/vaadin-grid/vaadin-grid.js";
import "@vaadin/vaadin-grid/vaadin-grid-column.js";
import "@vaadin/vaadin-grid/vaadin-grid-sort-column.js";
import "@vaadin/vaadin-grid/vaadin-grid-filter-column.js";
import "@vaadin/vaadin-grid/vaadin-grid-selection-column.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
/**
 * `haxcms-site-listing`
 * `A listing of all sites being managed by this instance.`
 */
class HAXCMSSiteListing extends PolymerElement {
  /**
   * created life cycle
   */
  constructor() {
    super();
    this.SimpleColors = new SimpleColors();
    setPassiveTouchGestures(true);
    import("@polymer/iron-image/iron-image.js");
    import("@lrnwebcomponents/simple-colors/lib/simple-colors-picker.js");
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/iron-icon/iron-icon.js");
    import("@polymer/paper-icon-button/paper-icon-button.js");
    import("@polymer/app-layout/app-header/app-header.js");
    import("@polymer/app-layout/app-toolbar/app-toolbar.js");
    import("@polymer/paper-item/paper-item.js");
    import("@polymer/paper-input/paper-input.js");
    import("@polymer/paper-dialog/paper-dialog.js");
    import("@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
    import("@polymer/paper-tooltip/paper-tooltip.js");
    import("@lrnwebcomponents/simple-picker/simple-picker.js");
    import("@lrnwebcomponents/simple-icon-picker/simple-icon-picker.js");
    import("@lrnwebcomponents/magazine-cover/magazine-cover.js");
    import("@lrnwebcomponents/eco-json-schema-form/eco-json-schema-form.js");
    import("@lrnwebcomponents/eco-json-schema-form/lib/eco-json-schema-object.js");
    window.HAXCMS = {};
    afterNextRender(this, function() {
      import("@polymer/iron-icons/iron-icons.js");
      import("@polymer/iron-icons/editor-icons.js");
      import("@polymer/iron-icons/notification-icons.js");
      import("@polymer/iron-icons/av-icons.js");
      import("@polymer/iron-icons/device-icons.js");
      import("@polymer/iron-icons/image-icons.js");
    });
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "haxcms-site-listing";
  }
  // render function
  static get template() {
    return html`
      <style include="simple-colors">
        paper-icon-button {
          --paper-icon-button-ink-color: #ffffff;
        }
        app-toolbar div[main-title] {
          margin-left: 24px;
          font-size: 28px;
        }
        app-header {
          color: #ffffff;
          @apply --layout-fixed-top;
          --app-header-background-rear-layer: {
            background-color: #3a0063;
          }
        }
        app-toolbar {
          color: #ffffff;
          background-color: #3a0063;
        }
        vaadin-grid {
          margin-top: 64px;
          height: calc(100vh - 64px);
        }
        paper-dialog {
          width: 60vw;
          min-height: 60vh;
          top: 15vh;
        }
        .buttons {
          text-align: center;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          margin-top: 2em;
          color: #3a0063;
          font-weight: 500;
        }
        #saveconfig,
        #create {
          width: 50%;
          height: 64px;
          background-color: #3a0063;
          color: white;
          margin-right: 48px;
        }
        paper-input {
          --paper-input-container-focus-color: #3a0063;
        }
        #newsitecolor {
          padding: 4px;
          margin: 0;
          display: inline-flex;
          vertical-align: middle;
        }
        #newsitecolor > * {
          display: inline-flex;
          align-self: center;
          margin-right: 8px;
          --simple-colors-picker-preview-size: 20px;
        }
        #loading {
          width: 100%;
          z-index: 1000;
          opacity: 0.8;
          padding: 16px;
          text-align: center;
          align-content: center;
          justify-content: center;
          height: 100vh;
          position: absolute;
          background-color: rgba(250, 250, 250, 0.8);
          transition: all linear 0.8s;
          visibility: visible;
        }
        #loading div {
          font-size: 32px;
          font-weight: bold;
          padding: 16px;
        }
        #loading[data-loading] {
          background-color: rgba(0, 0, 0, 0);
          opacity: 0;
          visibility: hidden;
        }
        .operations paper-button {
          font-weight: 500;
          font-size: 24px;
          color: white;
          margin: 0 16px;
        }
        #newsiteicon {
          display: inline-flex;
        }
        eco-json-schema-object {
          --eco-json-schema-object-form: {
            -ms-flex: unset;
            -webkit-flex: unset;
            flex: unset;
            -webkit-flex-basis: unset;
            flex-basis: unset;
          }
        }
        #configform {
          --eco-json-schema-object-form: {
            display: block !important;
          }
        }
      </style>
      <div>
        <jwt-login
          id="jwt"
          url="[[__loginPath]]"
          logout-url="[[__logoutPath]]"
          jwt="{{jwt}}"
        ></jwt-login>
        <iron-ajax
          id="loaddata"
          auto=""
          loading="{{__loading}}"
          url="[[dataSource]]"
          handle-as="json"
          debounce-duration="250"
          last-response="{{sitesResponse}}"
        ></iron-ajax>
        <iron-ajax
          id="createrequest"
          method="[[method]]"
          body="[[createParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__createNewSitePath]]"
          handle-as="json"
          on-response="handleCreateResponse"
        ></iron-ajax>
        <iron-ajax
          id="downloadrequest"
          method="[[method]]"
          body="[[downloadParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__downloadSitePath]]"
          handle-as="json"
          on-response="handleDownloadResponse"
        ></iron-ajax>
        <iron-ajax
          id="getconfigrequest"
          method="[[method]]"
          body="[[configParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__getConfigPath]]"
          handle-as="json"
          on-response="handleConfigResponse"
        ></iron-ajax>
        <iron-ajax
          id="setconfigrequest"
          method="[[method]]"
          body="[[setConfigParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__setConfigPath]]"
          handle-as="json"
          on-response="handleSetConfigResponse"
        ></iron-ajax>
      </div>
      <div id="loading" data-loading\$="[[!__loading]]">
        <elmsln-loading size="large"></elmsln-loading>
        <div>Loading..</div>
      </div>
      <vaadin-grid
        items="[[sites]]"
        theme="row-dividers"
        column-reordering-allowed
        multi-sort
      >
        <vaadin-grid-selection-column
          auto-select
          frozen
        ></vaadin-grid-selection-column>
        <vaadin-grid-column width="1em" header="Icon">
          <template
            ><iron-icon icon="[[item.metadata.icon]]"></iron-icon
          ></template>
        </vaadin-grid-column>
        <vaadin-grid-sort-column width="5em" path="title">
          <template>
            <a href$="[[item.location]]" target="_blank">[[item.title]]</a>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-filter-column
          width="5em"
          path="metadata.theme.name"
          header="Theme"
        ></vaadin-grid-filter-column>
        <vaadin-grid-column width="1em" header="color">
          <template>
            <div
              style$="width:48px;height:48px;background-color:[[item.metadata.hexCode]];"
            ></div>
          </template>
        </vaadin-grid-column>

        <vaadin-grid-column width="5em" flex-grow="2" header="Banner">
          <template
            ><iron-image
              sizing="contain"
              preload
              src$="[[item.metadata.image]]"
              style="width:100px; height:48px;"
            ></iron-image
          ></template>
        </vaadin-grid-column>
        <vaadin-grid-sort-column
          width="1em"
          header="Created"
          path="metadata.created"
        >
          <template>
            <template is="dom-if" if="[[item.metadata.created]]">
              <simple-datetime
                format="M jS, Y"
                timestamp="[[item.metadata.created]]"
                unix
              ></simple-datetime>
            </template>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-sort-column
          width="1em"
          header="Updated"
          path="metadata.updated"
        >
          <template>
            <template is="dom-if" if="[[item.metadata.updated]]">
              <simple-datetime
                format="M jS, Y"
                timestamp="[[item.metadata.updated]]"
                unix
              ></simple-datetime>
            </template>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-sort-column
          width="1em"
          header="Last published"
          path="metadata.lastPublished"
        >
          <template>
            <template is="dom-if" if="[[item.metadata.lastPublished]]">
              <simple-datetime
                format="M jS, Y"
                timestamp="[[item.metadata.lastPublished]]"
                unix
              ></simple-datetime>
            </template>
          </template>
        </vaadin-grid-sort-column>
      </vaadin-grid>
      <app-header reveals>
        <app-toolbar>
          <div class="operations">
            <paper-button on-tap="_loginUserRoutine" id="login"
              ><iron-icon icon="[[__loginIcon]]"></iron-icon>
              [[__loginText]]</paper-button
            >
          </div>
          <div main-title>[[title]]</div>
          <div class="operations">
            <paper-button
              on-tap="_addTap"
              id="add"
              raised
              hidden$="[[!loggedIn]]"
            >
              <iron-icon icon="icons:add"></iron-icon> Add new site
            </paper-button>
            <paper-button
              on-tap="_settingsTap"
              id="settings"
              raised
              hidden$="[[!loggedIn]]"
            >
              <iron-icon icon="icons:settings"></iron-icon> Global settings
            </paper-button>
          </div>
        </app-toolbar>
      </app-header>
      <paper-dialog id="newdialog" with-backdrop>
        <h3>Create new site</h3>
        <div>
          <paper-input
            id="newsitetitle"
            label="Title"
            required
            autofocus
            value="{{siteTitle}}"
          ></paper-input>
          <paper-input
            id="newsitedescription"
            label="Description"
          ></paper-input>
          <paper-input
            id="newsiteimage"
            label="Image"
            value="[[activeItem.metadata.image]]"
          ></paper-input>
          <label for="newsitecolor">Select a color:</label>
          <simple-colors-picker id="newsitecolor"></simple-colors-picker>
          <simple-picker id="newsitetheme" label="Theme"></simple-picker>
          <label for="newsiteicon">Select an icon:</label>
          <simple-icon-picker
            id="newsiteicon"
            hide-option-labels
            value="[[activeItem.metadata.icon]]"
          ></simple-icon-picker>
        </div>
        <div class="buttons">
          <paper-button on-tap="_createSite" dialog-confirm id="create" raised
            >Create your new site!</paper-button
          >
          <paper-button dialog-dismiss>cancel</paper-button>
        </div>
      </paper-dialog>
      <paper-dialog id="settingsdialog" with-backdrop>
        <h3>Edit HAXCMS configuration</h3>
        <paper-dialog-scrollable>
          <eco-json-schema-object id="settingsform"></eco-json-schema-object>
        </paper-dialog-scrollable>
        <div class="buttons">
          <paper-button
            on-tap="_saveConfig"
            dialog-confirm
            id="saveconfig"
            raised
            >Save</paper-button
          >
          <paper-button dialog-dismiss>cancel</paper-button>
        </div>
      </paper-dialog>
    `;
  }
  /**
   * Parse JSON Outline Schema for the items and bind that to sites
   */
  _sitesResponseChanged(newValue, oldValue) {
    if (newValue) {
      if (typeof newValue.items !== typeof undefined) {
        this.title = newValue.title;
        this.set("sites", []);
        this.set("sites", newValue.items);
        this.notifyPath("sites.*");
      }
    }
  }
  static get properties() {
    return {
      __loading: {
        type: Boolean
      },
      /**
       * Object, JSON Outline Schema format
       */
      sitesResponse: {
        type: Object,
        notify: true,
        observer: "_sitesResponseChanged"
      },
      method: {
        type: String,
        value: "POST"
      },
      /**
       * Title
       */
      title: {
        type: String,
        value: "Site list"
      },
      /**
       * Site title
       */
      siteTitle: {
        type: String
      },
      sites: {
        type: Array,
        notify: true
      },
      /**
       * Base path of where this is located.
       */
      basePath: {
        type: String
      },
      /**
       * Data Source to power the loading of sites in JSON Outline Schema format.
       */
      dataSource: {
        type: String,
        observer: "_dataSourceChanged"
      },
      /**
       * JSON Web token
       */
      jwt: {
        type: String,
        observer: "_jwtChanged"
      },
      /**
       * Request params for creating a new site
       */
      createParams: {
        type: Object,
        value: {}
      },
      /**
       * Request params for downloading a new site
       */
      downloadParams: {
        type: Object,
        value: {}
      },
      /**
       * Request params for loading config
       */
      configParams: {
        type: Object,
        value: {}
      },
      /**
       * Request params for loading config
       */
      setConfigParams: {
        type: Object,
        value: {}
      },
      /**
       * Active item that's being reviewed / has bubbled up.
       */
      activeItem: {
        type: Object,
        notify: true
      },
      /**
       * Logged in state
       */
      loggedIn: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: "_loggedInChanged"
      },
      /**
       * Edit mode
       */
      editMode: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false,
        observer: "_editModeChanged"
      }
    };
  }
  _dataSourceChanged(newValue) {
    if (newValue) {
      this._dataSource = newValue + "?" + Math.floor(Date.now() / 1000);
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _jwtLoggedIn(e) {
    if (e.detail) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _editModeChanged(newValue) {
    if (newValue) {
      this.__editIcon = "icons:check";
    } else {
      this.__editIcon = "icons:create";
    }
  }
  /**
   * Open the new dialog when tapped
   */
  _addTap() {
    // reset activeItem
    this.set("activeItem", {});
    this.set("activeItem", {
      title: "",
      description: "",
      metadata: {
        siteName: "",
        theme: "simple-blog",
        image: "assets/banner.jpg",
        color: "blue",
        icon: "icons:add-circle-outline"
      }
    });
    this.shadowRoot.querySelector("#newdialog").opened = true;
  }
  /**
   * Login state changed
   */
  _loggedInChanged(newValue, oldValue) {
    if (typeof oldValue !== typeof undefined) {
      if (newValue) {
        this.__loginText = "Log out";
        this.__loginIcon = "icons:account-circle";
        const evt = new CustomEvent("simple-toast-show", {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: {
            text: "Welcome, log in successful!",
            duration: 4000
          }
        });
        this.dispatchEvent(evt);
        this.shadowRoot.querySelector("#add").hidden = false;
      } else {
        this.__loginText = "Log in";
        this.__loginIcon = "icons:power-settings-new";
        const evt = new CustomEvent("simple-toast-show", {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: {
            text: "You logged out",
            duration: 4000
          }
        });
        this.dispatchEvent(evt);
        this.shadowRoot.querySelector("#add").hidden = true;
      }
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _jwtChanged(newValue) {
    if (newValue) {
      this.__loginText = "Log out";
      this.__loginIcon = "icons:account-circle";
    } else {
      this.__loginText = "Log in";
      this.__loginIcon = "icons:power-settings-new";
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _loginUserRoutine(e) {
    this.shadowRoot.querySelector("#jwt").toggleLogin();
  }
  /**
   * Use events for real value in theme.
   */
  _themeChanged(e) {
    // while not the actual spec for our theme metadata, this is the primary key
    // so the backend can update it correctly on response
    if (e.detail.value) {
      this.set("activeItem.metadata.theme", e.detail.value);
      this.notifyPath("activeItem.metadata.theme");
    }
  }
  /**
   * Use events for real value in color area.
   */
  _colorChanged(e) {
    this.set("activeItem.metadata.cssVariable", e.detail.value);
    this.notifyPath("activeItem.metadata.cssVariable");
    this.set(
      "activeItem.metadata.hexCode",
      this.SimpleColors.colors[
        e.detail.value
          .replace("--simple-colors-default-theme-", "")
          .replace("-7", "")
      ][6]
    );
    this.notifyPath("activeItem.metadata.hexCode");
  }
  /**
   * Toggle edit state
   */
  _editTap(e) {
    this.editMode = !this.editMode;
  }
  /**
   * _settingsTap
   */
  _settingsTap(e) {
    this._loadConfig();
    this.shadowRoot.querySelector("#settingsdialog").opened = true;
  }
  /**
   * force the request to regenerate
   */
  refreshData(e) {
    this.shadowRoot.querySelector("#loaddata").generateRequest();
  }
  /**
   * Attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
    afterNextRender(this, function() {
      this.__loginPath = window.appSettings.login;
      this.__logoutPath = window.appSettings.logout;
      let themeOptions = [];
      let firstTheme = null;
      for (var theme in window.appSettings.themes) {
        let item = [
          {
            alt: window.appSettings.themes[theme].name,
            value: theme
          }
        ];
        themeOptions.push(item);
        if (!firstTheme) {
          firstTheme = theme;
        }
      }
      this.shadowRoot.querySelector("#newsitetheme").options = themeOptions;
      if (!this.shadowRoot.querySelector("#newsitetheme").value) {
        this.shadowRoot.querySelector("#newsitetheme").value = firstTheme;
      }
      this.__setConfigPath = window.appSettings.setConfigPath;
      this.__getConfigPath = window.appSettings.getConfigPath;
      this.__createNewSitePath = window.appSettings.createNewSitePath;
      this.__downloadSitePath = window.appSettings.downloadSitePath;
      document.body.addEventListener(
        "haxcms-load-site",
        this.loadActiveSite.bind(this)
      );
      this.shadowRoot
        .querySelector("#newsitetheme")
        .addEventListener("change", this._themeChanged.bind(this));
      this.shadowRoot
        .querySelector("#newsitecolor")
        .addEventListener("change", this._colorChanged.bind(this));
      this.shadowRoot
        .querySelector("#jwt")
        .addEventListener("jwt-logged-in", this._jwtLoggedIn.bind(this));
    });
  }
  /**
   * detached life cycle
   */
  disconnectedCallback() {
    window.removeEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
    document.body.removeEventListener(
      "haxcms-load-site",
      this.loadActiveSite.bind(this)
    );
    this.shadowRoot
      .querySelector("#newsitetheme")
      .removeEventListener("change", this._themeChanged.bind(this));
    this.shadowRoot
      .querySelector("#newsitecolor")
      .removeEventListener("change", this._colorChanged.bind(this));
    this.shadowRoot
      .querySelector("#jwt")
      .removeEventListener("jwt-logged-in", this._jwtLoggedIn.bind(this));
    super.disconnectedCallback();
  }
  /**
   * Ready life cycle
   */
  ready() {
    super.ready();
    window.JSONOutlineSchema.requestAvailability();
    window.SimpleModal.requestAvailability();
    window.SimpleToast.requestAvailability();
    // set jwt from local storage bin
    this.jwt = localStorage.getItem("jwt");
  }
  /**
   * Simple method of loading whatever's been dictated as active.
   */
  loadActiveSite(e) {
    let findSite = this.sites.filter(site => {
      if (site.id !== e.detail.id) {
        return false;
      }
      return true;
    });
    let item = findSite.pop();
    // if location isn't there, push out to it
    if (item.location) {
      window.open(item.location);
    } else {
      window.open(this.basePath + "_sites/" + item.metadata.siteName + "/");
    }
  }
  /**
   * Create a new site button was clicked
   */
  _createSite(e) {
    // ship off a new call
    this.set(
      "createParams.siteName",
      this.shadowRoot.querySelector("#newsitetitle").value
    );
    this.notifyPath("createParams.siteName");
    this.set(
      "createParams.description",
      this.shadowRoot.querySelector("#newsitedescription").value
    );
    this.notifyPath("createParams.description");
    // need to pull this from the active item bc of data binding silly
    this.set("createParams.theme", this.activeItem.metadata.theme);
    this.notifyPath("createParams.theme");
    this.set("createParams.hexCode", this.activeItem.metadata.hexCode);
    this.notifyPath("createParams.hexCode");
    this.set("createParams.cssVariable", this.activeItem.metadata.cssVariable);
    this.notifyPath("createParams.cssVariable");
    this.set(
      "createParams.image",
      this.shadowRoot.querySelector("#newsiteimage").value
    );
    this.notifyPath("createParams.image");
    this.set(
      "createParams.icon",
      this.shadowRoot.querySelector("#newsiteicon").icon
    );
    this.notifyPath("createParams.icon");
    // pass along the jwt for user "session" purposes
    this.set("createParams.jwt", this.jwt);
    this.notifyPath("createParams.jwt");
    this.shadowRoot.querySelector("#newsitetitle").value = "";
    this.shadowRoot.querySelector("#newsitedescription").value = null;
    this.shadowRoot.querySelector("#createrequest").generateRequest();
  }
  /**
   * Download a new site button was clicked
   */
  _downloadSite(e) {
    // ship off a new call
    this.set("downloadParams.siteName", this.activeItem.metadata.siteName);
    this.notifyPath("downloadParams.siteName");
    // pass along the jwt for user "session" purposes
    this.set("downloadParams.jwt", this.jwt);
    this.notifyPath("downloadParams.jwt");
    this.shadowRoot.querySelector("#downloadrequest").generateRequest();
  }
  /**
   * Load configuration
   */
  _loadConfig() {
    // pass along the jwt for user "session" purposes
    this.set("configParams.jwt", this.jwt);
    this.notifyPath("configParams.jwt");
    this.set("configParams.token", this.createParams.token);
    this.notifyPath("configParams.token");

    this.shadowRoot.querySelector("#getconfigrequest").generateRequest();
  }
  /**
   * Save configuration
   */
  _saveConfig(e) {
    window.HAXCMS.config.values = this.shadowRoot.querySelector(
      "#settingsform"
    ).value;
    // pass along the jwt for user "session" purposes
    this.set("setConfigParams.values", {});
    this.set("setConfigParams.values", window.HAXCMS.config.values);
    this.notifyPath("setConfigParams.values.*");
    this.set("setConfigParams.jwt", this.jwt);
    this.notifyPath("setConfigParams.jwt");
    this.set("setConfigParams.token", this.createParams.token);
    this.notifyPath("setConfigParams.token");

    this.shadowRoot.querySelector("#setconfigrequest").generateRequest();
  }
  /**
   * Create a new site button was clicked
   */
  handleCreateResponse(e) {
    // update the listing data
    this._dataSource = this.dataSource + "?" + Math.floor(Date.now() / 1000);
    this.dispatchEvent(
      new CustomEvent("sites-listing-refresh-data", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: e.detail.response
      })
    );
    const evt = new CustomEvent("simple-toast-show", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        text: e.detail.response.title + " created successfully!",
        duration: 4000
      }
    });
    this.dispatchEvent(evt);
  }
  handleConfigResponse(e) {
    window.HAXCMS.config = e.detail.response;
    this.shadowRoot
      .querySelector("#settingsform")
      .set("schema", window.HAXCMS.config.schema);
    this.shadowRoot
      .querySelector("#settingsform")
      .set("value", window.HAXCMS.config.values);
  }
  handleSetConfigResponse(e) {
    this.shadowRoot.querySelector("#settingsdialog").opened = false;
    const evt = new CustomEvent("simple-toast-show", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        text: "HAXCMS configuration updated!",
        duration: 4000
      }
    });
    this.dispatchEvent(evt);
  }
  /**
   * Download a site
   */
  handleDownloadResponse(e) {
    // fire incase anyone cares
    this.dispatchEvent(
      new CustomEvent("download-site-listing", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: e.detail.response
      })
    );
    var element = document.createElement("a");
    element.setAttribute("href", e.detail.response.link);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    const evt = new CustomEvent("simple-toast-show", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        text: this.activeItem.title + " downloaded successfully!",
        duration: 4000
      }
    });
    this.dispatchEvent(evt);
  }
  /**
   * Option selected in an operation in context
   */
  _itemOptionSelected(e) {
    var element = e.detail.element;
    switch (e.detail.operation) {
      case "remove":
        if (e.detail.option === "option1") {
          const evt = new CustomEvent("simple-toast-show", {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: {
              text: "Deleting this",
              duration: 4000
            }
          });
          this.dispatchEvent(evt);
          // @todo send call out the door to delete callback
        }
        break;
      case "duplicate":
        if (e.detail.option === "option1") {
          const evt = new CustomEvent("simple-toast-show", {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: {
              text: "Duplicating this",
              duration: 4000
            }
          });
          this.dispatchEvent(evt);
          // @todo send call out the door to duplicate callback
        }
        break;
      case "move":
        if (e.detail.option === "option1") {
          const evt = new CustomEvent("simple-toast-show", {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: {
              text: "Move this item left",
              duration: 4000
            }
          });
          this.dispatchEvent(evt);
        } else {
          const evt = new CustomEvent("simple-toast-show", {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: {
              text: "Move this item right",
              duration: 4000
            }
          });
          this.dispatchEvent(evt);
        }
        // @todo send call out the door to commit the move callback
        break;
    }
  }
}
window.customElements.define(HAXCMSSiteListing.tag, HAXCMSSiteListing);
export { HAXCMSSiteListing };
