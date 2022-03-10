export class location {
  title: string;
  city?: string;
  country?: string;
  Keywords?: string;
  selected?: boolean;
  timestamp?: number;
  coordinates?: { latitude: number; longitude: number };
  photo?: string[];


  constructor() {
    this.title = "";
    this.city = "";
    this.country = "";
    this.Keywords = "";
    this.selected = true;
    this.timestamp = 0;
    this.coordinates = {"longitude": 0, "latitude": 0};
    this.photo = [];
  }
}
