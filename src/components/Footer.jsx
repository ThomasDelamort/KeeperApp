import react from 'react'

const getYear = () => new Date().getFullYear()

const Footer = () => {
    return (
        <div>
            <footer>
                <p>Copyright ⓒ {getYear()}</p>
            </footer>
        </div>
    )
}
export default Footer
