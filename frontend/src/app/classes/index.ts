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
  date?: number;
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
      names: ['George'],
      requests: [
        {
          geoData: {
            lat: 11.5088255,
            long: 42.1016962,
            radius: 10
          },
          name: 'Vitamin A Shortage',
          shortDescription: 'There\'s a shortage of Vitamin A in The George Community. Assistance needed.',
          description: "LONG DESCRIPTION PLSO",
          workersRequested: 3,
          type: 'Medical',
          workers: [],
          peopleAffected: 23,
          date: 1521880873,
          urgency: 'MEDIUM'
        }],
        location:
          {
            geoData: {
            lat: 11.5088255,
            long: 42.1016962,
            radius: 10
            },
          }
      }
      {
        names: ['Jabari'],
        requests: [
          {
            geoData: {
              lat: 8.911533,
              long: 35.50364,
              radius: 23
            },
            name: 'School Books needed',
            shortDescription: 'Primary School kids need books for school.',
            description: "Book donations needed for primary school kids aged 7-10. Main concerns are mathematics and English.",
            workersRequested: 1,
            type: 'Education',
            workers: [],
            peopleAffected: 7,
            date: 1521817591,
            urgency: 'LOW'
          }],
          location:
            {
              geoData: {
                lat: 8.911533,
                long: 35.50364,
                radius: 23
              },
            }
        }
        {
          names: ['David'],
          requests: [
            {
              geoData: {
                lat: 8.917669,
                long: 35.75499,
                radius: 27
              },
              name: 'Food Shortage',
              shortDescription: 'Food shortage due to floods.',
              description: "Floods have destroyed crops in the region and has resulted in food shortages. Food needed to be sent to a small village of 50 people in the next week",
              workersRequested: 4,
              type: 'Food',
              workers: ['Tim Morton'],
              peopleAffected: 50,
              date: 1521880998,
              urgency: 'HIGH'
            },],
            location:
              {
                geoData: {
                  lat: 8.911533,
                  long: 35.50364,
                  radius: 23
                },
              }
          }
      }
      ],
      location: {
        lat: 11.5088255,
        long: 42.1016962,
        radius: 10
      },
      {
        lat: 8.911533,
        long: 35.50364,
        radius: 23
      },
      {
        lat: 7.734086,
        long: 34.962632,
        radius: 23
      },
      {
        lat: 7.152893,
        long: 35.187059,
        radius: 30
      },
      {
        lat: 8.401973,
        long: 32.926065,
        radius: 20
      },
      {
        lat: 8.482534,
        long: 33.70414,
        radius: 30
      },
      {
        lat: 7.753959,
        long: 32.862148,
        radius: 30
      },
      {
        lat: 8.917669,
        long: 35.75499,
        radius: 27
      },
      {
        lat: 7.093353,
        long: 31.734887,
        radius: 27
      },
      {
        lat: 7.625544,
        long: 30.822197,
        radius: 28
      },
      {
        lat: 8.328135,
        long: 32.229119,
        radius: 33
      },
      {
        lat: 8.647197,
        long: 33.036423,
        radius: 40
      },
      {
        lat: 7.146104,
        long: 30.73406,
        radius: 39
      },
      {
        lat: 7.148818,
        long: 32.814558,
        radius: 39
      },
      {
        lat: 7.655479,
        long: 33.087991,
        radius: 32
      },
      {
        lat: 7.102063,
        long: 31.318859,
        radius: 33
      }
    }
  ],
  users: [

    {
      id: '1',
      email: 'lyndacoates121@gmail.com',
      name: 'Lynda Coates',
      password: 'bigboi91',
      onField: true
    }
    ,
    {
      id: '2',
      email: 'felixclayton121@gmail.com',
      name: 'Felix Clayton',
      password: 'smallboy99',
      onField: true
    }
    ,
    {
      id: '3',
      email: 'LexKimster@hotmail.com',
      name: 'Lex Kim',
      password: 'mediumman356',
      onField: true
    }
    ,
    {
      id: '4',
      email: 'Timmortonmanster@gmail.com',
      name: 'Tim Morton',
      password: 'hiddenwords',
      onField: true
    }
    ,
    {
      id: '5',
      email: 'jameymilton@gmail.com',
      name: 'James Milton',
      password: 'bighorse1sd',
      onField: true
    }
    ,
    {
      id: '6',
      email: 'Bradlesbrad1@gmail.com',
      name: 'Brad Bradley',
      password: 'passthmeer',
      onField: true
    }
    ,
    {
      id: '7',
      email: 'initialmanfred@gmail.com',
      name: 'Sandy Henderson',
      password: 'Kushdestroey',
      onField: true
    }
    ,
    {
      id: '8',
      email: 'madmaxminter@gmail.com',
      name: 'Max Interly',
      password: 'hidemytracks',
      onField: false,
    }
    ,
    {
      id: '9',
      email: 'superspy@gmail.com',
      name: 'James Bnod',
      password: 'callmebondjames',
      onField: false,
    }
    ,
    {
      id: '10',
      email: 'nootnootmans@gmail.com',
      name: 'Emily Underson',
      password: 'billwatts',
      onField: true
    }
    ,
    {
      id: '11',
      email: 'reddevil@gmail.com',
      name: 'Carrol carls',
      password: 'mysecretsmine',
      onField: true
    }
    ,
    {
      id: '12',
      email: 'thedestroyer@gmail.com',
      name: 'Pete manman',
      password: '8characters',
      onField: true
    }
    ,
    {
      id: '13',
      email: 'bigmanonline@gmail.com',
      name: 'Gunder Dunderson',
      password: 'Kushdestroeyss',
      onField: true
    }

  ]
};
