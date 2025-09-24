import { FAQ, Hero, HowItWorks, Kits, TargetAudience } from "../../widgets";
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
            <FAQ/>
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
