import { User, Community } from '../classes/';
export class DataState {
  public static Empty: DataState = { communities: [], filteredCommunities: [], users: [] };

  public communities: Community[];
  public filteredCommunities: Community[];
  public users: User[];

  public static Default(): DataState {
    return this.Empty;
  }
}
