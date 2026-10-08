import { useForm } from "react-hook-form";
import { useState } from "react";
import { useInView } from "../../../hooks/useInView";
import { track } from "../../../analytics/track";
import { TRACK } from "../../../analytics/track.constants";

import nombreIcon from "../../../assets/icons/form/nombre.svg";
import ubicacionIcon from "../../../assets/icons/form/ubicacion.svg";
import correoIcon from "../../../assets/icons/form/correo.svg";
import telIcon from "../../../assets/icons/form/tel.svg";
import desarrolloIcon from "../../../assets/icons/form/desarrollo.svg";
import inversionesIcon from "../../../assets/icons/form/inversiones.svg";
import comentariosIcon from "../../../assets/icons/form/comentarios.svg";
import { supabase } from "../../../lib/supabase";
import { PROJECT_ID } from "../../../const/supabase";

export default function DesarrollemosFormulario() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      riskProfile: "Conservador",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ref, isVisible] = useInView();

  const handleReset = () => {
    track(TRACK.develop.formReset);
    reset();
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: null,
        city: data.city || null,
        interest: data.interest || null,
        experience: data.experience || null,
        comments: data.comments || null,
        source: "Beneva Landing",
        page: "desarrollemos-juntos",
      };

      const { error } = await supabase.from(PROJECT_ID).insert(payload);
      if (error) throw error;

      track(TRACK.develop.formSubmit);
      reset();
    } catch (error) {
      console.error(error);
      track(TRACK.develop.formSubmitError, {
        error_type: "server",
        error_message: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-[40px] py-[60px] md:p-[clamp(28px,4.688vw,60px)] gap-[20px] md:gap-[5px]">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center gap-[5px]`}
      >
        <h3 className="title text-center font-woodland text-verde-confianza font-semibold leading-none">
          ¿Tienes un proyecto en mente? Platiquemos
        </h3>
        <p className="paragraph leading-tight text-center text-verde-confianza">
          Cuéntanos en qué estás pensando ya sea un terreno, una idea o una
          inversión. <br /> Nosotros nos ponemos en contacto contigo.
        </p>
      </div>

      {/* Formulario */}
      <p className="paragraph text-gris-profundo pb-[10px]">
        Datos del inversionista
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1132px] flex flex-col gap-[10px]"
      >
        {/* Nombre y ciudad */}
        <div className="flex max-md:flex-col w-full gap-[25px] md:gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <div className="flex-1 flex flex-col h-fit gap-[8px]">
            <label className="formulario text-gris-profundo">
              Nombre completo
            </label>

            <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-verde-confianza">
              <img
                src={nombreIcon}
                alt="Ícono de usuario"
                className="w-fit h-[20px]"
              />
              <input
                {...register("name")}
                type="text"
                placeholder="Ej: Juan Pérez"
                className="w-full h-[60px] md:h-full formulario text-beige-hogar bg-verde-confianza placeholder:text-beige-hogar outline-none"
              />
            </div>
          </div>

          {/* Input */}
          <div className="flex-1 flex flex-col h-fit gap-[8px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label className="formulario text-gris-profundo">
              Ciudad / Estado
            </label>

            <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-verde-confianza">
              <img
                src={ubicacionIcon}
                alt="Ícono de ubicación"
                className="w-fit h-[20px]"
              />
              <input
                {...register("city")}
                type="text"
                placeholder="Nuevo León"
                className="w-full h-[60px] md:h-full formulario text-beige-hogar bg-verde-confianza placeholder:text-beige-hogar outline-none"
              />
            </div>
          </div>
        </div>

        {/* Correo y telefono */}
        <div className="flex max-md:flex-col w-full gap-[25px] md:gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <div className="flex-1 flex flex-col h-fit gap-[8px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label className="formulario text-gris-profundo">
              Correo electrónico
            </label>

            <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-verde-confianza">
              <img
                src={correoIcon}
                alt="Ícono de correo"
                className="w-fit h-[20px]"
              />
              <input
                {...register("email")}
                type="text"
                placeholder="ejemplo.email@gmail.com"
                className="w-full h-[60px] md:h-full formulario text-beige-hogar bg-verde-confianza placeholder:text-beige-hogar outline-none"
              />
            </div>
          </div>

          {/* Input */}
          <div className="flex-1 flex flex-col h-fit gap-[8px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label className="formulario text-gris-profundo">
              Teléfono / WhatsApp
            </label>

            <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-verde-confianza">
              <img
                src={telIcon}
                alt="Ícono de teléfono"
                className="w-fit h-[20px]"
              />
              <input
                {...register("phone")}
                type="text"
                placeholder="(555) 876-0084"
                className="w-full h-[60px] md:h-full formulario text-beige-hogar bg-verde-confianza placeholder:text-beige-hogar outline-none"
              />
            </div>
          </div>
        </div>

        {/* Tipo de desarrollo de interés */}
        <div className="flex-1 flex flex-col h-fit gap-[clamp(4px,0.625vw,8px)]">
          <label className="formulario text-gris-profundo">
            Tipo de desarrollo de interés
          </label>

          <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-verde-confianza">
            <img
              src={desarrolloIcon}
              alt="Ícono de desarrollo"
              className="w-fit h-[20px]"
            />
            <input
              {...register("interest")}
              type="text"
              placeholder="Habitacional e Industrial"
              className="w-full h-[60px] formulario text-beige-hogar bg-verde-confianza placeholder:text-beige-hogar outline-none"
            />
          </div>
        </div>

        {/* Experiencia previa en inversiones */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col h-fit gap-[clamp(4px,0.625vw,8px)]">
            <label className="formulario text-gris-profundo">
              Experiencia previa en inversiones
            </label>
            <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-verde-confianza">
              <img
                src={inversionesIcon}
                alt="Ícono de inversiones"
                className="w-fit h-[20px]"
              />
              <input
                {...register("experience")}
                type="text"
                placeholder="Ya he invertido"
                className="w-full h-[60px] formulario text-beige-hogar bg-verde-confianza placeholder:text-beige-hogar outline-none"
              />
            </div>
          </div>
        </div>

        {/* Comentarios o preguntas (opcional) */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col gap-[clamp(4px,0.625vw,8px)]">
            <label className="formulario text-gris-profundo">
              Comentarios o preguntas (opcional)
            </label>

            <div className="flex h-[150px] items-start px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-verde-confianza">
              <img
                src={comentariosIcon}
                alt="Ícono de mensaje"
                className="w-fit h-[25px] pt-[5px]"
              />
              <textarea
                {...register("comments")}
                type="text"
                placeholder="Compartános sobre sus objetivos"
                className="w-full h-full formulario text-beige-hogar bg-verde-confianza placeholder:text-beige-hogar outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Botónes (Reset y Submit) */}
        <div className="flex flex-col md:flex-row w-full gap-[clamp(12px,1.953vw,25px)] pt-[15px]">
          {/* Input */}
          <button
            type="button"
            onClick={handleReset}
            className="md:flex-1 h-[48px] font-at-surt bg-celeste-bienestar text-verde-confianza hover:cursor-pointer"
          >
            Limpiar
          </button>

          {/* Input */}
          <button
            type="submit"
            disabled={isLoading}
            className="md:flex-1 flex justify-center items-center h-[48px] gap-[clamp(7px,1.172vw,15px)] font-at-surt bg-celeste-bienestar text-verde-confianza hover:cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
          >
            {isLoading ? "Enviando " : "Enviar Solicitud"}
          </button>
        </div>
      </form>
    </div>
  );
}
