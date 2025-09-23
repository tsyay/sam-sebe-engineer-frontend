import { Hero, HowItWorks } from "../../widgets";
import { PageLayout } from "../../shared/layouts/PageLayout";
export const HomePage = () => {
  return (
    <>
      <Hero />
      <PageLayout>
        <PageLayout.Main>
          <PageLayout.Section>
            <HowItWorks/>
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
