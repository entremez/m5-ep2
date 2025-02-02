import Head from "./components/Header"
import Footer from "./components/Footer"
import DoctorsGrid from "./views/DoctorsGrid"
import ServiceList from "./views/ServiceList"
import AppointmentForm from "./views/AppointmentForm"
import { useState, useEffect } from "react";
import Modal from "./components/Modal"
import { Routes, Route, Navigate } from "react-router-dom"
import axios from "axios"
import DoctorLayout from "./components/layouts/DoctorLayout"
import GuestLayout from "./components/layouts/GuestLayout"
import Login from "./views/Login"
import UserLayout from "./components/layouts/UserLayout"
import DoctorView from "./views/DoctorView"
import AdminLayout from "./components/layouts/AdminLayout"
import AdminView from "./views/AdminView"

function App() {

  const doctors = [{
    "id": 1,
    "name": "Dr. José Schmidt",
    "specialty": "Cardiología",
    "description": "Con más de 15 años de experiencia, el Dr. Schmidt, se especializa en diagnóstico y tratamiento de enfermedades cardiovasculares, enfocándose en prevención y bienestar cardíaco integral.",
    "image": "dr1.png",
    "years_of_experience": 18,
    "disponibility": {
      "days": ["Lunes", "Miércoles", "Viernes"],
      "hours": ["8:00", "10:00", "14:00"]
    }
  },
  {
    "id": 2,
    "name": "Dra. María Catalina López",
    "specialty": "Ginecología y Obstetricia",
    "description": "Experta en salud femenina, la Dra. López acompaña a sus pacientes en todas las etapas de la vida, brindando atención en control prenatal y salud reproductiva.",
    "image": "dr2.png",
    "years_of_experience": 11,
    "disponibility": {
      "days": ["Martes", "Jueves"],
      "hours": ["9:00", "11:00", "15:00"]
    }
  },
  {
    "id": 3,
    "name": "Dr. Ricardo Cassanova",
    "specialty": "Neurología",
    "description": "El Dr. Cassanova se dedica al estudio y tratamiento de enfermedades neurológicas como epilepsia, migrañas y trastornos del sueño, con énfasis en un enfoque humanizado.",
    "image": "dr3.png",
    "years_of_experience": 3,
    "disponibility": {
      "days": ["Lunes", "Miércoles", "Jueves"],
      "hours": ["8:00", "10:00", "17:00"]
    }
  },
  {
    "id": 4,
    "name": "Dra. Carolina Torres",
    "specialty": "Pediatría",
    "description": "Especializada en salud infantil, la Dra. Torres acompaña a los pequeños pacientes desde el nacimiento, enfocándose en controles preventivos y tratamiento de enfermedades comunes",
    "image": "dr4.png",
    "years_of_experience": 4,
    "disponibility": {
      "days": ["Martes", "Jueves", "Viernes"],
      "hours": ["9:00", "11:00", "15:00"]
    }
  },
  {
    "id": 5,
    "name": "Dr. Andrés Valenzuela",
    "specialty": "Traumatología",
    "description": "Con amplia experiencia en lesiones deportivas y traumatismos óseos, el Dr. Valenzuela se enfoca en la recuperación funcional de sus pacientes.",
    "image": "dr5.png",
    "years_of_experience": 20,
    "disponibility": {
      "days": ["Lunes", "Miércoles", "Viernes"],
      "hours": ["8:00", "10:00", "14:00"]
    }
  },
  {
    "id": 6,
    "name": "Dra. Daniela Rojas",
    "specialty": "Dermatología",
    "description": "Especialista en el tratamiento de afecciones cutáneas como acné, psoriasis y cáncer de piel, la Dra. Rojas también ofrece servicios de dermatología estética.",
    "image": "dr6.png",
    "years_of_experience": 12,
    "disponibility": {
      "days": ["Martes"],
      "hours": ["9:00", "10:00", "11:00"]
    }
  },
  {
    "id": 7,
    "name": "Dr. Javier Herrera",
    "specialty": "Oftalmología",
    "description": "El Dr. Herrera se dedica al diagnóstico y tratamiento de enfermedades oculares, con un enfoque en cirugías de cataratas y corrección de problemas refractivos.",
    "image": "dr7.png",
    "years_of_experience": 4,
    "disponibility": {
      "days": ["Miércoles", "Jueves"],
      "hours": ["8:00", "10:00", "14:00"]
    }
  },
  {
    "id": 8,
    "name": "Dra. Francisca Thompson",
    "specialty": "Nutrición y Dietética",
    "description": "Experta en alimentación saludable, la Dra. Thompson apoya a sus pacientes en la adopción de hábitos nutritivos para mejorar su calidad de vida y controlar patologías crónicas.",
    "image": "dr8.png",
    "years_of_experience": 9,
    "disponibility": {
      "days": ["Lunes", "Martes", "Viernes"],
      "hours": ["9:00", "11:00", "16:00"]
    }
  },
  {
    "id": 9,
    "name": "Dr. Francisco Ramírez",
    "specialty": "Psiquiatría",
    "description": "Con una perspectiva integradora, el Dr. Ramírez trabaja en el diagnóstico y tratamiento de trastornos emocionales, como ansiedad y depresión.",
    "image": "dr9.png",
    "years_of_experience": 4,
    "disponibility": {
      "days": ["Viernes"],
      "hours": ["11:00"]
    }
  }];

  useEffect(() => {
    fetch('src/assets/data/specialty.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSpecialty(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [specialty, setSpecialty] = useState([]);
  const [moreDoctors, setMoreDoctors] = useState([]);
  const [errores, setErrores] = useState('sin errores');

  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/doctors')
      .then((data) => {
        setSpecialty(data);
      })
      .catch((error) => {
        setErrores(error.message);
        console.log('Error', error.message);
      });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSpecialty([]);
      fetch('src/assets/data/specialtyHalf.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSpecialty(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      fetch('src/assets/data/specialty.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSpecialty(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [isOpen]);

  return (
    <>
      <Head />
      <Routes>
        <Route path="/home" element={<ServiceList services={specialty} toggleModal={toggleModal} errores={errores} />} />
        <Route path="/equipo-medico" element={<DoctorsGrid doctors={doctors} />} />,
        <Route
          path="/"
          element={<UserLayout />}
          children={[
            <Route path="/citas" element={<AppointmentForm doctors={doctors} />} />,
          ]}
        />
        <Route
          path="/"
          element={<DoctorLayout />}
          children={[
            <Route path="/doctor" element={<DoctorView />} />,
          ]}
        />
        <Route
          path="/"
          element={<AdminLayout />}
          children={[
            <Route path="/admin" element={<AdminView />} />,
          ]}
        />
        <Route
          path="/"
          element={<GuestLayout />}
          children={[
            <Route path="/login" element={<Login />} />,
          ]}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App

/**
 *       <button onClick={toggleModal} className="hover:shadow-form w-full rounded-md bg-[#27a1f3] py-3 px-8 text-center text-base font-semibold text-white outline-none">MODAL</button>
      {isOpen && <Modal toggleModal={toggleModal}/>}
 */
