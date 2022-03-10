export interface Place {
  title: string;
  city?: string;
  country?: string;
  Keywords?: string;
  selected?: boolean;
  timestamp?: number;
  coordinates?: { latitude: number; longitude: number };
  photo?: string[];
}
