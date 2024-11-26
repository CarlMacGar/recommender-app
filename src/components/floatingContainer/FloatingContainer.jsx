import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { useRef,useEffect } from "react";

/**
 * A floating container component that displays content within a modal-like container.
 * The container can be closed by clicking outside of it or using the close button.
 * 
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.open - Determines if the floating container is visible.
 * @param {function} props.setOpen - Function to update the visibility of the floating container.
 * @param {React.ReactNode} props.children - The content to be displayed inside the floating container.
 * @returns {JSX.Element} The floating container element with a close button and the provided content.
 */
function FloatingContainer({open, setOpen, children}) {
    const containerRef = useRef(null)
    
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setOpen]);

    return (
        <article className={`fixed inset-0 bg-primary-dark bg-opacity-80 h-screen flex flex-col justify-center items-center transition-opacity duration-300 ${ open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ zIndex: 120 }}>
          <div className={`text-prim-txt-light shadow-lg border border-secondary-dark rounded-md bg-gradient-to-b from-dark-gray to-dark-gray-darker mx-auto w-5/6 md:w-2/3 transition-transform duration-300 transform overflow-auto scrollbar-webkit px-2 max-h-[85svh] ${open ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-10'}`} ref={containerRef}>
            <button
                className="absolute top-2 right-3"
                type="button"
                onClick={() => setOpen(false)}
            >
                <MdClose className="text-xl duration-150 text-vibrant-blue-light hover:text-vibrant-blue-dark" />
            </button>
            {children}
          </div>
        </article>
      );
}

FloatingContainer.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    children: PropTypes.node
}

export default FloatingContainer;