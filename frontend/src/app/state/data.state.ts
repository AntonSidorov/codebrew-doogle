import { User, Community, aidTypes } from '../classes/';
export class DataState {
  public static Empty: DataState = { communities: [], filteredCommunities: [], users: [], filters: aidTypes.map(f => ({ filter: f, enabled: true })), query: '' };

  public communities: Community[];
  public filteredCommunities: Community[];
  public users: User[];
  public filters: { filter: string, enabled: boolean }[];
  public query = '';

  public static Default(): DataState {
    let a: DataState;
    return this.Empty;
  }
}
