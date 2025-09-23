import type { ReactNode } from 'react';
import { Container } from '../../ui';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({children, className} : PageLayoutProps) => {
    return (
        <div className={`min-h-screen flex flex-col ${className}`}>
            {children}
        </div>
    )
}

PageLayout.Header = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <header className={`w-full ${className}`}>
    <Container>
      {children}
    </Container>
  </header>
);

PageLayout.Main = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <main className={`flex-1 w-full ${className}`}>
    {children}
  </main>
);


PageLayout.Section = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <section className={`w-full ${className}`}>
    <Container>
      {children}
    </Container>
  </section>
);