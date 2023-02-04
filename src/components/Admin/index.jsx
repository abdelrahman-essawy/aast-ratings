"use client"

import useSWR, { mutate, useSWRConfig } from "swr";
import DataSection from "./DataSection";
import SideBars from "./SideBars/SideBars";
import { useSearchParams } from 'next/navigation';
import EditIcon from "../../SVG/EditIcon";

const fetcher = url => fetch(url).then(r => r.json());

export function Sidebar({ searchParams }) {
    let { data } = useSWR(`/api/campuses`, fetcher);
    const pathname = useSearchParams();

    console.log(pathname);

    return (
        <section className={'px-2 flex h-[calc(100vh_-_117px)]'}>

            <div className="overflow-auto border-r border-zinc-700 h-full">
                <SideBars dataFromParent={data} />
            </div>

        </section>

    );
}