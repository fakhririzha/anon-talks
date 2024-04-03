import { AnonTalkAI } from '@/components/images';
import { Button } from '@/components/ui/button';
import dbClient from '@/lib/db';
import { ChevronDown, Search, User } from 'lucide-react';
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
        <div className="flex min-h-full flex-col items-center justify-between gap-y-10 xs:p-5 sm:p-5 2xl:px-20">
            <div className="mx-auto flex h-full w-full gap-x-4">
                <div className="min-h-20 p-4 xs:w-full sm:w-full sm:justify-center md:w-[60%] lg:w-[60%] xl:w-[50%]">
                    <header className="justify-item-center flex h-full w-full flex-col justify-center gap-y-4 p-4 text-slate-900 dark:text-white xs:text-center sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left ">
                        <div className="text-5xl font-bold xl:text-7xl 2xl:text-7xl">
                            ANON TALK
                        </div>
                        <div className="text-3xl font-bold md:text-2xl">
                            Tempat bertanya jawab secara anonim
                        </div>
                        <div className="font-base text-base">
                            AnonTalk adalah platform tanya jawab yang
                            memungkinkan pengguna untuk bertanya dan menjawab
                            pertanyaan secara anonim. Pengguna dapat membuat
                            pertanyaan tanpa harus login ke akun. AnonTalk
                            memungkinkan pengguna untuk berbagi informasi tanpa
                            harus mengungkapkan identitas mereka.
                        </div>
                        <div className="mt-5 flex gap-x-5 gap-y-3 bg-transparent xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                            <Button className="bg-slate-900 text-white ring-0 ring-slate-700 duration-300 hover:bg-slate-700 hover:ring-1 hover:ring-slate-400 dark:bg-white dark:text-black dark:ring-0 dark:hover:bg-transparent dark:hover:text-white dark:hover:ring-1 dark:hover:ring-slate-400">
                                Daftar Akun
                                <User className="ml-2 h-4 w-4" />
                            </Button>
                            <Button className="bg-transparent text-slate-900 ring-1 ring-slate-400 transition-all duration-300 hover:bg-slate-100 hover:text-black hover:ring-1 hover:ring-slate-700 dark:bg-transparent dark:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:hover:ring-1 dark:hover:ring-slate-700">
                                Cari Pengguna
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
                    <ChevronDown className="sm:h-13 sm:w-13 animate-bounce xs:h-10 xs:w-10 md:h-16 md:w-16 lg:h-16 lg:w-16 xl:h-16 xl:w-16 2xl:h-16 2xl:w-16 " />
                </Link>
            </div>
            <div id="content1" className="h-[300px] w-full xl:mt-96">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora in ratione, nulla sed officia quia similique soluta
                magnam ab, expedita nam, sit nostrum temporibus placeat nihil
                odio veniam? Quis, deleniti!
            </div>
        </div>
    );
}
