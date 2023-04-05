const config = {
    igdb: {
        uriPath: "https://api.igdb.com/v4/games",  
        headers: {
            "Client-ID": "1afpsi75gdpri30cdsibn6n7yz0vtv",
            Authorization: "Bearer accessToken",
            Accept: 'application/json',
        },
        postData: "fields *; where game_engines = (982, 439) & external_games.category = (1, 26); limit; offset;",
        paginated: true,
        callType: "POST",
        authRequired: true,
        authUrl: "https://id.twitch.tv/oauth2/token?client_id=1afpsi75gdpri30cdsibn6n7yz0vtv&client_secret=8jx8yo6njt3fc10jl11mgf9rcpx155&grant_type=client_credentials",
        authType: "POST",
        authResponseKey: ["data", "access_token"],
    },
    playnite: {
        uriPath: "string",  
        port: 2000,
        headers: {

        },
        authRequired: true,
    },
    steamdbengine: {
        uriPath: "string",  
        port: 2000,
        headers: {

        },
        authRequired: true,
    },
    epicgames: {
        uriPath: "string",  
        port: 2000,
        headers: {

        },
        authRequired: true,
    },
    pcgamingwiki: {
        uriPath: "string",  
        port: 2000,
        headers: {

        },
        authRequired: true,
    },
    steamdb: {
        uriPath: "string",  
        port: 2000,
        headers: {

        },
        authRequired: true,
    }
};

module.exports = config;