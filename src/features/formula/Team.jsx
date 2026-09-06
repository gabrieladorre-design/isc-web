import TeamSection from "@/components/data-display/TeamSection";
import { teamMembers, categories } from "@/data/team";
import { useI18n } from "@/i18n";

export default function Team() {
  const { t } = useI18n();

  return (
    <TeamSection
      subtitle={t("team.formula.subtitle")}
      stats={t("team.formula.stats")}
      description={t("team.formula.description")}
      members={teamMembers}
      categories={categories}
    />
  );
}
