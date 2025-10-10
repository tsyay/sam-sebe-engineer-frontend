import { Navigate, useParams } from "react-router";
import { PageLayout } from "../../shared/layouts/PageLayout";
import { ElectronicComponentViewer } from "../../widgets";
import { useComponent } from "../../entities";

export const ElectronicComponentPage = () => {
  const params = useParams<{ id: string }>();
  const componentId = Number(params.id);

  const {
    data: component,
    isLoading,
    error,
    refetch,
  } = useComponent(componentId);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки данных 😢</p>;

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
