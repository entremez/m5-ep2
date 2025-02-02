import DoctorCard from "../components/DoctorCard";
import PropTypes from "prop-types";

export default function DoctorsGrid(props){
    let doctores = props.doctors.map(function(doctor, key) {
        return <DoctorCard doctor={doctor} key={key}/>
      });
    return (
        <>
            <h1 className="mt-6 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Personal médico</h1>
            <div className="grid grid-cols-4 gap-2 place-items-center">
                {doctores}
            </div>
        </>
    );
}

DoctorsGrid.propTypes = {
    doctors: PropTypes.array.isRequired,
  };