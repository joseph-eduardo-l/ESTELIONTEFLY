// interface.blog.ts
export interface BlogContentChild {
  type: string;
  text: string;
  bold?: boolean;
  italic?: boolean;
}

export interface BlogContent {
  type: string;
  children: BlogContentChild[];
}



export interface CoverImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}
export interface Blog {
  coverimage: any;
  id: number;
  documentId: string;
  Blogtitle: string;
  blogcontent: BlogContent[];
  publishedDate: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ApiResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}