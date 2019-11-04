/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { SimpleColors } from "../simple-colors.js";
import "@lrnwebcomponents/simple-picker/simple-picker.js";

/**
 * `simple-colors-picker`
 * a select element for changing `simple-colors` attributes in demos
 *
 * @customElement
 * @demo demo/picker.html demo
 * @see "../simple-colors.js"
 * @see "./demo/simple-colors-picker-demo.js"
 */
class SimpleColorsPicker extends SimpleColors {
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
        }
        :host([hidden]) {
          display: none;
        }
      `
    ];
  }
  // render function
  render() {
    return html`
      <simple-picker
        id="picker"
        aria-labelledby="${this.ariaLabelledby}"
        label="${this.label}"
        ?disabled="${this.disabled}"
        ?expanded="${this.expanded}"
        ?hide-option-labels="${this.shades}"
        @change="${this._handleChange}"
        @collapse="${this._handleCollapse}"
        @expand="${this._handleExpand}"
        @option-focus="${this._handleOptionFocus}"
        .block-label="${this.blockLabel ? this.blockLabel : false}"
        .options="${this.options}"
        .value="${this.value}"
      >
      </simple-picker>
    `;
  }
  constructor() {
    super();
    this.ariaLabelledby = null;
    this.blockLabel = false;
    this.disabled = false;
    this.expanded = false;
    this.label = null;
    this.shades = false;
    this.value = null;
    this.__ready = false;
    this.options = this._getOptions(this.colors, this.shades, this.dark);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "colors")
        this.options = this._getOptions(this.colors, this.shades, this.dark);
      if (propName === "shades")
        this.options = this._getOptions(this.colors, this.shades, this.dark);
      if (propName === "dark")
        this.options = this._getOptions(this.colors, this.shades, this.dark);
    });
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * Optional. Sets the aria-labelledby attribute
       */
      ariaLabelledby: {
        type: String,
        attribute: "aria-labelledby"
      },

      /**
       * Display as a block
       */
      blockLabel: {
        type: Boolean,
        attribute: "block-label"
      },

      /**
       * Is the picker disabled?
       */
      disabled: {
        type: Boolean
      },

      /**
       * Is it expanded?
       */
      expanded: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Optional. The label for the picker input
       */
      label: {
        type: String
      },

      /**
       * An array of options for the picker, eg.: `
[
  {
    "icon": "editor:format-paint",      //Optional. Used if the picker is used as an icon picker.
    "alt": "Blue",                      //Required for accessibility. Alt text description of the choice.
    "style": "background-color: blue;", //Optional. Used to set an option's style.
    ...                                 //Optional. Any other properties that should be captured as part of the selected option's value
  },...
]`
        */
      options: {
        type: Array,
        reflectToAttribute: false //,observer: false
      },
      /**
       * Show all shades instead of just main accent-colors
       */
      shades: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * The value of the option.
       */
      value: {
        type: String,
        reflectToAttribute: true //,notify: true
      },
      /**
       *
       */
      __ready: {
        type: Boolean
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "simple-colors-picker";
  }

  /**
   * gets options for the selectors
   *
   * @param {object} the options object to convert
   */
  _getOptions(colors, shades, dark) {
    let options = [[]],
      theme = dark !== false ? "dark" : "default";
    if (shades === false) {
      options = Object.keys(this.colors).map(key => {
        return [
          {
            alt: key,
            value: key
          }
        ];
      });
      options.unshift([
        {
          alt: "none",
          value: null
        }
      ]);
    } else {
      let colorNames = Object.keys(colors);
      for (let i = 0; i < colors[colorNames[0]].length; i++) {
        let shade = Object.keys(colors).map(key => {
          let name = key + "-" + (i + 1),
            cssvar = "--simple-colors-" + theme + "-theme-" + name;
          return {
            alt: name,
            style: "background-color: var(" + cssvar + ")",
            value: cssvar
          };
        });
        options.push(shade);
      }
    }
    return options;
  }

  /**
   * handles when the picker's value changes
   */
  _handleChange(e) {
    this.value = e.detail.value;
    if (this.__ready !== undefined)
      this.dispatchEvent(
        new CustomEvent("change", { bubbles: true, detail: this })
      );
  }

  /**
   * handles when the picker collapses
   */
  _handleCollapse() {
    if (this.__ready !== undefined)
      this.dispatchEvent(new CustomEvent("collapse", { detail: this }));
  }

  /**
   * handles when the picker expands
   */
  _handleExpand() {
    if (this.__ready !== undefined)
      this.dispatchEvent(new CustomEvent("expand", { detail: this }));
  }

  /**
   * handles when the picker's focus changes
   */
  _handleOptionFocus(e) {
    if (this.__ready !== undefined)
      this.dispatchEvent(new CustomEvent("option-focus", { detail: this }));
  }
}

export { SimpleColorsPicker };

window.customElements.define(SimpleColorsPicker.tag, SimpleColorsPicker);
