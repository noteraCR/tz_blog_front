'use client'
import AddPost from "@/widgets/ui/AddPost";
import Posts from "@/widgets/ui/Posts";
import { useState } from "react";

export default function Home() {
  const [isWritePost, setIsWritePost] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {isWritePost && <AddPost/>}
      <Posts/>
    </main>
  );
}
