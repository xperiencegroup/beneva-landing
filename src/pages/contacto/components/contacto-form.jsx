import { useForm } from "react-hook-form";
import { useState } from "react";
import { useInView } from "../../../hooks/useInView";
import { track } from "../../../analytics/track";
import { TRACK } from "../../../analytics/track.constants";

import nombreIcon from "../../../assets/icons/form/green/nombre.svg";
import correoIcon from "../../../assets/icons/form/green/correo.svg";
import telIcon from "../../../assets/icons/form/green/tel.svg";
import mensajeIcon from "../../../assets/icons/form/green/mensaje.svg";

export default function ContactoForm() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ref, isVisible] = useInView();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://beneva-backend.vercel.app/api/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source: "Beneva Landing",
            page: "Contacto",
            data: {
              ...data,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      track(TRACK.contact.formSubmit);

      reset();
    } catch (error) {
      console.error(error);
      track(TRACK.contact.formSubmitError, {
        error_type: error.message.startsWith("HTTP") ? "server" : "network",
        error_message: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-[clamp(28px,4.688vw,60px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)] bg-verde-noche">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center gap-[5px]`}
      >
        <h2 className="title font-woodland font-bold text-beige-hogar">
          Envíanos un mensaje
        </h2>
        <p className="max-w-[815px] paragraph text-center leading-[115%] text-beige-hogar">
          Cuéntanos qué estás buscando y un asesor se pondrá en contacto contigo
          pronto.
        </p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1280px] flex flex-col gap-[20px]"
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="name" className="parrafos-bloques text-beige-hogar">
            Nombre completo <span className="text-beige-hogar">*</span>
          </label>

          <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-beige-hogar">
            <img
              src={nombreIcon}
              alt="Ícono de usuario"
              className="w-fit h-[20px]"
            />
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              placeholder="Tu nombre completo"
              className="w-full h-[48px] formulario bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
            />
          </div>
        </div>

        {/* Correo y teléfono */}
        <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[clamp(12px,1.953vw,25px)]">
          <div className="flex-1 flex flex-col gap-[16px]">
            <label
              htmlFor="email"
              className="parrafos-bloques text-beige-hogar"
            >
              Correo electrónico <span className="text-beige-hogar">*</span>
            </label>

            <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-beige-hogar">
              <img
                src={correoIcon}
                alt="Ícono de correo"
                className="w-fit h-[20px]"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                placeholder="tu@email.com"
                className="w-full h-[48px] formulario bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[16px]">
            <label
              htmlFor="phone"
              className="parrafos-bloques text-beige-hogar"
            >
              Teléfono <span className="text-beige-hogar">*</span>
            </label>

            <div className="flex h-[60px] items-center px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-beige-hogar">
              <img
                src={telIcon}
                alt="Ícono de teléfono"
                className="w-fit h-[20px]"
              />
              <input
                {...register("phone", { required: true })}
                type="tel"
                id="phone"
                placeholder="81 1234 5678"
                className="w-full h-[48px] formulario bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
              />
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-[16px]">
          <label
            htmlFor="message"
            className="parrafos-bloques text-beige-hogar"
          >
            Mensaje
          </label>

          <div className="flex h-[210px] items-start px-[16px] py-[8px] gap-[12px] rounded-[10px] bg-beige-hogar">
            <img
              src={mensajeIcon}
              alt="Ícono de mensaje"
              className="w-fit h-[25px] pt-[5px]"
            />
            <textarea
              {...register("message")}
              id="message"
              placeholder="Cuéntanos más sobre lo que estás buscando..."
              className="w-full h-full formulario bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo resize-none outline-none"
            />
          </div>
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-[48px] flex items-center justify-center gap-[19px] md:gap-[clamp(7px,1.172vw,15px)] text-[14px] md:text-button bg-celeste-bienestar text-verde-confianza font-at-surt hover:cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando" : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
}
