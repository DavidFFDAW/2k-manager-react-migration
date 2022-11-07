export class AppConfig {
    public static readonly VERSION = '1.2.0';
    // public static readonly API_URL = 'http://localhost:3000';
    public static readonly API_BASE_URL = 'https://vps-f87b433e.vps.ovh.net/2k/api/v2/';
    public static readonly USER_KEY = 'react-champions-user';
    public static readonly NEWS_ENDPOINT = AppConfig.API_BASE_URL + 'news/report';
    public static readonly TEAMS_ENDPOINT = AppConfig.API_BASE_URL + 'teams';
    public static readonly CREATE_TEAM_ENDPOINT = AppConfig.API_BASE_URL + 'teams/new';
    public static readonly WRESTLERS_ENDPOINT = AppConfig.API_BASE_URL + 'wrestlers/get';
    public static readonly SINGLE_TEAM_ENDPOINT = AppConfig.API_BASE_URL + 'teams?id=';

    public static readonly PUSH_VAPID_PUBLIC_KEY =
        'BMOETqEVUA2CghOVQVUzTku_oebDMEs4uYokOESS3-eIfOX931bVPFBGo6m2oj-dFZga4tjz4nMKssadJiN8mL4';
}
