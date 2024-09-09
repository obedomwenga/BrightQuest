import Link from 'next/link';
import React from 'react';

export default function AsideItems({ Icon, title, link, color }){
    return(
        <Link href={link}>
            <div className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-500 transition-colors group">
                <Icon className={`w-6 h-6 text-${color}-500 group-hover:text-white`} />
                {/* {isOpen && <span className="ml-3 text-sm">{title}</span>} */}
            </div>
        </Link>
    )
}