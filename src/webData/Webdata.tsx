import { FaShoppingCart } from "react-icons/fa";

interface NavItem {
    id: string | number; // Replace with the actual type for `id`
    title: any;       // Replace with the actual type for `title`
    link:any
  }

export const NavData: NavItem[] = [
    {
        id: 1,
        title: <FaShoppingCart size={20} className='mx-2' />,
        link:"#"
    },
    
]

