import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default async function Navbar() {

  return (
    <header className="flex items-center justify-between bg-black px-4 py-3 shadow-sm">
      <div className="flex items-center gap-4">
        <Link className="text-lg font-semibold text-white" href="/">
          SocialRoots
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            className="text-sm font-medium text-gray-300 hover:text-gray-900"
            href="/explore"
          >
            Explore
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 hover:text-gray-900"
            href="/project/create"
          >
            Create Project
          </Link>
        </nav>
      </div>
      <Link href="/login">
          <Button className="hidden md:inline-flex text-white" size="sm" variant="solid">
        Login
      </Button>
      </Link>
    
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger> 
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              href="/explore"
            >
              Explore
            </Link>
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              href="/project/create"
            >
              Create Project
            </Link>
            <Link href="/login">
              Login
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header >
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}