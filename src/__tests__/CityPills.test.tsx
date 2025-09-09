import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CityPills from "../components/CityPills";

describe("CityPills", () => {
  it("renders all default city pills", () => {
    render(<CityPills />);
    const cities = [
      "Jobs in California",
      "Jobs in Arizona",
      "Jobs in Washington",
      "Jobs in New York",
      "Jobs in Florida",
    ];
    cities.forEach((city) => {
      expect(screen.getByRole("button", { name: city })).toBeInTheDocument();
    });
  });

  it("renders custom city pills", () => {
    const customCities = ["Jobs in Paris", "Jobs in Berlin"];
    render(<CityPills cities={customCities} />);
    customCities.forEach((city) => {
      expect(screen.getByRole("button", { name: city })).toBeInTheDocument();
    });
  });
});
