import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import {LogIn} from "lucide-react"
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-[conic-gradient(var(--tw-gradient-stops))] from-yellow-500 via-pink-900 to-blue-400">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Build your Next.js project within minutes</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          <p className="max-w-xl mt-5 text-lg text-pearl-100"> 
            Join millions of developers building Next.js projects and startups with DevAid AI.
          </p>
          <div className="w-full mt-4">
            {isAuth ? (<FileUpload />):(
              <Link href="/sign-in">
                <Button>
                  Login to get started
                  <LogIn className="w-4 h-4 ml-2"/>
                  </Button>
              </Link>
            )}  
          </div>   
        </div>
      </div>
    </div>
  );
}