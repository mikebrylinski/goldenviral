import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { SearchDialog } from "@/components/SearchDialog";
import { AccountPanel } from "@/components/AccountPanel";
import { ChatBot } from "@/components/ChatBot";
import { ProductPageClient } from "@/components/ProductPageClient";
import {
  getProductById,
  getRelatedProducts,
  products,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product Not Found | Golden Viral" };
  }

  return {
    title: `${product.name} | Golden Viral`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Golden Viral`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <ProductPageClient product={product} related={related} />
      </main>
      <Footer />
      <CartDrawer />
      <SearchDialog />
      <AccountPanel />
      <ChatBot />
    </>
  );
}
