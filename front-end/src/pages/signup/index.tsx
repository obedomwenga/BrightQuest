import { Montserrat as FontSans } from 'next/font/google';
import SessionLayout from "@/components/@layouts/session-layout";

import {cn} from '@/lib/utils';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function Signup(){
    return (
        <SessionLayout bgColor="yellow">
            <div className={cn("w-full md:w-1/2 p-8 md:p-12 font-montserrat", fontSans.variable)}>
                <h2 className="text-xl text-yellow-800 mb-4">Unlock a World of Knowledge and Creativity</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
                    Welcome for a fun learning experience
                </h1>
                <p className="text-yellow-800 mb-8">
                    Whether you're excited to dive into new subjects or ready to share your awesome ideas, FunLearn is the place for you!
                </p>
                <div className="space-y-4">
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-bold py-3 px-4 rounded-full transition duration-300">
                    Become a Creator
                    </button>
                    <button className="w-full bg-white hover:bg-gray-100 text-yellow-900 font-bold py-3 px-4 rounded-full transition duration-300">
                    Become a Learner
                    </button>
                </div>
                <p className="mt-8 text-yellow-800 text-sm">
                    is all about making learning exciting and creative! Choose your path and start your adventure today.
                </p>
            </div>
        </SessionLayout>
    )
}