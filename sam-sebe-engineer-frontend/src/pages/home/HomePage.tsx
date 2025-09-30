import { FAQ, Hero, HomeKits, HowItWorks, TargetAudience } from "../../widgets";
import { PageLayout } from "../../shared/layouts/PageLayout";
export const HomePage = () => {
  return (
    <>
      <Hero />
      <PageLayout>
        <PageLayout.Main>
          <PageLayout.Section>
            <HowItWorks/>
            <HomeKits/>
            <TargetAudience/>
            <FAQ/>
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
