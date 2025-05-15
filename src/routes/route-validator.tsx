// Dependencies
import { Suspense } from 'react';
import type { FunctionComponent } from 'react';

type RouteValidatorProps = {
  component: FunctionComponent;
};

export const RouteValidator: FunctionComponent<RouteValidatorProps> = ({
  component: Component,
}) => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
};
