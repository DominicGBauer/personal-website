import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

test("loads and displays greeting", async () => {
  render(<NavBar />);

  expect(screen.getByText("NavBar")).toBeInTheDocument();
});
