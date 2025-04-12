"use client"

import { useRouter } from "next/navigation";

export default function ForgetPassword() {
    const router = useRouter();
    return (
        <div>
            This is the Forget Password Page
            <br />
            Go to Home Page:
            <button onClick={() => router.push('/')} className="text-3xl text-amber-300 text-center">Home</button>
        </div>
    );
}