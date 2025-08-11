/**
 * Get the correct asset path based on the current environment
 * This ensures assets work correctly in both development and production
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, Vite serves from root
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base URL from Vite config
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`;
}
