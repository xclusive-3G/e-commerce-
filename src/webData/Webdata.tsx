interface NavItem {
    id: string | number; // Replace with the actual type for `id`
    title: string;       // Replace with the actual type for `title`
    link:any
  }

export const NavData: NavItem[] = [
    {
        id: 1,
        title: "Profile",
        link:"#"
    },
    {
        id: 2,
        title: "Logout",
        link:"#"
    }
]