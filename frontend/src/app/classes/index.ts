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
      names
  ],
  users: [

     {
      id: "1",
      email: "lyndacoates121@gmail.com",
      name: "Lynda Coates",
      password: "bigboi91",
      onField: true;
    }
    ,
    {
     id: "2",
     email: "felixclayton121@gmail.com",
     name: "Felix Clayton",
     password: "smallboy99",
     onField: true;
   }
   ,
   {
    id: "3",
    email: "LexKimster@hotmail.com",
    name: "Lex Kim",
    password: "mediumman356",
    onField: true;
  }
  ,
  {
   id: "4",
   email: "Timmortonmanster@gmail.com",
   name: "Tim Morton",
   password: "hiddenwords",
   onField: true;
  }
  ,
  {
   id: "5",
   email: "jameymilton@gmail.com",
   name: "James Milton",
   password: "bighorse1sd",
   onField: true;
  }
  ,
  {
   id: "6",
   email: "Bradlesbrad1@gmail.com",
   name: "Brad Bradley",
   password: "passthmeer",
   onField: true;
  }
  ,
  {
   id: "7",
   email: "initialmanfred@gmail.com",
   name: "Sandy Henderson",
   password: "Kushdestroey",
   onField: true;
  }
  ,
  {
   id: "8",
   email: "madmaxminter@gmail.com",
   name: "Max Interly",
   password: "hidemytracks",
   onField: false;
  }
  ,
  {
   id: "9",
   email: "superspy@gmail.com",
   name: "James Bnod",
   password: "callmebondjames",
   onField: false;
  }
  ,
  {
   id: "10",
   email: "nootnootmans@gmail.com",
   name: "Emily Underson",
   password: "billwatts",
   onField: true;
  }
  ,
  {
   id: "11",
   email: "reddevil@gmail.com",
   name: "Carrol carls",
   password: "mysecretsmine",
   onField: true;
  }
  ,
  {
   id: "12",
   email: "thedestroyer@gmail.com",
   name: "Pete manman",
   password: "8characters",
   onField: true;
  }
  ,
  {
   id: "13",
   email: "bigmanonline@gmail.com",
   name: "Gunder Dunderson",
   password: "Kushdestroeyss",
   onField: true;
  }

  ]
};
