export type Product = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  priceUSD: number;
  image: string;
  gallery: string[];
  tags: string[];
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "dubai-style-chocolate",
    name: "Dubai Style Chocolate",
    subtitle: "Pistachio · Kunafa · Premium",
    description:
      "A rich chocolate shell wrapped around a vibrant pistachio and kunafa-inspired filling. Bold texture, deep cocoa notes, and a distinctly Dubai-inspired finish—crafted for moments of pure indulgence.",
    priceUSD: 24,
    image: "/images/product-dubai-style.jpg",
    gallery: ["/images/product-dubai-style.jpg"],
    tags: ["pistachio", "kunafa", "signature", "chocolate"],
    highlights: [
      "Signature pistachio-kunafa filling",
      "Thick premium chocolate shell",
      "Ideal for gifting and tasting",
    ],
  },
  {
    id: "dubai-pizza",
    name: "Dubai Pizza",
    subtitle: "Fully Loaded · Bold Flavor",
    description:
      "A thick chocolate wedge piled high with pistachios, dried strawberries, and crispy knafeh. Fully loaded, shareable, and built for bold dessert moments.",
    priceUSD: 34,
    image: "/images/product-dubai-pizza.jpg",
    gallery: ["/images/product-dubai-pizza.jpg"],
    tags: ["loaded", "shareable", "bold", "dessert"],
    highlights: [
      "Shareable centerpiece format",
      "Loaded pistachio & knafeh topping",
      "Bold texture in every bite",
    ],
  },
  {
    id: "dubai-party-cups",
    name: "Dubai Party Cups",
    subtitle: "Crunchy · Creamy · Irresistible",
    description:
      "Clear party cups layered with chocolate, pistachio cream, toasted knafeh, and berry pieces. Portable, festive, and made for sharing trays.",
    priceUSD: 18,
    image: "/images/product-dubai-cups.jpg",
    gallery: ["/images/product-dubai-cups.jpg"],
    tags: ["cups", "party", "creamy", "crunchy"],
    highlights: [
      "Layered crunch and cream",
      "Party-ready individual servings",
      "Vibrant pistachio finish",
    ],
  },
  {
    id: "dubai-cones",
    name: "Dubai Cones",
    subtitle: "Mini · Dunk · Massive Flavor",
    description:
      "Mini waffle cones filled with chocolate and knafeh, served with pistachio cream for dunking. Small cones, massive flavor.",
    priceUSD: 22,
    image: "/images/product-dubai-cones.jpg",
    gallery: ["/images/product-dubai-cones.jpg"],
    tags: ["cones", "wafer", "mini", "pistachio"],
    highlights: [
      "Mini waffle cone format",
      "Pistachio cream for dunking",
      "Perfect for grazing boards",
    ],
  },
  {
    id: "dubai-bars",
    name: "Ka-Nufs",
    subtitle: "Pistachio · Kadayif · Indulgent",
    description:
      "Thick chocolate squares filled with vibrant pistachio cream and crispy kadayif. A bite-sized Dubai-inspired indulgence designed for sharing—or keeping entirely to yourself.",
    priceUSD: 16,
    image: "/images/product-dubai-bars.jpg",
    gallery: ["/images/product-dubai-bars.jpg"],
    tags: ["bars", "ka-nufs", "pistachio", "kadayif", "squares"],
    highlights: [
      "Bite-sized chocolate squares",
      "Bright pistachio cream center",
      "Crispy kadayif crunch",
    ],
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(id: string, limit = 3): Product[] {
  return products.filter((product) => product.id !== id).slice(0, limit);
}
