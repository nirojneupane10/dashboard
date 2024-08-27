import { Suspense, ComponentType } from "react";
import Loading from "./loader/Loading";
import ErrorBoundary from "./ErrorBoundary";
const LazyLoad = (Component: ComponentType) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyLoad;
