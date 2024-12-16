import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/i18n";

describe('Footer Component', () => {
  beforeEach(() => {
    i18n.changeLanguage('pt'); 
  });

  it("Renderiza o Footer com textos traduzidos", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>
    );
    expect(screen.getByText(/desenvolvido por/i)).toBeInTheDocument();
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();
  });

  it("Renderiza os ícones de redes sociais com links corretos", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>
    );
    const facebookLink = screen.getByRole("link", { name: /facebook/i });
    const twitterLink = screen.getByRole("link", { name: /twitter/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
    expect(facebookLink).toHaveAttribute("href", "https://facebook.com");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com");
  });
});