export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<parentPlatform>;
    publishers: Array<publishers>;
    ratings: Array<Rating>;
    screenshoots: Array<screenshoots>;
    trailers: Array<Trailer>
}

export interface ApIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string
}

interface parentPlatform {
    platform: {
        name:string,
        slug: string
    }

}

interface publishers{
    name: string;
}

interface Rating{
    id: number;
    count: number;
    title: string;
}

interface screenshoots {
    image: string
}

interface Trailer {
    data: {
        max: string
    }
}
