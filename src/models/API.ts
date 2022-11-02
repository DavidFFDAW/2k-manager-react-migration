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
export interface Team {
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
export interface Report {
    id: number;
    image: string;
    title: string;
    content: string;
    admin_id: number;
    created_at: string;
    updated_at: string;
    exceptr: string;
    visible: number | boolean;
    category: string;
}

export interface NewsResponse {
    news: Report[];
}

export interface Team {
    id: number;
    name: string;
    average: number;
    created_at: string;
    updated_at: string;;
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
