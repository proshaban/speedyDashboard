const AboutUs = ()=>
{
    return(
        <div>
            <h1 className="text-2xl font-bold">About Us</h1>
            <p>Technicaly it's about me. <br/>I am <a href="https://proshaban.vercel.app/" target="_blank" className="text-blue-500">Shaban Khan</a></p>
            <p>This is a sample assesement for <a href="https://speedybrand.io/" target="_blank" className="text-blue-500">SpeedyBrands</a>.</p>
            <p className="font-semibold">Tech Stack</p>
            <ul>
                <li>React</li>
                <li>Tailwind</li>
                <li>ShadCN</li>
            </ul>
        </div>
    )
}
export default AboutUs;