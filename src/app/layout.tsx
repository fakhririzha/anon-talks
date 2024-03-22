import type { Metadata } from 'next';
import { Roboto as FontSans } from 'next/font/google';
import './globals.css';
import PageHeader from '@/components/page-header';
import { ThemeProvider } from '@/components/theme-provider';

import { cn } from '@/lib/utils';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'Anon Talk',
    description: 'Tempat Tanya Jawab Bebas Gan',
    icons: {
        icon: '/icons/favicon-32x32.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={cn(
                    'max-h-screen min-h-screen bg-lightBg bg-fixed font-sans antialiased dark:bg-darkBg',
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="">
                        <PageHeader />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
