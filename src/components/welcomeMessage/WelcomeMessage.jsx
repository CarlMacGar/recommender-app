/**
 * A simple component that displays a welcoming message to the user, 
 * including a main heading and a secondary description encouraging the user to explore job opportunities.
 * 
 * @component
 * @returns {JSX.Element} The welcome message, consisting of a large heading and a smaller description.
 */

const WelcomeMessage = () =>{
    return(
        <article className="flex flex-col items-center justify-center text-center h-1/2 p-5">
            <h1 className="text-5xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-t from-vibrant-blue to-aqua">WELCOME</h1>
            <h3 className="text-sm sm:text-lg text-sec-txt-light">Looking for a job? Let´s take a look!</h3>
        </article>
    )
}

export default WelcomeMessage;