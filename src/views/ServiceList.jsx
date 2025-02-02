import PropTypes from "prop-types";

export default function ServiceList(props){
   
    return (
        <>
            <button onClick={props.toggleModal} className="rounded-md py-3 px-2 bg-[#27a1f3] text-center text-base font-semibold text-white outline-none">TOGGLE</button>
            <p>{props.errores}</p>
            <h1 className="mt-6 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Servicios</h1>
            <div className="grid grid-cols-4 gap-2 place-items-left ml-3">
                <ul>
                    {props.services.map(function(service, key) {
                        return <li key={key}>{service.display}</li>
                    })}
                </ul>
            </div>
        </>
    );
}

ServiceList.propTypes = {
    services: PropTypes.array,
    doctors: PropTypes.array,

  };