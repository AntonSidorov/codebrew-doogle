export class User {
  id: string;
  email: string; //Add regex?
  name: string;
  password: string;
  onField = false;
}

export class GeoData {
  lat: number;
  long: number;
  radius: number;
}

export class AidRequest {
  geoData: GeoData;
  name: string;
  shortDescription: string;
  description?: string;
  workersRequested: number;
  type: string;
  workers: string[] = [];
  peopleAffected?: number;
  date?: Date;
  urgency: 'LOW' | 'MEDIUM' | 'HIGH' = 'LOW';
}

export class Community {
  names: string[] = [];
  requests: AidRequest[] = [];
  location?: GeoData;
}

export class FakeData {
  communities: Community[];
  users: User[];
}

export let fake: FakeData = {
  communities: [
    // Define fakes here
  ],
  users: [
    // Define more fakes here
  ]
};
