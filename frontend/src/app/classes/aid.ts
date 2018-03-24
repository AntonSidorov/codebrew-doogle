export class AidResquest { 
    
    geo: {lat: string, long: string, radius: number};
    shortName: string;
    description: string = "placeholder description";
    peopleNeeded: number;

}

export class User {
    isCharity: boolean;
    name: string;
    password: string;
    charity: string;
}