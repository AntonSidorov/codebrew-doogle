import { User, Community } from '../classes/';
export class DataState {
  public static Empty: DataState = { communities: [], users: [] };

  public communities: Community[];
  public users: User[];

  public static Default(): DataState {
    return this.Empty;
  }
}
