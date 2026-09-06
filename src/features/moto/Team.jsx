import TeamSection from "@/components/data-display/TeamSection";
import { motoTeamMembers, motoCategories } from "@/data/moto/team";
import { useI18n } from "@/i18n";

export default function MotoTeam() {
  const { t } = useI18n();

  return (
    <TeamSection
      subtitle={t("team.moto.subtitle")}
      stats={t("team.moto.stats")}
      description={t("team.moto.description")}
      members={motoTeamMembers}
      categories={motoCategories}
    />
  );
}
