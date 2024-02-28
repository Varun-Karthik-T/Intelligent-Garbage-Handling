import ImageCard from "./imagecard";
import NavBar from "../../components/navbar";
import { team } from "../../const/team";



export default function AboutPage() {
    return (
        <>
            <NavBar />
            <div className="max-w-5xl mx-auto mt-8">
                <h2 className="text-3xl font-bold mb-4">Problem</h2>
                <p className="mb-8">
                    The waste management system in our country is currently facing significant challenges, primarily marked by the issue of overflowing bins. The absence of a systematic approach to monitor and manage the fill levels of various dust bins leads to operational inefficiencies and delays in waste collection. This problem not only disrupts the overall cleanliness but also poses environmental concerns. To address these challenges, there is a pressing need for a comprehensive understanding of the factors contributing to bin overflow and the implementation of a monitoring system. This system should provide real-time insights into the fill levels of bins, enabling a proactive approach to waste collection. The objective is to establish a more efficient and effective waste management system that ensures timely bin emptying, contributing to a cleaner and more sustainable environment.</p>

                <h2 className="text-3xl font-bold mb-4">Idea</h2>
                <p className="mb-8">
                    The SmartBin project presents an innovative solution to the inefficiencies in waste management. By integrating ultrasonic sensors, GSM, NRF, and 3D-printed components, the system enables real-time monitoring of garbage levels in bins. The the GSM module allows for instant communication via SMS or calls while the NRF module serves as a transmitter, and a corresponding receiver unit ensures seamless coordination. Additionally, the team's forward-thinking approach includes the integration of a solar voltage converter for sustainability. This solution not only addresses the immediate need for efficient waste management but also aligns with broader environmental goals by storing this data in a database or cloud-based solution. Before visualization, we preprocess the data by cleaning and filtering. Our visualizations include Power BI dashboards, graphs . This project exemplifies a holistic and technologically advanced approach to revolutionizing waste disposal practices.</p>

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
