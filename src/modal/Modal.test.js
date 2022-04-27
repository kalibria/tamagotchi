import { Modal } from "./Modal";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Modal", () => {
  it("should render modal title", async () => {
    render(<Modal />);
    const titleElement = screen.getByText(/Sorry your pet died/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render correct illness", async () => {
    render(<Modal prevStateIndicator="sick" illness="Botulism" />);
    const titleElement = screen.getByText(/Botulism/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render death from sickness", async () => {
    render(<Modal prevStateIndicator="sick" />);
    const titleElement = screen.getByText(/died due to illness/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render death from starvation", async () => {
    render(<Modal prevStateIndicator="hungry" />);
    const titleElement = screen.getByText(/died due to starvation/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render natural death", async () => {
    render(<Modal prevStateIndicator="fine" />);
    const titleElement = screen.getByText(/has lived a long great life/i);
    expect(titleElement).toBeInTheDocument();
  });
});
