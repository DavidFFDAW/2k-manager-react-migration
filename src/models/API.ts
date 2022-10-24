export interface BaseResponse {
    code: number;
    message: string;
    status: boolean;
    data?: any;
}

export interface LoginResponse extends BaseResponse {
    user: {
        email: string;
        name: string;
        token: string;
    };
}

export interface Champion {
    brand: string;
    championship: string;
    championshipId: string;
    championshipImage: string;
    overall: string;
    reignDays: string;
    reignId: string;
    totalDays: string;
    totalReigns: string;
    wrestlerId: string;
    wrestlerImage: string;
    wrestlerName: string;
}

export interface ChampionsPartialResponse {
    currentSingles: Champion[];
    currentTagTeams: Champion[];
}

export interface ChampionsResponse extends BaseResponse {
    reigns: {
        currentSingles: Champion[];
        currentTagTeams: Champion[];
    };
}
