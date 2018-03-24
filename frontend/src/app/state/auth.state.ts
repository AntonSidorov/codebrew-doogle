export class AuthState {
  public static Empty: AuthState = { authenticated: false };

  public authenticated = false;

  public static Default(): AuthState {
    return this.Empty;
  }
}
