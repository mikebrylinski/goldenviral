import { AccountPanel } from "@/components/AccountPanel";
import { BrandValues } from "@/components/BrandValues";
import { CartDrawer } from "@/components/CartDrawer";
import { ChatBot } from "@/components/ChatBot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LifestyleGallery } from "@/components/LifestyleGallery";
import { Newsletter } from "@/components/Newsletter";
import { OurStory } from "@/components/OurStory";
import { ProductGrid } from "@/components/ProductGrid";
import { SearchDialog } from "@/components/SearchDialog";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <LifestyleGallery />
        <BrandValues />
        <OurStory />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <SearchDialog />
      <AccountPanel />
      <ChatBot />
    </>
  );
}
