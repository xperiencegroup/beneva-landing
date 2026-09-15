import { useForm } from "react-hook-form";
import { useState } from "react";
import rightDecoration from "../../../assets/images/icons/decorations/icono-quienes-somos.png";
import { useInView } from "../../../hooks/useInView";

import userIcon from "../../../assets/icons/home/user.svg";
import phoneIcon from "../../../assets/icons/home/phone.svg";
import mailIcon from "../../../assets/icons/home/mail.svg";
import chatIcon from "../../../assets/icons/home/chat.svg";

export default function HomeEnterarme() {
  const { handleSubmit, register, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [ref, isVisible] = useInView();

  const onSubmit = async (values) => {
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
            page: "Inicio",
            data: {
              ...values,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      setIsLoading(false);
      reset();
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col px-[40px] py-[30px] md:px-[60px] md:py-[70px] gap-[20px] md:gap-[10px] bg-verde-confianza">
      {/* Decoration */}
      <div className="absolute z-0 w-[clamp(184px,31.25vw,400px)] h-[clamp(115px,19.531vw,250px)] top-0 right-0">
        <div className="relative w-full h-full">
          <img
            src={rightDecoration}
            alt="Imagen decorativa"
            className="absolute inset-0 w-full h-full object-fill"
          />
        </div>
      </div>

      {/* Texts */}
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} relative z-10 flex flex-col gap-[5px]`}
      >
        <h3 className="title font-woodland text-verde-dinamico text-center">
          Más proyectos en camino
        </h3>
        <p className="paragraph text-center leading-tight">
          Estamos trabajando en nuevos desarrollos para distintas zonas de la
          zona metropolitana. <br /> Si quieres ser de los primeros en
          enterarte, déjanos tus datos.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 flex flex-col self-center w-full max-w-[1280px] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
          <label
            htmlFor="nombre"
            className="text-[16px] md:text-paragraph2 font-basic-sans font-bold tracking-wide text-beige-hogar"
          >
            Nombre completo *
          </label>

          <div className="flex w-full items-center justify-center pl-[24px] bg-beige-hogar rounded-[10px] overflow-hidden">
            <img
              src={userIcon}
              alt="Ícono del usuario"
              className="w-fit h-[19px]"
            />
            <input
              {...register("name")}
              id="nombre"
              type="text"
              required
              placeholder="Tu nombre completo"
              className="w-full max-md:h-[40px] bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[14px] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none"
            />
          </div>
        </div>

        {/* Correo y Teléfono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(14px,2.344vw,30px)]">
          <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
            <label
              htmlFor="correo"
              className="text-[16px] md:text-paragraph2 font-basic-sans font-bold tracking-wide text-beige-hogar"
            >
              Correo electrónico *
            </label>

            <div className="flex w-full items-center justify-center pl-[24px] bg-beige-hogar rounded-[10px] overflow-hidden">
              <img
                src={mailIcon}
                alt="Ícono del correo"
                className="w-fit h-[19px]"
              />
              <input
                {...register("email")}
                id="correo"
                type="email"
                required
                placeholder="tu@email.com"
                className="w-full max-md:h-[40px] bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[14px] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none rounded-[10px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
            <label
              htmlFor="telefono"
              className="text-[16px] md:text-paragraph2 font-basic-sans font-bold tracking-wide text-beige-hogar"
            >
              Teléfono *
            </label>
            <div className="flex w-full items-center justify-center pl-[24px] bg-beige-hogar rounded-[10px] overflow-hidden">
              <img
                src={phoneIcon}
                alt="Ícono del teléfono"
                className="w-fit h-[19px]"
              />
              <input
                {...register("phone")}
                id="telefono"
                type="tel"
                required
                placeholder="81 1234 5678"
                className="w-full max-md:h-[40px] bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[14px] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none rounded-[10px]"
              />
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
          <label
            htmlFor="mensaje"
            className="text-[16px] md:text-paragraph2 font-basic-sans font-bold tracking-wide text-beige-hogar"
          >
            Mensaje
          </label>
          <div className="flex w-full justify-center pl-[24px] bg-beige-hogar rounded-[10px] overflow-hidden">
            <div className="pt-[clamp(10px,1.406vw,20px)]">
              <img
                src={chatIcon}
                alt="Ícono del mensaje"
                className="w-fit h-[19px]"
              />
            </div>
            <textarea
              {...register("message")}
              id="mensaje"
              rows={5}
              placeholder="Cuéntanos más sobre lo que estás buscando..."
              className="w-full bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[14px] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none rounded-[10px]"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-[15px] md:gap-[clamp(6px,0.938vw,12px)] bg-[#B7D9E8] text-verde-confianza px-[14px] py-[clamp(10px,1.406vw,16px)] text-[14px] md:text-button transition-opacity hover:opacity-90 hover:cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Quiero enterarme primero"}
        </button>
      </form>
    </div>
  );
}
