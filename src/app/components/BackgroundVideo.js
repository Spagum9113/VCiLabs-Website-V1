export default function BackgroundVideo() {
    return (
        <div className="fixed inset-0 -z-10">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="bg4.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

