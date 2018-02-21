import React, { Component } from "react";

// IMPORTING NAVIGATOR SO WE CAN SWITCH BETWEEN ROUTES
import { StackNavigator } from "react-navigation";

// IMPORTING COMPONENTS
import Add from "./components/screens/Add/Add";
import Subtract from "./components/screens/Subtract/Subtract";

// DECLARE ROUTER AND USE NAVIGATOR
export const Router = StackNavigator({
  // DECLARE ROUTES
  // THE ORDER MATTERS, FIRST DECLARED ROUTE WILL BE THE FIRST SCREEN TO LOAD

  // DECLARE "Add" ROUTE
  Add: {
    // SCREEN IS THE COMPONENT YOU WANT TO LOAD WHEN ON "Add" ROUTE
    screen: Add,
    // CUSTOMIZE THE HEADER, STYLE CAN BE CHANGED INSIDE HERE
    navigationOptions: {
      title: "Add Page"
    }
  },
  // DECLARE "Subtract" ROUTE
  Subtract: {
    screen: Subtract,
    navigationOptions: {
      title: "Subtract Page"
    }
  }
});

// yarn add react-navigation
