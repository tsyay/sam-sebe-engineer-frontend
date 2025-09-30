import { PageLayout } from "../../shared/layouts/PageLayout";
import { Kits } from "../../widgets";

export const KitsPage = () => {
  return (
    <PageLayout>
      <PageLayout.Main>
        <PageLayout.Section>
          <PageLayout.Wrap>
            <h2 className="text-[72px]">Наборы</h2>
            <Kits />
          </PageLayout.Wrap>
        </PageLayout.Section>
      </PageLayout.Main>
    </PageLayout>
  );
};
