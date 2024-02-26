import ImageCard from "./imagecard";
import NavBar from "../../components/ui/navbar";
import { team } from "../../const/team";



export default function AboutPage() {
    return (
        <>
            <NavBar />
            <div className="max-w-5xl mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4">Objectives</h2>
                <p className="mb-8">
                    The primary objective of this project is to implement an innovative waste management solution
                    within our college premises. This solution, centered around a versatile device capable of monitoring and tracking the fill levels of various types of bins in real-time
                </p>

                <h2 className="text-3xl font-bold mb-4">Idea</h2>
                <p className="mb-8">
                    In our college, overflowing bins are causing major waste management issues. To tackle this, we came up with an innovative solution, a versatile device fitting for all kinds of dust bins, tracking their fill levels, and notifying workers via SMS. This system aims to streamline waste collection, reducing worker burden and ensuring timely bin emptying. With this project, we aim to create a more efficient and effective waste collection system within our college premises
                </p>

                <h2 className="text-3xl font-bold mb-4">Mentors</h2>

                <div className="flex justify-center">
                    <div className="flex-1">
                        <h5>Dr.Baskaran</h5>
                        <p>Professor</p>
                        <p>DCSE</p>
                    </div>
                    <div className="flex-1">
                        <h5>Dr. M Deivamani</h5>
                        <p>Assistant Professor</p>
                        <p>DIST</p>
                    </div>
                </div>

                <br></br>



                <h2 className="text-3xl font-bold mb-4">Our Team</h2>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {Object.values(team).map((member, index) => (
                        <ImageCard
                            key={index}
                            src={member.src}
                            alt={member.alt}
                            fallback={member.fallback}
                            name={member.name}
                            role={member.role}
                            linkedin={member.linkedin}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
