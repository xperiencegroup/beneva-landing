import { useForm } from "react-hook-form";
import { useState } from "react";
import { useInView } from "../../../hooks/useInView";

export default function ContactoForm() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
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

      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-[clamp(28px,4.688vw,60px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)] bg-verde-noche">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "is-visible" : ""} flex flex-col items-center gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]`}
      >
        <h2 className="title font-woodland font-bold text-beige-hogar">
          Envíanos un mensaje
        </h2>
        <p className="max-w-[550px] paragraph text-center leading-[115%] text-beige-hogar">
          Cuéntanos qué estás buscando y un asesor se pondrá en contacto contigo
          pronto.
        </p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1280px] flex flex-col gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[12px] md:gap-[clamp(4px,0.625vw,8px)]">
          <label
            htmlFor="name"
            className="text-[16px] md:text-paragraph2 font-bold tracking-wide text-beige-hogar"
          >
            Nombre completo <span className="text-beige-hogar">*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            placeholder="Tu nombre completo"
            className="w-full h-[48px] px-[12px] md:px-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
          />
        </div>

        {/* Correo y teléfono */}
        <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[clamp(12px,1.953vw,25px)]">
          <div className="flex-1 flex flex-col gap-[12px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label
              htmlFor="email"
              className="text-[16px] md:text-paragraph2 font-bold tracking-wide text-beige-hogar"
            >
              Correo electrónico <span className="text-beige-hogar">*</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="tu@email.com"
              className="w-full h-[48px] px-[12px] md:px-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
            />
          </div>

          <div className="flex-1 flex flex-col gap-[12px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label
              htmlFor="phone"
              className="text-[16px] md:text-paragraph2 font-bold tracking-wide text-beige-hogar"
            >
              Teléfono <span className="text-beige-hogar">*</span>
            </label>
            <input
              {...register("phone", { required: true })}
              type="tel"
              id="phone"
              placeholder="81 1234 5678"
              className="w-full h-[48px] px-[12px] md:px-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
            />
          </div>
        </div>

        {/* Asunto */}
        <div className="flex flex-col gap-[12px] md:gap-[clamp(4px,0.625vw,8px)]">
          <label
            htmlFor="subject"
            className="text-[16px] md:text-paragraph2 font-bold tracking-wide text-beige-hogar"
          >
            Asunto
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            className="w-full h-[48px] px-[12px] md:px-[clamp(7px,1.25vw,16px)] bg-beige-hogar text-gris-profundo outline-none"
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-[12px] md:gap-[clamp(4px,0.625vw,8px)]">
          <label
            htmlFor="message"
            className="text-[16px] md:text-paragraph2 font-bold tracking-wide text-beige-hogar"
          >
            Mensaje
          </label>
          <textarea
            {...register("message")}
            id="message"
            placeholder="Cuéntanos más sobre lo que estás buscando..."
            className="w-full h-[210px] p-[20px] md:px-[clamp(7px,1.25vw,16px)] md:py-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo resize-none outline-none"
          />
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
