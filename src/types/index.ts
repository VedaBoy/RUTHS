export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  dietaryRestrictions?: Array<'V' | 'VG' | 'GF' | 'DF' | 'N'>;
  category: string;
  section: 'food' | 'beverages';
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: 'food' | 'beverages';
  name: string;
  categories: MenuCategory[];
}

export interface DietaryIcon {
  code: string;
  name: string;
  color: string;
}