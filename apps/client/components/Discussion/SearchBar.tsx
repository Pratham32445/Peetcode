import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input type="text" placeholder="Search discussions" className="pl-10 w-full" />
    </div>
  )
}

