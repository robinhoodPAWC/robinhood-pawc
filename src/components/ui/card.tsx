import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function Card({
    children
}: Props){

    return(

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-8">

            {children}

        </div>

    )

}