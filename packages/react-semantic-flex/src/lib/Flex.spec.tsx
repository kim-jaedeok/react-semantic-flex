import { render, screen } from "@testing-library/react";
import { Flex, SupportedFlexProperty } from "./Flex";
import { createRef } from "react";

describe("Flex", () => {
  it("renders the component with the display attribute as flex", () => {
    const testId = "default";
    render(<Flex data-testid={testId}>Hello World</Flex>);

    const renderedElement = screen.getByTestId(testId);
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveClass("flex");
  });

  it("renders the component with the specified flex properties", () => {
    const testId = "flex";
    const flexProps: SupportedFlexProperty = {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    };
    render(
      <Flex data-testid={testId} {...flexProps}>
        Hello World
      </Flex>,
    );

    const renderedElement = screen.getByTestId(testId);
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveStyle(flexProps);
  });

  it("renders the component with the specified tag", () => {
    const testId = "tag";
    render(
      <Flex data-testid={testId} tagName="section">
        Hello World
      </Flex>,
    );

    const renderedElement = screen.getByTestId(testId);
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement.tagName).toBe("SECTION");
  });

  it("renders the component with additional className", () => {
    const testId = "className";
    const className = "custom-class";
    render(
      <Flex data-testid={testId} className={className}>
        Hello World
      </Flex>,
    );

    const renderedElement = screen.getByTestId(testId);
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveClass(className);
  });

  it("forwards the ref to the rendered element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Flex ref={ref}>Hello World</Flex>);

    expect(ref.current).toBeInTheDocument();
  });
});
