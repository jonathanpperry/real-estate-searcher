// Amenity type
export interface Amenity {
  _id: string;
  value: string | null;
  label: string | null;
  icon?: string | null;
  order?: number | null;
}

// Property types
export interface Address {
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
}

export interface GeoPoint {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
}
export interface SanityImage {
  asset: {
    _id: string;
    url: string | null;
    metadata?: {
      lqip?: string | null;
      dimensions?: {
        width?: number | null;
        height?: number | null;
      } | null;
    } | null;
  } | null;
  alt?: string | null;
}

export interface Property {
  _id: string;
  title: string | null;
  slug: string | null;
  description?: string | null;
  price: number | null;
  propertyType: "house" | "apartment" | "condo" | "townhouse" | "land" | null;
  status: "active" | "pending" | "sold" | null;
  bedrooms: number | null;
  bathrooms: number | null;
  squareFeet: number | null;
  yearBuilt?: number | null;
  address: Address | null;
  location?: GeoPoint | null;
  images?: SanityImage[] | null;
  image?: SanityImage | null;
  amenities?: string[] | null;
  featured?: boolean | null;
  createdAt: string | null;
  updatedAt?: string | null;
  agent?: Agent | null;
}

export interface Agent {
  _id: string;
  userId: string | null;
  name: string | null;
  email: string | null;
  phone?: string | null;
  photo?: SanityImage | null;
  bio?: string | null;
  licenseNumber?: string | null;
  agency?: string | null;
  onboardingComplete?: boolean | null;
  createdAt?: string | null;
}

export interface Lead {
  _id: string;
  property: {
    _id: string;
    title: string | null;
    slug: string | null;
  } | null;
  buyerName: string | null;
  buyerEmail: string | null;
  buyerPhone?: string | null;
  status: "new" | "contacted" | "closed" | null;
  createdAt: string | null;
}

export interface User {
  _id: string;
  clerkId: string | null;
  name: string | null;
  email: string | null;
  phone?: string | null;
  photo?: SanityImage | null;
  savedListings?: Property[] | null;
  createdAt: string | null;
}

// Form data types — these are user-submitted so non-nullable is correct
export interface UserOnboardingData {
  name: string;
  phone: string;
  email: string;
  photo?: SanityImage;
}

export interface AgentOnboardingData {
  bio: string;
  photo?: SanityImage;
  licenseNumber: string;
  agency?: string;
  phone: string;
}

export interface UserProfileData {
  name: string;
  phone: string;
  photo?: SanityImage;
}

export interface AgentProfileData {
  bio: string;
  photo?: SanityImage;
  licenseNumber: string;
  agency?: string;
  phone: string;
}

export interface ListingFormData {
  title: string;
  description: string;
  price: number;
  propertyType: "house" | "apartment" | "condo" | "townhouse" | "land";
  status?: "active" | "pending" | "sold";
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt?: number;
  address: Address;
  location?: GeoPoint;
  images?: SanityImage[];
  amenities?: string[];
}

// Search params
export interface PropertySearchParams {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  baths?: number;
  type?: string;
  city?: string;
  page?: number;
}
