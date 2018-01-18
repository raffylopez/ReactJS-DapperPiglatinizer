import React, { Component } from "react";
import { connect } from "react-redux";

class SyncTypingSettingsPanel extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  onChangeHandler = () => {
    var { dispatch } = this.props;
    dispatch({ type: "SYNCEDTYPING::TOGGLE_MIN_CHARS" });
  };

  onClickIgnoreCommonCb = () => {
    var { dispatch } = this.props;
    dispatch({
      type: "SYNCEDTYPING::TOGGLE_IGNORE_COMMON"
    });
  };

  onChangeMinChars = () => {
    if (this.refs.tf_minchars.value < 1) {
      this.refs.tf_minchars.value = 1;
      return;
    }

    if (this.refs.tf_minchars.value > 9) {
      this.refs.tf_minchars.value = 9;
      return;
    }

    var { dispatch } = this.props;
    dispatch({
      type: "SYNCEDTYPING::SET_MIN_CHARS",
      minChars: this.refs.tf_minchars.value
    });
  };

  render() {
    var tfMinChars_cn = this.props.options.minCharsActive
      ? "is-visible"
      : "is-hidden";
    console.log("FOOOOOBAR");
    console.log(this.props.options.minCharsActive);
    return (
      <div>
        <fieldset className="fieldset" style={{ marginBottom: "24px" }}>
          <legend>Options</legend>

          <div className="row">
            <div className="large-12 columns">
              <input
                id="checkbox12"
                type="checkbox"
                onChange={this.onChangeHandler}
                checked={this.props.options.minCharsActive}
              >
                <label htmlFor="checkbox12">Ignore word if length &lt;=</label>
              </input>
              <div>
                <input
                  id="tf_minchars"
                  ref="tf_minchars"
                  type="number"
                  className={tfMinChars_cn}
                  onChange={this.onChangeMinChars}
                  value={this.props.options.minChars}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              {/*<input id="checkbox12" type="checkbox" />*/}
              <input
                id="icwa-cb"
                type="checkbox"
                checked={this.props.options.ignoreCommonWordsActive}
                onChange={this.onClickIgnoreCommonCb}
              >
                <label htmlFor="icwa-cb">Skip common (a, the, etc.)</label>
              </input>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

module.exports = connect(state => {
  return {
    options: state.options
  };
})(SyncTypingSettingsPanel);
