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

export interface TeamMember {
    id: number;
    name: string;
    image_name: string;
    brand: string;
    status: string;
    sex: string;
}

export interface Brand {
    id: number;
    name: string;
    logo: string;
    background: string;
    created_at: string;
    updated_at: string;
}

export interface SingleTeam {
    id: number;
    name: string;
    count: number;
    average: number;
    created_at: string;
    updated_at: string;
    member_champion_2: number | string | null;
    member_champion_1: number | string | null;
    members: TeamMember[];
    brand: Brand;
}

export interface Team {
    id: number;
    name: string;
    average: number;
    created_at: string;
    updated_at: string;
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
