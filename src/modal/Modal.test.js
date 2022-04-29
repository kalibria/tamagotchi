import { Modal } from "./Modal";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Modal", () => {
  it("should render modal title", async () => {
    render(
      <Modal
        petName="Nick"
        age={3}
        stateIndicator="dead"
        prevStateIndicator="sick"
        illness="Botulism"
      />
    );
    const titleElement = screen.getByText(/Sorry your pet died/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render correct illness Botulism", async () => {
    render(
      <Modal
        petName="Nick"
        age={3}
        stateIndicator="dead"
        prevStateIndicator="sick"
        illness="Botulism"
      />
    );
    const titleElement = screen.getByText(/Botulism/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should not render illness Botulism", async () => {
    render(
      <Modal
        petName="Nick"
        age={3}
        stateIndicator="dead"
        prevStateIndicator="sick"
        illness="Coccidiosis"
      />
    );
    const titleElement = screen.queryByText(/Botulism/i);
    expect(titleElement).not.toBeInTheDocument();
  });

  describe("render correct death reason", () => {
    it("should render death from sickness", async () => {
      render(
        <Modal
          petName="Nick"
          age={3}
          stateIndicator="dead"
          prevStateIndicator="sick"
          illness="Botulism"
        />
      );
      const titleElement = screen.getByText(/died due to illness/i);
      expect(titleElement).toBeInTheDocument();
    });

    it("should render death from starvation", async () => {
      render(
        <Modal
          petName="Nick"
          age={3}
          stateIndicator="dead"
          prevStateIndicator="hungry"
          illness="Botulism"
        />
      );
      const titleElement = screen.getByText(/died due to starvation/i);
      expect(titleElement).toBeInTheDocument();
    });

    it("should render natural death", async () => {
      render(
        <Modal
          petName="Nick"
          age={3}
          stateIndicator="dead"
          prevStateIndicator="fine"
          illness="Botulism"
        />
      );
      const titleElement = screen.getByText(/has lived a long great life/i);
      expect(titleElement).toBeInTheDocument();
    });

    it("should not render illness", async () => {
      render(
        <Modal
          petName="Nick"
          age={3}
          stateIndicator="dead"
          prevStateIndicator="fine"
          illness="Botulism"
        />
      );
      const titleElement = screen.queryByText(/Botulism/i);
      expect(titleElement).not.toBeInTheDocument();
    });
  });

  it("the modal window is not showing when we click on the close button", async () => {
    render(
      <Modal
        petName="Nick"
        age={3}
        stateIndicator="dead"
        prevStateIndicator="fine"
        illness="Botulism"
      />
    );
    const modalWindowElement = screen.queryByRole("div", {
      name: /Sorry your pet died!/i,
    });
    const buttonElement = screen.getByRole("button", { name: /close/i });
    fireEvent.click(buttonElement);
    expect(modalWindowElement).not.toBe();
  });
});
