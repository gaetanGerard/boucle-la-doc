'use client';
import useWindowWidth from '@/lib/hooks/useWindowWidth';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

import { navigation } from '@/lib/data/navigation';

export const RenderNavigation = () => {
    const windowWidth = useWindowWidth();
    return windowWidth < 768 ? <NavigationMobile navigation={navigation} /> : <Navigation navigation={navigation} />;
};