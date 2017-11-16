/*
 * TodoList.test.jsx
 * Copyright (C) 2017 volare <volare@Rain.local>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var TodoList = require("TodoList");
var Todo = require("Todo");

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should equal", () => {
    expect("abc").toBe("abc");
  });
  it("should render one Todo component for each todo item", () => {
    var todos = [
      {
        id: 123,
        text: "one-two-three"
      },
      {
        id: 456,
        text: "cool aloha"
      },
      {
        id: 111,
        text: "ganymede"
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(
      todoList,
      Todo
    );
    expect(todoComponents.length).toBe(todos.length);
  });
});
