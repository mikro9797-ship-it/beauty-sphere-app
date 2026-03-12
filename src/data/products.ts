// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Skincare' | 'Injectables' | 'Professional' | 'Sun Protection';
  price: number;
  image: string;
  description: string;
}

export const BRANDS = [
  'Harmony Castle',
  'Arkana',
  'Karisma Collagen',
  'Akradex',
  'Vital Essential Cosmetics',
  'Linerase',
  'Reborn PLA',
  'Factology',
  'Skin Synergy',
  'Lutronic Infini'
];

export const PRODUCTS: Product[] = [
  {
    id: 'hc-1',
    name: 'PREBIOTIC FOAMY CLEANSING MOUSSE',
    brand: 'Harmony Castle',
    category: 'Skincare',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&auto=format&fit=crop&q=60',
    description: 'A gentle, prebiotic-infused cleansing mousse designed to purify the skin while maintaining its delicate microbiome balance. Ideal for daily use on all skin types.'
  },
  {
    id: 'ark-1',
    name: 'A-QS Hacker Day Cream',
    brand: 'Arkana',
    category: 'Skincare',
    price: 5400,
    image: 'https://images.unsplash.com/photo-1611077544664-9eb51121d5ce?w=800&auto=format&fit=crop&q=60',
    description: 'Innovative day cream that regulates the skin microbiome, protecting against environmental stressors and restoring a healthy, radiant complexion.'
  },
  {
    id: 'kc-1',
    name: 'Rh Collagen Face Serum',
    brand: 'Karisma Collagen',
    category: 'Professional',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format&fit=crop&q=60',
    description: 'Advanced anti-aging serum featuring recombinant human collagen to deeply restore elasticity and minimize fine lines.'
  },
  {
    id: 'akr-1',
    name: 'ElastiFill PLA',
    brand: 'Akradex',
    category: 'Injectables',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=60',
    description: 'Professional grade Polylactic Acid (PLA) filler designed to stimulate natural collagen production and restore facial volume over time.'
  },
  {
    id: 'hc-2',
    name: 'BIOR5 Peeling',
    brand: 'Harmony Castle',
    category: 'Professional',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop&q=60',
    description: 'Biorevitalizing peeling system for professional use, promoting cellular turnover and intense skin rejuvenation without extended downtime.'
  },
  {
    id: 'vec-1',
    name: 'Peptide Anti-Age Cream',
    brand: 'Vital Essential Cosmetics',
    category: 'Skincare',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=60',
    description: 'A rich, peptide-driven anti-aging cream developed with advanced pharmacological research to lifting and firming the skin.'
  },
  {
    id: 'lin-1',
    name: 'Linerase Hydro',
    brand: 'Linerase',
    category: 'Professional',
    price: 11200,
    image: 'https://images.unsplash.com/photo-1555820598-c6299b4ff6ff?w=800&auto=format&fit=crop&q=60',
    description: 'A deep hydration solution combining hyaluronic acid with essential amino acids to provide a powerful lifting effect and stimulate collagen synthesis.'
  },
  {
    id: 'fac-1',
    name: 'Mattifying Sunscreen SPF50',
    brand: 'Factology',
    category: 'Sun Protection',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1555820598-c649805ff6f?w=800&auto=format&fit=crop&q=60',
    description: 'High-protection daily sunscreen that leaves a matte, non-greasy finish. Perfect for oily and combination skin types.'
  },
  {
    id: 'ss-1',
    name: 'Delicacy Peptide Serum',
    brand: 'Skin Synergy',
    category: 'Skincare',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1615397323714-fe75ba316f73?w=800&auto=format&fit=crop&q=60',
    description: 'Canadian-made medical-grade serum specifically formulated with synergistic peptides to calm and rejuvenate sensitive skin.'
  },
  {
    id: 'rpla-1',
    name: 'Reborn PLLA Dermal Filler 360mg',
    brand: 'Reborn PLA',
    category: 'Injectables',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&auto=format&fit=crop&q=60',
    description: 'A premium Poly-L-lactic Acid biostimulator that triggers the body to produce its own collagen for natural, long-lasting facial rejuvenation.'
  }
];
