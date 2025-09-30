import { Navigate, useParams } from "react-router";
import { PageLayout } from "../../shared/layouts/PageLayout";
import { ElectronicComponentViewer } from "../../widgets";
import { getElectronicComponentById } from "../../shared/api/ElectronicComponents";
import { Component } from "react";

export const ElectronicComponentPage = () => {
  const params = useParams<{ id: string }>();
  const componentId = Number(params.id);
  const electrionicComponent = getElectronicComponentById(componentId);
  if (!electrionicComponent) return <Navigate to="/404" replace />;
  return (
    <PageLayout>
      <PageLayout.Main>
        <PageLayout.Section>
          <PageLayout.Wrap>
            <h2 className="text-[72px]">{electrionicComponent.title}</h2>
            <ElectronicComponentViewer component={electrionicComponent} />
          </PageLayout.Wrap>
        </PageLayout.Section>
      </PageLayout.Main>
    </PageLayout>
  );
};
