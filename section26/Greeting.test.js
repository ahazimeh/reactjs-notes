import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
    render(<Greeting />);
    //get functions will throw an error if an element isn't found
    //query fn won't do that
    //find fn will return a promise
    const helloWorldElement = screen.getByText("Hello World!", { exact: true }); //default true, exact false makes it case insansitive and will match substrings
    expect(helloWorldElement).toBeInTheDocument(); //.not.toBeInTheDocument but in this case then we have to use queryByText fn since getByText will fail
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    //Arrange
    render(<Greeting />);
    // Act do nothing

    //Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', async () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
