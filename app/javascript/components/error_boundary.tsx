import * as React from 'react';

class DefaultFallback extends React.Component {
  render() {
    return <div />;
  }
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = {
      hasError: false,
      error: {
        message: '',
        stack: '',
        name: '',
      },
      errorInfo: {
        componentStack: '',
      },
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    const {hasError, error, errorInfo} = this.state;
    const FallbackComponent = this.props.FallbackComponent || DefaultFallback;
    return hasError
      ? <FallbackComponent title={error.name} componentStack={errorInfo.componentStack} errorMessage={error.message} stack={error.stack} />
      : <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export const withFallback: WithFallback = (Component, FallbackComponent) => (props) => <ErrorBoundary FallbackComponent={FallbackComponent}>
  <Component {...props} />
</ErrorBoundary>;

export type WithFallback = <P = {}>(Component: React.ComponentType<P>, FallbackComponent?: React.ComponentType<any>) => React.ComponentType<P>;

export type ErrorBoundaryFallbackProps = {
  errorMessage: string;
  componentStack: string;
  stack: string;
  title: string;
};

export type ErrorBoundaryProps = {
  FallbackComponent?: React.ComponentType<ErrorBoundaryFallbackProps>;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error: {message: string, stack: string, name: string};
  errorInfo: {componentStack: string};
};
