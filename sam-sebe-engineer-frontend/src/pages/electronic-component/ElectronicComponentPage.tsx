import { Navigate, useParams } from "react-router";
import { PageLayout } from "../../shared/layouts/PageLayout";
import { ElectronicComponentViewer } from "../../widgets";
import { getElectronicComponentById } from "../../shared/api/ElectrionicComponents";

export const ElectronicComponentPage = () => {
  const params = useParams<{ id: string }>();
  const componentId = Number(params.id);
  const electrionicComponent = getElectronicComponentById(componentId);
  if (!electrionicComponent) return <Navigate to="/404" replace />;
  return (
    <PageLayout>
      <PageLayout.Main>
        <PageLayout.Section>
          <ElectronicComponentViewer component={electrionicComponent} />
        </PageLayout.Section>
      </PageLayout.Main>
    </PageLayout>
  );
};
