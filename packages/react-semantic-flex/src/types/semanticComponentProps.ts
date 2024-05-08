import { ComponentPropsWithRef, ElementType } from "react";

export type SemanticComponentProps<T extends ElementType = "div"> =
  ComponentPropsWithRef<T> & {
    tagName?: T;
  };
