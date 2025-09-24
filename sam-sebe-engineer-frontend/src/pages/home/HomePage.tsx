import { Hero, HowItWorks, Kits, TargetAudience } from "../../widgets";
import { PageLayout } from "../../shared/layouts/PageLayout";
export const HomePage = () => {
  return (
    <>
      <Hero />
      <PageLayout>
        <PageLayout.Main>
          <PageLayout.Section>
            <HowItWorks/>
            <Kits/>
            <TargetAudience/>
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
