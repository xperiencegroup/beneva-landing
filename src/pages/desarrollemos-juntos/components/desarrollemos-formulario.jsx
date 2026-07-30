import { useForm } from "react-hook-form";
import { useState } from "react";

export default function DesarrollemosFormulario() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      riskProfile: "Conservador",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleReset = () => {
    reset();
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://beneva-backend.vercel.app/api/form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "Beneva Landing",
            page: "Desarrollemos Juntos",
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
    <div className="flex flex-col justify-center items-center px-[40px] py-[60px] md:p-[clamp(28px,4.688vw,60px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]">
      <h3 className="text-[24px] md:text-display2 text-center font-woodland text-verde-confianza font-semibold leading-none">
        ¿Tienes un proyecto en mente? Platiquemos
      </h3>
      <p className="text-paragraph1 leading-tight text-center text-verde-confianza">
        Cuéntanos en qué estás pensando ya sea un terreno, una idea o una
        inversión. <br /> Nosotros nos ponemos en contacto contigo.
      </p>

      {/* Formulario */}
      <p className="text-paragraph1 font-basic-sans text-gris-profundo">
        Datos del inversionista
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1132px] flex flex-col gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
      >
        {/* Nombre y ciudad */}
        <div className="flex max-md:flex-col w-full gap-[25px] md:gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[8px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
              Nombre completo
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Ej: Juan Pérez"
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-beige-hogar"
            />
          </div>

          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[8px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
              Ciudad / Estado
            </label>
            <input
              {...register("city")}
              type="text"
              placeholder="Puebla"
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-beige-hogar"
            />
          </div>
        </div>

        {/* Correo y telefono */}
        <div className="flex max-md:flex-col w-full gap-[25px] md:gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[8px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
              Correo electrónico
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="ejemplo.email@gmail.com"
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-beige-hogar"
            />
          </div>

          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[8px] md:gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
              Teléfono / WhatsApp
            </label>
            <input
              {...register("phone")}
              type="text"
              placeholder="(555) 876-0084"
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-beige-hogar"
            />
          </div>
        </div>

        {/* Tipo de desarrollo de interés */}
        <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
          <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
            Tipo de desarrollo de interés
          </label>
          <input
            {...register("interest")}
            type="text"
            placeholder="Horizontal o Vertical"
            className="w-full h-[60px] px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-beige-hogar"
          />
        </div>

        {/* Experiencia previa en inversiones */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
              Experiencia previa en inversiones
            </label>
            <input
              {...register("experience")}
              type="text"
              placeholder="Ya he invertido"
              className="w-full h-[60px] px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-beige-hogar"
            />
          </div>
        </div>

        {/* Comentarios o preguntas (opcional) */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
              Comentarios o preguntas (opcional)
            </label>
            <textarea
              {...register("comments")}
              type="text"
              placeholder="Compartános sobre sus objetivos"
              className="w-full h-[150px] py-[12px] md:py-[clamp(6px,0.938vw,12px)] px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-beige-hogar"
            />
          </div>
        </div>

        {/* Botónes (Reset y Submit) */}
        <div className="flex flex-col md:flex-row w-full gap-[clamp(12px,1.953vw,25px)]">
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
