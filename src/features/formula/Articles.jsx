import ArticlesSection from "@/components/data-display/ArticlesSection";
import { formulaNewsletters } from "@/data/articles";

export default function Articles() {
  return (
    <ArticlesSection
      newsletters={formulaNewsletters}
      subtitle="Toda la actualidad, avances y reportajes del equipo temporada a temporada."
    />
  );
}
