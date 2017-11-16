/*
 * TodoApp.test.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import $ from "jquery";
import TodoApp from "TodoApp";

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });
  it("should equal", () => {
    expect("abc").toBe("abc");
  });
});
