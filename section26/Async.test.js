import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn(); //replace fetch with this to not send a request to the backend, //fn creates a dummy function
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      "listitem",
      { exact: true },
      { timeout: 1000 } //default
    ); //getAllByRole will instantly look for elements in the screen so this would wait for elements to fetch
    expect(listItemElements).not.toHaveLength(0);
  });
});
