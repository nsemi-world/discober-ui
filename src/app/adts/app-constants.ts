export class AppConstants {
    public static BASE_URL      = "http://localhost:8080/";
    public static REGISTER_URL  = "http://localhost:8080/api/auth/register";
    public static LOGIN_URL     = "http://localhost:8080/login";
    public static LOGOUT_URL     = "http://localhost:8080/logout";

    private static OAUTH2_URL = AppConstants.BASE_URL + "oauth2/authorization/";
    private static REDIRECT_URL = "?redirect_uri=http://localhost:8081/login";
}