import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  test("renders main sections", () => {
    render(<App />);

    // 주요 섹션 제목이 렌더링되는지 확인
    //expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/work history/i)).toBeInTheDocument();
    expect(screen.getByText(/education/i)).toBeInTheDocument();
  });
});
