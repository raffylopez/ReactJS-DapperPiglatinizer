/*
 * SyncedTypingApp.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
import SyncTypingPigLatinContent from "./SyncTypingPigLatinContent";
import SyncTypingSettingsPanel from "./SyncTypingSettingsPanel";
import axios from "axios";
var SyncedTypingTextInput = require("SyncedTypingTextInput");
var SyncedTypingMainContent = require("SyncedTypingMainContent");
var { syncedTypingReducer } = require("../reducers/reducers.jsx");
var store = require("../store/redux-store.jsx").configure(syncedTypingReducer);
var { Provider } = require("react-redux");
var FoobarThingie = require("FoobarThingie");
var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement("div");

  function decodeHTMLEntities(str) {
    if (str && typeof str === "string") {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = "";
    }

    return str;
  }

  return decodeHTMLEntities;
})();
var getQuote = () => {
  return axios.get(
    "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
  );
};
var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement("div");

  function decodeHTMLEntities(str) {
    if (str && typeof str === "string") {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = "";
    }

    return str;
  }

  return decodeHTMLEntities;
})();
class SyncedTypingApp extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.method = this.method.bind(this);
  }

  method() {}

  componentDidMount() {
    document.title = "Pig-Latin Translator";
    getQuote().then(
      response => {
        var quote = response.data[0].content + " -- " + response.data[0].title;
        var cleanquote = quote.replace(/<\/?[^>]+(>|$)/g, "");
        cleanquote = decodeEntities(cleanquote);
        console.log(response);
        store.dispatch({
          type: "SYNCEDTYPING::CHANGE_TEXT",
          newText: cleanquote
        });
      },
      err => {
        console.log("UH-OH: " + err);
      }
    );
  }

  componentWillMount() {}
  render() {
    return (
      <Provider store={store}>
        <div>
          <img
            src="./img/piggy-a.png"
            className="float-center"
            style={{ width: "100px", height: "auto" }}
          />
          <h2 className="text-center">Just Another Pig-Latin Converter</h2>
          <div className="row">
            <div className="large-6 medium-12 columns">
              <SyncedTypingTextInput />
            </div>
            {/*<SyncedTypingMainContent />*/}
            <div className="large-6 medium-12 columns">
              <SyncTypingSettingsPanel />
            </div>
          </div>
          <SyncTypingPigLatinContent />
          {/*<FoobarThingie />*/}
        </div>
      </Provider>
    );
  }
}

SyncedTypingApp.propTypes = {};

SyncedTypingApp.defaultProps = {};

module.exports = SyncedTypingApp;
