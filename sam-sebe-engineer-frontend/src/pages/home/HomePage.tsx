import { Hero } from "../../widgets/hero";
import { PageLayout } from "../../shared/layouts/PageLayout";
export const HomePage = () => {
  return (
    <>
      <PageLayout>
        <PageLayout.Main>
          <PageLayout.Section>
            <Hero/>
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
