import { useForm } from "react-hook-form";

export default function DesarrollemosFormulario() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      riskProfile: "conservador",
    },
  });
  const handleReset = () => {
    return reset();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center p-[clamp(28px,4.688vw,60px)] gap-[clamp(9px,1.563vw,20px)]">
      <h3 className="text-display2 font-woodland text-verde-confianza font-semibold">
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
        className="w-full max-w-[1132px] flex flex-col gap-[clamp(9px,1.563vw,20px)]"
      >
        {/* Nombre y ciudad */}
        <div className="flex w-full gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-button font-at-surt font-bold text-gris-profundo">
              Nombre completo
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Ej: Juan Pérez"
              className="w-full h-full px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
            />
          </div>

          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-button font-at-surt font-bold text-gris-profundo">
              Ciudad / Estado
            </label>
            <input
              {...register("city")}
              type="text"
              placeholder="Puebla"
              className="w-full h-full px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
            />
          </div>
        </div>

        {/* Correo y telefono */}
        <div className="flex w-full gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-button font-at-surt font-bold text-gris-profundo">
              Correo electrónico
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="ejemplo.email@gmail.com"
              className="w-full h-full px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
            />
          </div>

          {/* Input */}
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-button font-at-surt font-bold text-gris-profundo">
              Teléfono / WhatsApp
            </label>
            <input
              {...register("phone")}
              type="text"
              placeholder="(555) 876-0084"
              className="w-full h-full px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
            />
          </div>
        </div>

        {/* Capital disponible para invertir */}
        <div className="flex flex-col w-full gap-[clamp(9px,1.484vw,19px)]">
          <p className="text-button font-at-surt font-bold text-gris-profundo">
            Capital disponible para invertir
          </p>
          <div className="w-full h-2 bg-verde-confianza rounded" />
          <div className="flex justify-between w-full">
            <p className="text-paragraph4 text-gris-profundo">
              Monto en pesos mexicanos (MXN)
            </p>
            <p className="text-paragraph4 text-gris-profundo">$2,000,000</p>
          </div>
        </div>

        {/* Horizonte de tiempo */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-button font-at-surt font-bold text-gris-profundo">
              Horizonte de tiempo
            </label>
            <input
              {...register("time")}
              type="text"
              className="w-full h-[60px] px-[clamp(7px,1.25vw,16px)] bg-verde-confianza"
            />
          </div>
        </div>

        {/* Tipo de desarrollo de interés */}
        <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
          <label className="text-button font-at-surt font-bold text-gris-profundo">
            Tipo de desarrollo de interés
          </label>
          <input
            {...register("time")}
            type="text"
            className="w-full h-[60px] px-[clamp(7px,1.25vw,16px)] bg-verde-confianza"
          />
        </div>

        {/* Perfil de riesgo */}
        <div className="flex-1 flex flex-col gap-[clamp(9px,1.563vw,20px)]">
          <label className="text-button font-at-surt font-bold text-gris-profundo">
            Perfil de riesgo
          </label>

          {[
            {
              value: "conservador",
              title: "Conservador",
              desc: "Prefiero retornos estables con bajo riesgo, aunque sean menores.",
            },
            {
              value: "moderado",
              title: "Moderado",
              desc: "Acepto algo de volatilidad a cambio de mejores rendimientos.",
            },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center justify-start gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                value={option.value}
                {...register("riskProfile")}
                className="peer sr-only"
              />

              {/* Círculo custom */}
              <span className="self-start shrink-0 size-[clamp(6px,1.016vw,13px)] rounded-full outline-2 outline-verde-confianza outline-offset-0 border-verde-confianza bg-verde-dinamico peer-checked:bg-verde-confianza" />

              <span className="flex flex-col">
                <span className="text-button font-at-surt font-bold leading-none text-gris-profundo">
                  {option.title}
                </span>
                <span className="text-paragraph3 text-gris-profundo">
                  {option.desc}
                </span>
              </span>
            </label>
          ))}
        </div>

        {/* Rendimiento anual esperado (TAE) */}
        <div className="flex flex-col w-full gap-[clamp(9px,1.484vw,19px)]">
          <p className="text-button font-at-surt font-bold text-gris-profundo">
            Rendimiento anual esperado (TAE)
          </p>
          <div className="w-full h-2 bg-verde-confianza rounded" />
          <p className="text-button font-at-surt font-bold text-center text-gris-profundo">
            14%
          </p>
        </div>

        {/* Experiencia previa en inversiones */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-button font-at-surt font-bold text-gris-profundo">
              Experiencia previa en inversiones
            </label>
            <input
              {...register("experience")}
              type="text"
              className="w-full h-[60px] px-[clamp(7px,1.25vw,16px)] bg-verde-confianza"
            />
          </div>
        </div>

        {/* Comentarios o preguntas (opcional) */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-button font-at-surt font-bold text-gris-profundo">
              Comentarios o preguntas (opcional)
            </label>
            <textarea
              {...register("comments")}
              type="text"
              placeholder="Compartános sobre sus objetivos"
              className="w-full h-[150px] py-[clamp(6px,0.938vw,12px)] px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
            />
          </div>
        </div>

        {/* Botónes (Reset y Submit) */}
        <div className="flex w-full gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 h-[48px] font-at-surt bg-rosa-bienestar text-verde-confianza hover:cursor-pointer"
          >
            Limpiar
          </button>

          {/* Input */}
          <button
            type="submit"
            className="flex-1 h-[48px] font-at-surt bg-verde-dinamico text-verde-confianza hover:cursor-pointer"
          >
            Enviar Solicitud
          </button>
        </div>
      </form>
    </div>
  );
}
