import { AccountPanel } from "@/components/AccountPanel";
import { BrandValues } from "@/components/BrandValues";
import { CartDrawer } from "@/components/CartDrawer";
import { ChatBot } from "@/components/ChatBot";
import { Footer } from "@/components/Footer";
import { Fundraising } from "@/components/Fundraising";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramFeed } from "@/components/InstagramFeed";
import { OurStory } from "@/components/OurStory";
import { ProductGrid } from "@/components/ProductGrid";
import { SearchDialog } from "@/components/SearchDialog";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <InstagramFeed />
        <BrandValues />
        <Testimonials />
        <OurStory />
        <Fundraising />
      </main>
      <Footer />
      <CartDrawer />
      <SearchDialog />
      <AccountPanel />
      <ChatBot />
    </>
  );
}
