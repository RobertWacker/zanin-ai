import { GiphyRatingOptions } from './request.interface';

export interface IResponseBasic {
    data: IResponseData[];
    pagination: IResponsePagination;
    meta: IResponseMeta;
}

export interface IResponseData {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: GiphyRatingOptions,
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: IResponseImages;
    analytics_response_payload: string;
    analytics: {
        onload: {
            url: string;
        },
        onclick: {
            url: string;
        },
        onsent: {
            url: string;
        }
    }
}

export interface IResponseImages {
    original: Image;
    downsized: Image;
    downsized_large: Image;
    downsized_medium: Image;
    downsized_small: Image;
    downsized_still: Image;
    fixed_height: Image;
    fixed_height_downsampled: Image;
    fixed_height_small: Image;
    fixed_height_small_still: Image;
    fixed_height_still: Image;
    fixed_width: Image;
    fixed_width_downsampled: Image;
    fixed_width_small: Image;
    fixed_width_small_still: Image;
    fixed_width_still: Image;
    looping: Image;
    original_still: Image;
    original_mp4: Image;
    preview: Image;
    preview_gif: Image;
    preview_webp: Image;
    '480w_still': Image;
}

interface Image {
    height: number;
    width: number;
    size: number;
    url: string;
    mp4_size?: number;
    mp4?: number;
    webp_size?: number;
    webp?: number;
}

export interface IResponsePagination {
    total_count: number;
    count: number;
    offset: number;
}

export interface IResponseMeta {
    status: number;
    msg: string;
    response_id: string;
}