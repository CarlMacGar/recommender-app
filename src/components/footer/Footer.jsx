/**
 * Footer component that displays copyright information and developer credits.
 * 
 * @component
 * @returns {JSX.Element} The footer element containing copyright information and links to the developers' GitHub profiles.
 */

const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return(
        <footer className="py-4 bg-primary-dark text-sec-txt-light">
            <div className="container mx-auto text-center text-sm md:text-lg">
                <p>&copy; {currentYear} - Developed by <a className="duration-150 text-vibrant-blue-light hover:text-aqua-dark" href="https://github.com/CarlMacGar" target="_blank">CarlMacGar</a> - <a className="duration-150 text-vibrant-blue-light hover:text-aqua-dark" href="https://github.com/Jaycom17" target="_blank">Jaycom17</a> - <a className="duration-150 text-vibrant-blue-light hover:text-aqua-dark" href="https://github.com/FranSotelo2303" target="_blank">FranSotelo2303</a> - <a className="duration-150 text-vibrant-blue-light hover:text-aqua-dark" href="https://github.com/Guillermo1298" target="_blank">Guillermo1298</a></p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )

}

export default Footer;