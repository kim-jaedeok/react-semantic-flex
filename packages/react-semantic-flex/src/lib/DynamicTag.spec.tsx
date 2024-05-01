import { render, screen } from "@testing-library/react";
import { DynamicTag } from "./DynamicTag";
import { createRef } from "react";

describe("DynamicTag", () => {
  it("renders the component with the specified tag name", () => {
    const testId = "h1";
    render(
      <DynamicTag tagName="h1" data-testid={testId}>
        H1
      </DynamicTag>,
    );

    const renderedElement = screen.getByTestId(testId);
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement.tagName).toBe("H1");
  });

  it("renders the component with the default tag name if not specified", () => {
    const testId = "default";
    render(<DynamicTag data-testid={testId}>Div</DynamicTag>);

    const renderedElement = screen.getByTestId(testId);
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement.tagName).toBe("DIV");
  });

  it("passes down the provided properties to the rendered element", () => {
    const testId = "properties";
    const href = "https://example.com";
    render(
      <DynamicTag tagName="a" href={href} data-testid={testId}>
        Link
      </DynamicTag>,
    );

    const renderedElement = screen.getByTestId(testId);
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement.tagName).toBe("A");
    expect(renderedElement).toHaveAttribute("href", href);
  });

  it("forwards the ref to the rendered element", () => {
    const ref = createRef<HTMLDivElement>();
    render(<DynamicTag ref={ref}>Hello World</DynamicTag>);

    expect(ref.current).toBeInTheDocument();
  });
});
