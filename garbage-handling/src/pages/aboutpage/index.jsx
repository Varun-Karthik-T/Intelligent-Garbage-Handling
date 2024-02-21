import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import aamir from "../../assets/MOHAMED_AAMIR_GHOUSE.jpg"
import varun from ""

export default function LandingPage() {
    return (

        <Avatar>
            <AvatarImage src={aamir} alt="@shadcn" />
            <AvatarFallback>MA</AvatarFallback>
        </Avatar>


    )
}