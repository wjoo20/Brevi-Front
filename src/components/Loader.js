import spinner from '../img/loading.gif'
const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
        </div>
    )
}

export default Loader