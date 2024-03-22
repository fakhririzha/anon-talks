import dbClient from '@/lib/db';
import { AnonTalkAI } from '@/components/images';
import { Button } from '@/components/ui/button';
import { MoveRight, Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';

type ConnectionStatus = {
    isConnected: boolean;
};

async function getData(): Promise<ConnectionStatus> {
    try {
        await dbClient;

        return {
            isConnected: true,
        };
    } catch (e) {
        console.error(e);

        return {
            isConnected: false,
        };
    }
}

export default async function Home() {
    const isConnected = await getData();

    console.log(
        isConnected
            ? 'You are connected to the database.'
            : 'You are not connected to the database.'
    );
    return (
        <div className="xs:p-5 flex min-h-full flex-col items-center justify-between gap-y-10 sm:p-5 2xl:px-20">
            <div className="mx-auto flex h-full w-full gap-x-4">
                <div className="xs:w-full min-h-20 p-4 sm:w-full sm:justify-center md:w-[60%] lg:w-[60%] xl:w-[50%]">
                    <header className="justify-item-center flex h-full w-full flex-col justify-center gap-y-4 p-4 text-slate-900 dark:text-white">
                        <div className="text-5xl font-bold xl:text-7xl 2xl:text-7xl">
                            ANON TALK
                        </div>
                        <div className="text-3xl font-bold md:text-2xl">
                            Tempat Tanya Jawab Bebas Gan
                        </div>
                        <div className="font-base text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptate voluptatum tempora fugit eius quasi
                            quis quisquam sapiente illo, possimus quibusdam.
                        </div>
                        <div className="mt-5 flex gap-x-5 lg:flex-row">
                            <Button className="bg-slate-900 text-white ring-2 ring-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:ring-4 hover:ring-slate-700 dark:bg-white dark:text-black dark:ring-1 dark:hover:bg-transparent dark:hover:text-white dark:hover:ring-4 dark:hover:ring-slate-700">
                                Mulai Dengan Cepat
                                <MoveRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button className="bg-transparent text-slate-900 ring-2 ring-slate-400 hover:bg-slate-100 hover:text-black hover:ring-4 hover:ring-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:hover:ring-slate-700">
                                Cari Cari Dulu Lur
                                <Search className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </header>
                </div>
                <div className="hidden min-h-20 p-4 sm:w-[50%] sm:justify-center md:flex md:w-[40%] lg:w-[40%] xl:w-[50%] ">
                    <header className=" flex h-full w-full justify-center">
                        <div>
                            <AnonTalkAI />
                        </div>
                    </header>
                </div>
            </div>
            <div className="mx-auto flex h-full w-full justify-center gap-x-4 ">
                <Link href="#content1">
                    <ChevronDown className="sm:h-13 sm:w-13 h-16 w-16 animate-bounce" />
                </Link>
            </div>

            <div id="content1" className="mt-[500px] h-[300px] w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora in ratione, nulla sed officia quia similique soluta
                magnam ab, expedita nam, sit nostrum temporibus placeat nihil
                odio veniam? Quis, deleniti!
            </div>
        </div>
    );
}
