import React, { ComponentPropsWithRef, ElementType, forwardRef } from "react";
import { SemanticComponentProps } from "../types/semanticComponentProps";
import { TagName } from "../types/tagName";

type DynamicTag = (<T extends TagName = "div">(
  props: SemanticComponentProps<T>,
) => React.ReactElement | null) & {
  displayName?: string;
};

export const DynamicTag = forwardRef(
  <E extends ElementType = "div">(
    { tagName, ...properties }: SemanticComponentProps<E>,
    ref: ComponentPropsWithRef<E>["ref"],
  ) => {
    const Tag = tagName || "div";

    return <Tag {...properties} ref={ref} />;
  },
) as DynamicTag;

DynamicTag.displayName = "DynamicTag";
