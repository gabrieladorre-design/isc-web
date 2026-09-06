import ArticlesSection from "@/components/data-display/ArticlesSection";
import { formulaNewsletters } from "@/data/articles";
import { useI18n } from "@/i18n";

export default function Articles() {
  const { t } = useI18n();

  return (
    <ArticlesSection
      newsletters={formulaNewsletters}
      subtitle={t("articles.formula.subtitle")}
    />
  );
}
