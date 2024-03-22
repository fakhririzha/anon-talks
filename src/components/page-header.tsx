'use client';

import * as React from 'react';
import Link from 'next/link';
import { AnonTalkLogo } from './images';
import { SquareMenu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { Icons } from './icons';

const components: {
    id: number;
    title: string;
    href: string;
}[] = [
    {
        id: 1,
        title: 'HOME',
        href: '/',
    },
    {
        id: 2,
        title: 'ABOUT',
        href: '/#',
    },
    {
        id: 3,
        title: 'CONTACT US',
        href: '/#',
    },
];
const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

export default function PageHeader() {
    return (
        <>
            <nav className="border-gray-200 p-5 dark:bg-transparent">
                <div className="mx-auto flex flex-wrap items-center justify-between 2xl:px-20">
                    <Link
                        href="/"
                        className="rtl:space-x flex items-center space-x-3"
                    >
                        <div className="h-[46px] w-[64px] bg-lightBrand bg-no-repeat dark:bg-darkBrand"></div>
                    </Link>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <NavigationMenu className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-transparent p-4 text-2xl font-medium dark:border-gray-700 dark:bg-transparent md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:dark:bg-transparent rtl:space-x-reverse">
                            <NavigationMenuList>
                                {components.map((components) => (
                                    <NavigationMenuItem
                                        key={components.id}
                                        className="roundedpx-3 block py-2 text-black  dark:text-white md:bg-transparent md:p-0 md:text-white md:dark:text-white"
                                        aria-current="page"
                                    >
                                        <Link
                                            href={components.href}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                {components.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="hidden gap-x-5 xs:flex md:flex-row">
                        <div className="xs:hidden sm:flex md:flex lg:flex xl:flex 2xl:flex ">
                            <Button className=" bg-white text-slate-900 ring-2 ring-slate-400 hover:bg-slate-100 hover:ring-4 dark:bg-white dark:text-black">
                                LOGIN
                            </Button>
                        </div>
                        <div className="gap-x-5 xs:flex">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
