import { User } from "../classes";

export class AuthState {
  public static Empty: AuthState = { authenticated: false , user: undefined};

  public authenticated = false;
  public user: User;

  public static Default(): AuthState {
    return this.Empty;
  }
}
