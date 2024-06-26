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
import { FaLinkedin } from 'react-icons/fa';

export default function ImageCard({ src, alt, fallback, name, role, linkedin }) {
    return (
        <div className="flex-1 align-center">
            <Popover>
                <PopoverTrigger>
                    <Avatar className="w-[8rem] h-[8rem] relative">
                        <AvatarImage src={src} alt={alt} />
                        <AvatarFallback>{fallback}</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="grid grid-cols-4">
                    <div className="col-span-3">
                        <p>{name}</p>
                        <p>{role}</p>
                    </div>
                    <div className="col-span-1 flex justify-end items-center">
                        <a href={linkedin}  className="ml-2">
                            <FaLinkedin />
                        </a>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
