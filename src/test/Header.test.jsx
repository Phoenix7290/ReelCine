import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "../components/Header";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header Component", () => {
  beforeEach(() => {
    i18n.changeLanguage("pt");
  });

  it("Renderiza o Header com textos traduzidos", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Router>
          <Header />
        </Router>
      </I18nextProvider>
    );

    expect(screen.getByText(/ReelCine/i)).toBeInTheDocument();
    expect(screen.getByText(/início/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/modo escuro/i)).toBeInTheDocument(); // Texto inicial do botão de tema
  });

  it("Alterna o menu de navegação ao clicar no ícone do menu", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Router>
          <Header />
        </Router>
      </I18nextProvider>
    );

    const menuIcon = screen.getByRole("button", { hidden: true });
    fireEvent.click(menuIcon); 
    expect(screen.getByRole("navigation")).toHaveClass("block");
    fireEvent.click(menuIcon); 
    expect(screen.getByRole("navigation")).toHaveClass("hidden");
  });

  it("Alterna o tema entre claro e escuro ao clicar no botão", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Router>
          <Header />
        </Router>
      </I18nextProvider>
    );

    const themeToggleButton = screen.getByRole("button", { name: /modo escuro/i });

    expect(document.documentElement).not.toHaveClass("dark");

    fireEvent.click(themeToggleButton); 
    expect(document.documentElement).toHaveClass("dark");

    fireEvent.click(themeToggleButton); 
    expect(document.documentElement).not.toHaveClass("dark");
  });
});
