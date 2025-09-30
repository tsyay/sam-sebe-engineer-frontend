import { PageLayout } from "../../shared/layouts/PageLayout";
import { Kits } from "../../widgets";

export const KitsPage = () => {
  return (
    <PageLayout>
      <PageLayout.Main>
        <PageLayout.Section>
          <Kits />
        </PageLayout.Section>
      </PageLayout.Main>
    </PageLayout>
  );
};
