'use client';
import useWindowWidth from '@/lib/hooks/useWindowWidth';
import SideNav from "@/components/SideNav/SideNav";
import SideNavMobile from "@/components/SideNav/SideNavMobile";

const RenderSideNav = ({ nav }) => {
    const windowWidth = useWindowWidth();
    return windowWidth < 768 ? <SideNavMobile nav={nav} /> : <SideNav nav={nav} mobile={false} />
}

export default RenderSideNav;