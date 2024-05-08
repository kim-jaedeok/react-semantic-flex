import {
  CSSProperties,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  useMemo,
} from "react";
import { DynamicTag } from "./DynamicTag";

import classNames from "classnames/bind";
import styles from "./Flex.module.scss";
import { SemanticComponentProps } from "../types/semanticComponentProps";
import { TagName } from "../types/tagName";

const cx = classNames.bind(styles);

export type SupportedFlexProperty = Pick<
  CSSProperties,
  | "flex"
  | "flexBasis"
  | "flexDirection"
  | "flexFlow"
  | "flexGrow"
  | "flexShrink"
  | "flexWrap"
  | "alignItems"
  | "alignSelf"
  | "alignContent"
  | "justifyItems"
  | "justifySelf"
  | "justifyContent"
  | "gap"
>;

type FlexProps<E extends ElementType> = Omit<
  SemanticComponentProps<E>,
  "style"
> &
  SupportedFlexProperty;

type Flex = (<T extends TagName = "div">(
  props: FlexProps<T>,
) => React.ReactElement | null) & {
  displayName?: string;
};

export const Flex = forwardRef(
  <E extends ElementType>(
    {
      children,
      className,
      alignContent,
      alignItems,
      alignSelf,
      flex,
      flexBasis,
      flexDirection,
      flexFlow,
      flexGrow,
      flexShrink,
      flexWrap,
      gap,
      justifyContent,
      justifyItems,
      justifySelf,
      ...rest
    }: Omit<SemanticComponentProps<E>, "style"> & SupportedFlexProperty,
    ref: ComponentPropsWithRef<E>["ref"],
  ) => {
    const memoizedFlexProperty = useMemo<SupportedFlexProperty>(
      () =>
        Object.entries({
          alignContent,
          alignItems,
          alignSelf,
          flex,
          flexBasis,
          flexDirection,
          flexFlow,
          flexGrow,
          flexShrink,
          flexWrap,
          gap,
          justifyContent,
          justifyItems,
          justifySelf,
        }).reduce(
          (acc, [key, value]) =>
            value !== undefined || null ? { ...acc, [key]: value } : acc,
          {},
        ),
      [
        alignContent,
        alignItems,
        alignSelf,
        flex,
        flexBasis,
        flexDirection,
        flexFlow,
        flexGrow,
        flexShrink,
        flexWrap,
        gap,
        justifyContent,
        justifyItems,
        justifySelf,
      ],
    );

    return (
      <DynamicTag<TagName>
        ref={ref}
        className={cx("flex", className)}
        style={memoizedFlexProperty}
        {...rest}
      >
        {children}
      </DynamicTag>
    );
  },
) as Flex;
