import axios from 'axios';

interface ApiRequest {
    arguments?: any;
}

export default class BackendClient {
    _apiRoot: string;

    _authToken?: string;

    constructor(apiRoot: string = "/api") {
        this._apiRoot = apiRoot;
    }

    async request(endpoint: string, request: ApiRequest = {}) {
        let response: any;
        await axios({
            method: "post",
            url: this._urlForEndpoint(endpoint),
            data: request,
            headers: {
                Authorization: `Bearer ${this._authToken}`
            }
        }).then(result => {response = result.data;});

        return response;
    }

    async authenticate(username:string, password:string) {
        let tokenResponse = await axios({
            method: "post",
            url: this._urlForEndpoint("auth/authenticate"),
            data: { username, password }
        }).then(response => {
            this._authToken = response.data;
        });
    }

    _urlForEndpoint(endpoint: string) {
        let apiRoot = this._apiRoot;
        if (!apiRoot.endsWith("/"))
            apiRoot = `${apiRoot}/`;
        
        let apiEndpoint = endpoint;
        if (apiEndpoint.startsWith("/"))
            apiEndpoint = apiEndpoint.slice(1);
        
        return `${apiRoot}${apiEndpoint}`;
    }
}