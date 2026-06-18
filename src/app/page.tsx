import { CtaBanner } from '@/components/landing/CtaBanner';
import { Features } from '@/components/landing/Features';
import { Footer } from '@/components/landing/Footer';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Modules } from '@/components/landing/Modules';
import { Navbar } from '@/components/landing/Navbar';
import { Pricing } from '@/components/landing/Pricing';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Modules />
        <HowItWorks />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
