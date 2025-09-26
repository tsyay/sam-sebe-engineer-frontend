import { PageLayout } from "../../shared/layouts/PageLayout";
import { InstructionViewer } from "../../widgets/instruction-viewer/ui/InstructionViewer";
import { useParams, Navigate } from "react-router";
import { getInstructionById } from "../../widgets/instruction-viewer/api/InstructionsMockups";

export const InstructionPage = () => {
  const params = useParams<{ id: string }>();
  const instructionId = Number(params.id);
  const instruction = getInstructionById(instructionId);
  if (!instruction) return <Navigate to="/404" replace />;
  return (
    <>
      <PageLayout>
        <PageLayout.Main>
          <PageLayout.Section>
            <InstructionViewer instruction={instruction} />
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
