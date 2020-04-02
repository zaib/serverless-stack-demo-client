import React from "react";
import { logError } from "../libs/errorLib";
import "./ErrorBoundary.css";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1 className="ErrorBoundary">
        Sorry there was a problem loading this page
      </h1>
    ) : (
      this.props.children
    );
  }
}
