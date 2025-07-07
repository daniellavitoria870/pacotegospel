
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import BonusSection from '@/components/BonusSection';
import OfferSummarySection from '@/components/OfferSummarySection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <GallerySection />
      <BeforeAfterSection />
      <BonusSection />
      <OfferSummarySection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
