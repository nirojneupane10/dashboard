import { Suspense, ComponentType } from "react";
import Loading from "./loader/Loading";
const LazyLoad = (Component: ComponentType) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default LazyLoad;
