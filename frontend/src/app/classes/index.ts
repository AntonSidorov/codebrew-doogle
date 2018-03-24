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
    {
    name: ["George"],
    requests: [ {
      lat: 11.5088255,
      long: 42.1016962,
      radius: 10
    },
    "Vitamin A Shortage",
    "There's a shortage of Vitamin A in The George Community. Assistance needed.",
    3,
    "Medical",
    [],
    23,
    1521880873,
    'MEDIUM'
    ],
    location: {
      lat: 11.5088255,
      long: 42.1016962,
      radius: 10
    }
  }
  ],
  users: [
    // Define more fakes here
  ]
};
