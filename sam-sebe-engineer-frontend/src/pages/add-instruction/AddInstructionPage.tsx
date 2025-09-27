import { PageLayout } from "../../shared/layouts/PageLayout";
import { AddInstruction } from "../../features";
export const AddInstructionPage = () => {
  return (
    <>
      <PageLayout>
        <PageLayout.Main>
          <PageLayout.Section>
            <AddInstruction />
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
