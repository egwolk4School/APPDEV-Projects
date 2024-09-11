import './Footer.css';
export default function Footer(){
    return(
        <footer className="foot">
            <p className="foot-text">
                &copy; {new Date().getFullYear()} Personal Profile || Written by: Erin Covacha
            </p>
        </footer>
    )
}