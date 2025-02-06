"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export function AppBar() {
    const session = useSession();

    return <div>
        <div className="flex justify-between">
            <div>
                Muzi
            </div>
            <div>
                {session.data?.user && <button className="m-2 p-2 bg-blue-400 rounded-md" onClick={() => signOut()}>Logout
                </button>} 
                {!session.data?.user && <button className="m-2 p-2 bg-blue-400 rounded-md" onClick={() => signIn()}>Sign In
                </button>}
            </div>
        </div>
    </div>
}