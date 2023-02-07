import {Component} from 'react';
import FallbackComponent from './FallbackComponent';
import React from 'react';

interface ErrorBoundaryProps {
  fallbackComponent: React.ReactNode;
  children: React.ReactNode;
}
class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
    error: {
      name: '',
      message: '',
    },
  };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return <FallbackComponent error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
