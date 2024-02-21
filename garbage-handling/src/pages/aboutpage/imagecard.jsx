import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

export default function ImageCard({ src, alt, fallback,name,role }) {
    return (

        <>
            <div className="flex-1 align-center ">

                <Popover>
                    <PopoverContent>
                        <p>{name}</p>
                        <p>{role}</p>
                    </PopoverContent>
                <PopoverTrigger>
                <Avatar className="w-[8rem] h-[8rem] ">
                    <AvatarImage src={src} alt={alt} />
                    <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
                </PopoverTrigger>

                </Popover>
            </div>
        </>
    )
}