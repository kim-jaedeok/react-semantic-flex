import { CSSProperties, ForwardedRef, forwardRef, useMemo } from "react";
import { DynamicTag, DynamicTagProps, TagName } from "./DynamicTag";

import classNames from "classnames/bind";
import styles from "./Flex.module.scss";

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

type FlexProps<T extends TagName> = SupportedFlexProperty &
  Omit<DynamicTagProps<T>, "ref">;

export const Flex = forwardRef(
  <T extends TagName>(
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
    }: FlexProps<T>,
    ref: ForwardedRef<HTMLElementTagNameMap[T]>,
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
      <DynamicTag
        ref={ref}
        className={cx("flex", className)}
        style={memoizedFlexProperty}
        {...rest}
      >
        {children}
      </DynamicTag>
    );
  },
);

Flex.displayName = "Flex";
