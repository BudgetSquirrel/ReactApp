import BackendClient from "../infrastructure/backend-client";

export default class AuthService {
    _client: BackendClient;
    _authApiEndpoint: string;

    constructor(client: BackendClient, apiEndpoint: string = "auth") {
        this._client = client;
        this._authApiEndpoint = apiEndpoint;
    }

    async login(username: string, password: string) {
        await this._client.authenticate(username, password);
    }
}