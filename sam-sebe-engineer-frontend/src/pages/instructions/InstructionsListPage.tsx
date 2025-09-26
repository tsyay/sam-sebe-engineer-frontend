import { PageLayout } from "../../shared/layouts/PageLayout";
import { InstructionsList } from "../../widgets";
export const InstructionsListPage = () => {
  return (
    <PageLayout>
      <PageLayout.Main>
        <PageLayout.Section>
          <InstructionsList />
        </PageLayout.Section>
      </PageLayout.Main>
    </PageLayout>
  );
};
