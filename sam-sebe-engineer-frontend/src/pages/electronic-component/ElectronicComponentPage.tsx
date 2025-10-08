import { Navigate, useParams } from "react-router";
import { PageLayout } from "../../shared/layouts/PageLayout";
import { ElectronicComponentViewer } from "../../widgets";
import { type Component, componentApi } from "../../entities";
import { useState } from "react";

export const ElectronicComponentPage = () => {
  const params = useParams<{ id: string }>();
  const componentId = Number(params.id);
  
  const [component, setCompoenet] = useState<Component>();

  componentApi.getById(componentId).then((fetchedComponent) => {
    setCompoenet(fetchedComponent)
  })

  if (!component) return <Navigate to="/404" replace />;
  return (
    <PageLayout>
      <PageLayout.Main>
        <PageLayout.Section>
          <PageLayout.Wrap>
            <h2 className="text-[72px]">{component.title}</h2>
            <ElectronicComponentViewer component={component} />
          </PageLayout.Wrap>
        </PageLayout.Section>
      </PageLayout.Main>
    </PageLayout>
  );
};
