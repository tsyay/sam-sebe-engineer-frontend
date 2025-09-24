import { Hero, HowItWorks, Kits } from "../../widgets";
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
          </PageLayout.Section>
        </PageLayout.Main>
      </PageLayout>
    </>
  );
};
