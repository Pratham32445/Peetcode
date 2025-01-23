import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div>
        <p>Admin Panel</p>
        <Link href={"/dashboard/problem/create"}>
          <Button>Go to Admin </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
