'use client';

import React from 'react'
import { usePathname } from 'next/navigation';

import Home from '@/layout/Home/Home'
import Faq from '@/layout/Faq/Faq'
import Documentation from '@/layout/Documentation/Documentation'


const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname();

    switch (pathname) {
        case '/':
            return <Home />
        case '/faq':
            return <Faq />
        case '/documentation':
            return <Documentation />
        default:
            return <div>404</div>;
    }
}

export default page