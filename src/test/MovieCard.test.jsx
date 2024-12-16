import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MovieCard from "../components/MovieCard";

describe("MovieCard Component", () => {
  const movie = {
    poster_path: "/path/to/poster.jpg",
    title: "Example Movie",
    release_date: "2023-12-01",
    vote_average: 8.5,
  };

  it("Renderiza corretamente o título, data e nota do filme", () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByText("Example Movie")).toBeInTheDocument();
    expect(screen.getByText("2023-12-01")).toBeInTheDocument();
    expect(screen.getByText(/Rating: 8.5/i)).toBeInTheDocument();
  });

  it("Renderiza a imagem do pôster corretamente", () => {
    render(<MovieCard movie={movie} />);

    const posterImage = screen.getByRole("img", { name: /example movie movie/i });
    expect(posterImage).toBeInTheDocument();
    expect(posterImage).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500/path/to/poster.jpg"
    );
    expect(posterImage).toHaveAttribute("alt", "Example Movie movie");
  });
});
