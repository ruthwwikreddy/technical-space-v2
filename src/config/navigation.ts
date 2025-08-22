export type NavItem = {
  label: string;
  path: string;
  type: 'page' | 'section';
  pagePath?: string;
  sectionId?: string;
  exact?: boolean;
};

export const navItems: NavItem[] = [
  { 
    label: 'Home', 
    path: '/', 
    type: 'page',
    exact: true
  },
  { 
    label: 'About Us', 
    path: '/#about', 
    type: 'section',
    pagePath: '/',
    sectionId: 'about'
  },
  { 
    label: 'Courses', 
    path: '/courses', 
    type: 'page'
  },
  { 
    label: 'Services', 
    path: '/#services', 
    type: 'section',
    pagePath: '/',
    sectionId: 'services'
  },
  { 
    label: 'Partners', 
    path: '/#partners', 
    type: 'section',
    pagePath: '/',
    sectionId: 'partners'
  },
  { 
    label: 'Community', 
    path: '/community', 
    type: 'page'
  },
  { 
    label: 'Contact', 
    path: '/#contact', 
    type: 'section',
    pagePath: '/',
    sectionId: 'contact'
  }
];

export const registerLink = '/#contact';

// Helper function to find a nav item by path
export const findNavItem = (path: string): NavItem | undefined => {
  return navItems.find(item => item.path === path);
};

// Helper function to check if a path is active
export const isActive = (currentPath: string, item: NavItem): boolean => {
  if (item.type === 'page') {
    return item.exact 
      ? currentPath === item.path 
      : currentPath.startsWith(item.path);
  }
  return false;
};
