'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { EllipsisVertical } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { Separator } from '@radix-ui/react-dropdown-menu';

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
        href: '/about',
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
    const [nav, setNav] = useState(false);

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            // Assuming 768px is your md breakpoint
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <nav className="border-gray-200 p-5 dark:bg-transparent">
                <div className="mx-auto flex flex-wrap items-center justify-between px-0 2xl:px-20">
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

                    <div className="hidden gap-x-2 px-0 xs:flex xs:flex-row xs:items-center xs:justify-center md:flex-row md:items-center md:justify-center">
                        <div className="xs:hidden sm:flex md:flex lg:flex xl:flex 2xl:flex ">
                            <Button
                                size="custom"
                                className=" bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100 hover:ring-4 dark:bg-white dark:text-black"
                            >
                                LOGIN
                            </Button>
                        </div>
                        <div className="flex">
                            <ModeToggle />
                        </div>
                        <div className="flex md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className=" focus:dark-ring-blue-400 h-10 w-8 items-center justify-center rounded dark:ring-slate-100 focus:dark:ring-4"
                                    >
                                        <EllipsisVertical />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="px-4 py-5"
                                >
                                    {components.map((components) => (
                                        <DropdownMenuItem key={components.id}>
                                            <Link href={components.href}>
                                                <span className="mx-3 text-lg hover:underline focus:underline">
                                                    {components.title}
                                                </span>
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                    <Separator className="my-2" />
                                    <DropdownMenuItem className="flex sm:hidden md:hidden lg:hidden xl:flex 2xl:flex">
                                        <Button
                                            size="custom"
                                            className=" bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100 hover:ring-4 dark:bg-white dark:text-black"
                                        >
                                            LOGIN
                                        </Button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
