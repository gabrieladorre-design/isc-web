import ArticlesSection from "@/components/data-display/ArticlesSection";
import { motoNewsletters } from "@/data/articles";

export default function MotoArticles() {
  return (
    <ArticlesSection
      newsletters={motoNewsletters}
      subtitle="Sigue el desarrollo de nuestro prototipo eléctrico mes a mes."
    />
  );
}
