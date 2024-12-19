import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo?: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    errorInfo: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    // 에러가 발생하면 상태를 업데이트
    return { hasError: true, errorInfo: error.message };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // props가 변경되면 상태를 초기화
    if (prevProps.children !== this.props.children) {
      this.setState({ hasError: false, errorInfo: undefined });
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.errorInfo}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
