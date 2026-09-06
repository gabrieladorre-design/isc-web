import ArticlesSection from "@/components/data-display/ArticlesSection";
import { motoNewsletters } from "@/data/articles";
import { useI18n } from "@/i18n";

export default function MotoArticles() {
  const { t } = useI18n();

  return (
    <ArticlesSection
      newsletters={motoNewsletters}
      subtitle={t("articles.moto.subtitle")}
    />
  );
}
