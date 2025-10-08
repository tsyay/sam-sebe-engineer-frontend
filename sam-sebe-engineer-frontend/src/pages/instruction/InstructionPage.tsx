import { PageLayout } from "../../shared/layouts/PageLayout";
import { InstructionViewer } from "../../widgets/instruction-viewer/ui/InstructionViewer";
import { useParams, Navigate } from "react-router";
import { instructionApi, type Instruction } from "../../entities";
import { useEffect, useState } from "react";
export const InstructionPage = () => {
  const params = useParams<{ id: string }>();
  const instructionId = Number(params.id);
  const [instruction, setInstruction] = useState<Instruction>();
  useEffect(() => {
    instructionApi.getById(instructionId).then((instruction) => {
      setInstruction(instruction);
    });
  }, [instructionId]);
  if (!instruction) return <Navigate to="/404" replace />;
  return (
    <>
      <PageLayout>
        <PageLayout.Main>
          <PageLayout.Section>
            <PageLayout.Wrap>
              <h2 className="text-[72px]">{instruction.title}</h2>
              <InstructionViewer instruction={instruction} />
            </PageLayout.Wrap>
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
