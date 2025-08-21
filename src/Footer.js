import "./Footer.css";

function Footer() {
    var date = new Date();
    return (
        
        <footer>
            <p>{String.fromCharCode(169) + " " + date.getFullYear()}</p>
        </footer>
    );
}

export default Footer;