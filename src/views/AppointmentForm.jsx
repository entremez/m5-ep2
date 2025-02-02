import { useState, useRef } from "react";
import PropTypes from "prop-types";

export default function AppointmentForm(props){

    const myRef = useRef(null);

    const getValue = (e) => {
        e.preventDefault();
        if (myRef.current) {
          const idDoctor = myRef.current.selectedOptions[0].value;
          
          const doctor = props.doctors.filter(doctor => doctor.id == idDoctor)[0]['disponibility'];
          setPreview(JSON.stringify(doctor));
        }
      };

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [doctor, setDoctor] = useState("");
    const [preview, setPreview] = useState("");

  const doctores = props.doctors.map(function(doctor, key) {
        return <option value={doctor.id} key={key}>{doctor.name}</option>
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, phone, email, date, time, doctor);
    }

    return(
        <>
        <h1 className="mt-6 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Agendar cita</h1>
        <div className="flex p-12">
            <div className="max-w-[650px] bg-white">
                <form>
                    <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            Nombre completo
                        </label>
                        <input 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text" name="name" id="name" placeholder="Marcvelo Andrés Espinoza Zuárez"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label for="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                            Telefono
                        </label>
                        <input 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            type="text" name="phone" id="phone" placeholder="+56930318932"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label for="email" className="mb-3 block text-base font-medium text-[#07074D]">
                            Correo electrónico
                        </label>
                        <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" name="email" id="email" placeholder="hola@entremez.cl"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Fecha de cita
                                </label>
                                <input  
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                    type="date" name="date" id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Horario cita
                                </label>
                                <input         
                                    value={time}
                                    onChange={e => setTime(e.target.value)}
                                    type="time" name="time" id="time"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label for="name" className="mb-3 block text-base font-medium text-[#07074D]">
                            Doctor
                        </label>
                        <select 
                            ref={myRef}
                            value={doctor}
                            onChange={e => setDoctor(e.target.value)}
                            name="doctor" id="doctor" placeholder="Seleccione un doctor"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                            <option value="">Seleccione un doctor</option>
                            {doctores}
                        </select>
                        <button className="hover:shadow-form w-full rounded-md bg-[#27a1f3] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={getValue}>Ver agenda</button>
                        {preview}
                    </div>

                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-[#27a1f3] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            onClick={handleSubmit}>
                            Agendar consulta
                        </button>
                        
                    </div>
                </form>
            </div>
        </div>
</>
    )
}

AppointmentForm.propTypes = {
    doctors: PropTypes.array.isRequired,
  };