import { ForwardedRef, HTMLProps, forwardRef } from "react";

import { createElement } from "react";

export type TagName = keyof HTMLElementTagNameMap;
export interface DynamicTagProps<T extends HTMLElement["tagName"] = "div">
  extends HTMLProps<T> {
  tagName?: T;
}

export const DynamicTag = forwardRef(
  <T extends TagName = "div">(
    props: DynamicTagProps<T>,
    ref: ForwardedRef<HTMLElementTagNameMap[T]>,
  ) => {
    const { tagName = "div", children, ...properties } = props;

    return createElement(tagName, { ...properties, ref }, children);
  },
);

DynamicTag.displayName = "DynamicTag";
