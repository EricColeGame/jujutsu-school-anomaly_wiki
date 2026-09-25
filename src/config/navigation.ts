export interface NavigationItem {
  key: string;
  path: string;
  icon?: any;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item: any) => item.isContentType).map((item: any) => item.path.replace(/^\//, ""));
