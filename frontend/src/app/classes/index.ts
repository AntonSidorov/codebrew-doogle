import { Helper } from './helper';
export class User {
  id: string;
  email: string;
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
  type: 'Medical' | 'Sanitation' | 'Water' | 'Education' | 'Agriculture' | 'Material' | 'Emergency';
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

// export class FakeData {
//   communities: Community[];
//   users: User[];
// }

// let user_gen = (id, email, name, password) => ({
//   id,
//   email,
//   name,
//   password,
//   onField: true
// });

// let request_gen = (name, desc, req): AidRequest => ({
//   geoData: geoData_gen(13, 18),
//   name,
//   shortDescription: desc.slice(0, 150),
//   description: desc,
//   workersRequested: ~~req,
//   type: Helper.randomItem(['Medical', 'Sanitation', 'Water', 'Education', 'Agriculture']),
//   workers: [],
//   peopleAffected: ~~Helper.randomNumber(10, 1000),
//   urgency: Helper.randomItem(['LOW', 'MEDIUM', 'HIGH'])
// });

// let geoData_gen = (lat, long): GeoData => (
//   {
//     lat: Helper.randomNumber(-5, 5) + lat,
//     long: Helper.randomNumber(-5, 5) + long,
//     radius: Helper.randomNumber(1000, 100000)
//   });


// let request_data = {
//   name: ["Bayview", "Osage", "Volta", "Walton", "Bangor", "Laurelton", "Navarre", "Summertown", "Lutsen", "Guthrie", "Boyd", "Gibbsville", "Highland", "Olney", "Kieler", "Ilchester", "Brady", "Beyerville", "Jennings", "Masthope"],
//   desc: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed venenatis nunc, a volutpat nunc. Integer placerat id lacus sit amet sodales. Suspendisse vitae urna vel turpis cursus dapibus ut vel purus. Maecenas vitae sagittis quam, luctus pulvinar tortor. Etiam gravida enim quis erat aliquam bibendum. Phasellus interdum luctus purus, a ullamcorper risus rutrum et. Phasellus blandit leo in odio ultricies, eget facilisis nisl dictum. Quisque rhoncus urna nec rutrum vulputate. Sed pharetra odio quis dolor sollicitudin finibus. Phasellus at velit convallis, rhoncus risus ut, porttitor ipsum. Vestibulum non quam sit amet metus bibendum molestie. Suspendisse at lacus venenatis, facilisis ex ut, cursus leo.",
//     "Vivamus viverra turpis a sollicitudin lacinia. Maecenas eget ante rhoncus, varius augue et, venenatis velit. Curabitur efficitur ut tortor ut fermentum. Donec eget ultricies risus. Aenean in pellentesque risus. Etiam aliquet, lorem sed condimentum porttitor, eros sapien varius tellus, nec accumsan leo sem id ipsum. Suspendisse lacus arcu, sodales at congue ut, rutrum quis nunc.",
//     "Nulla elementum imperdiet molestie. Proin suscipit massa eros, at suscipit felis elementum ut. Maecenas quis nisi dignissim, aliquam mauris eget, sodales sem. Vivamus viverra rhoncus laoreet. Cras a est varius, scelerisque ex sollicitudin, mattis lectus. Morbi posuere ipsum nec sapien interdum, non cursus sapien egestas. Cras ligula risus, porttitor ut tempor non, auctor vel neque. Maecenas ac lectus sapien. Pellentesque augue odio, tempus sodales ultrices imperdiet, iaculis eu orci. Nullam iaculis elit lectus. Sed dapibus rutrum tellus sit amet laoreet. Vestibulum commodo quis neque eget imperdiet. Praesent suscipit mollis vulputate. Donec aliquam libero sit amet lacinia vulputate.",
//     "Sed neque orci, vestibulum eget lacinia et, semper eu dui. Curabitur hendrerit augue gravida ultrices placerat. Suspendisse potenti. Donec quis turpis porttitor arcu scelerisque blandit. Donec a ex consequat, mattis augue non, rutrum turpis. Pellentesque eleifend vel felis in egestas. Phasellus vel condimentum lorem. Morbi et molestie nisi. Donec tincidunt neque nec orci dignissim laoreet. Duis varius varius mi, nec finibus nibh facilisis et. Duis laoreet semper dui, sit amet mattis odio semper quis. Ut rutrum orci odio, sit amet tempus ipsum elementum at. Suspendisse id massa elementum, commodo eros a, varius dolor. Sed vel neque semper, bibendum arcu id, auctor orci. Suspendisse a vehicula lectus.",
//     "Integer sit amet nunc libero. Sed vitae felis lectus. Etiam turpis purus, fermentum in rhoncus interdum, faucibus vitae sapien. Proin eget turpis ut felis mollis tincidunt. Phasellus id sapien convallis, ultricies urna ac, dictum est. Quisque luctus lectus quis tortor pulvinar placerat. Proin vulputate dolor sit amet libero iaculis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elementum nunc."],
//   req: [],
// };

// let community_gen = (): Community => ({
//   names: [Helper.randomItem(request_data.name)],
//   requests: Array(Math.round(Helper.randomNumber(1, 10))).fill(0).map(v => request_gen(
//     Helper.randomItem(request_data.name),
//     Helper.randomItem(request_data.desc),
//     Helper.randomNumber(10, 100)))
// });

// export let fake = (): FakeData => ({
//   communities: Array(Math.round(Helper.randomNumber(5, 25))).fill(0).map(v => community_gen()),
//   users: [
//     user_gen('1', 'lyndacoates121@gmail.com', 'Lynda Coates', 'bigboi91'),
//     user_gen('2', 'felixclayton121@gmail.com', 'Felix Clayton', 'smallboy99'),
//     user_gen('3', 'lexkim@gmail.com', 'Lex Kim', 'mediumman356'),
//     user_gen('4', 'timemorton@gmail.com', 'Tim Morton', 'e1jefkon'),
//     user_gen('5', 'jamesmilton@gmail.com', 'James Milton', 'bighorese123123'),
//     user_gen('6', 'Bradlesbrad1@gmail.com', 'Brad bradley', '12jgio13no'),
//     user_gen('7', 'initialmanfred@gmail.com', 'Sandy Henderson', '12rfjk1cnrio'),
//     user_gen('8', 'madmaxminter@gmail.com', 'Max Interly', 'c2viputyod5'),
//     user_gen('9', 'superspy@gmail.com', 'James Bnod', 'vg2p4yui'),
//     user_gen('10', 'nootnootmans@gmail.com', 'Emily Underson', 'c31tvweyc'),
//     user_gen('11', 'reddevil@gmail.com', 'Carrol carls', 'b24t2'),
//     user_gen('12', 'thedestroyer@gmail.com', 'Pete manman', 'bdtunr6'),
//     user_gen('13', 'bigmanonline@gmail.com', 'Gunder Dunderson', ',tomgitenr'),
//   ]
// });
