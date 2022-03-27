import { cleanup, screen } from "solid-testing-library";

import { renderWithHopeProvider } from "@/utils/test-utils";

import { buttonStyles } from "../button/button.styles";
import { IconButton, IconButtonOptions } from "./icon-button";
import { IconCheckCircleSolid } from "../icons/IconCheckCircleSolid";

describe("IconButton", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("should render", () => {
    // act
    renderWithHopeProvider(() => <IconButton aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toBeInTheDocument();
  });

  it("should render <button> tag by default", () => {
    // act
    renderWithHopeProvider(() => <IconButton aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it("should render tag provided with the as prop", () => {
    // act
    renderWithHopeProvider(() => <IconButton as="a" aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toBeInstanceOf(HTMLAnchorElement);
  });

  it("should have type=button", () => {
    // act
    renderWithHopeProvider(() => <IconButton aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveAttribute("type", "button");
  });

  it("should have role=button", () => {
    // act
    renderWithHopeProvider(() => <IconButton aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveAttribute("role", "button");
  });

  it("should have semantic hope class", () => {
    // act
    renderWithHopeProvider(() => <IconButton aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveClass("hope-icon-button");
  });

  it("should return semantic hope class as css selector when calling toString()", () => {
    expect(IconButton.toString()).toBe(".hope-icon-button");
  });

  it("should have class from class prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => <IconButton class={stubClass} aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveClass(stubClass);
  });

  it("should have class from className prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      // eslint-disable-next-line solid/no-react-specific-props
      <IconButton className={stubClass} aria-label="User" icon={<IconCheckCircleSolid />} />
    ));
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveClass(stubClass);
  });

  it("should have class from classList prop", () => {
    // arrange
    const stubClass = "stub";

    // act
    renderWithHopeProvider(() => (
      <IconButton classList={{ [stubClass]: true }} aria-label="User" icon={<IconCheckCircleSolid />} />
    ));
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveClass(stubClass);
  });

  it("should have stitches generated class from buttonStyles", () => {
    // arrange
    const buttonClass = buttonStyles();

    // act
    renderWithHopeProvider(() => <IconButton aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveClass(buttonClass.className);
  });

  it("should have stitches generated class from variants prop", () => {
    // arrange
    const variantProps: Omit<IconButtonOptions, "aria-label" | "icon"> = {
      variant: "subtle",
      colorScheme: "success",
      size: "lg",
      compact: true,
      loading: false,
    };
    const buttonClass = buttonStyles(variantProps);

    // act
    renderWithHopeProvider(() => <IconButton {...variantProps} aria-label="User" icon={<IconCheckCircleSolid />} />);
    const button = screen.getByRole("button");

    // assert
    expect(button).toHaveClass(buttonClass.className);
  });
});
