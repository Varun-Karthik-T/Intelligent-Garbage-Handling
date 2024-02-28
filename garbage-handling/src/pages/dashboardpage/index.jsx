import NavBar from "../../components/navbar"

export default function DashboardPage() {
    return (
        <div className="h-screen">
            <NavBar />
            <iframe
                title="smartbin_dash"
                className="w-full h-full"
                src="https://app.powerbi.com/reportEmbed?reportId=4e37273f-3912-46ba-84ef-0134da424180&autoAuth=true&ctid=6e804f24-0209-4dcd-ac89-97525eddbd30"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
}