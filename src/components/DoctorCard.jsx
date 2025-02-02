import PropTypes from "prop-types";

export default function DoctorCard(props){
    
    const {id, name, specialty, years_of_experience} = props.doctor;

    return (


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow" key={id}>
    <a href="#">
        <img className="rounded-t-lg" src={"https://picsum.photos/id/"+id+"/500"} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{specialty} - {years_of_experience} años de experiencia</p>

    </div>
</div>

    );
}

DoctorCard.propTypes = {
    doctor: PropTypes.object.isRequired,
  };