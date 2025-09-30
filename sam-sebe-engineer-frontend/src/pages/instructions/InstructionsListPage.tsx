import { PageLayout } from "../../shared/layouts/PageLayout";
import { InstructionsList } from "../../widgets";
export const InstructionsListPage = () => {
  return (
    <PageLayout>
      <PageLayout.Main>
        <PageLayout.Section>
          <PageLayout.Wrap>
            <h2 className="text-[72px]">Инструкции</h2>
            <InstructionsList />
          </PageLayout.Wrap>
        </PageLayout.Section>
      </PageLayout.Main>
    </PageLayout>
  );
};
