import { useForm } from "react-hook-form";
import SendIcon from "../../../assets/icons/commons/sendIcon";
import { useState } from "react";

export default function DesarrollemosFormulario() {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      riskProfile: "conservador",
    },
  });
  const [tae, setTae] = useState(14);
  const [amount, setAmount] = useState(2000000);
  const handleReset = () => {
    return reset();
  };

  const onSubmit = (data) => {
    console.log({ ...data, tae, amount });
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
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
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
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
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
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
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
              className="w-full h-[60px] md:h-full px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
            />
          </div>
        </div>

        {/* Capital disponible para invertir */}
        <div className="flex flex-col w-full gap-[19px] md:gap-[clamp(9px,1.484vw,19px)]">
          <p className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
            Capital disponible para invertir
          </p>
          <input
            type="range"
            min={0}
            max={10000000}
            step={50000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 rounded cursor-pointer bg-verde-confianza accent-verde-confianza"
          />
          <div className="flex flex-col md:flex-row justify-between w-full max-md:gap-[24px]">
            <p className="text-[16px] md:text-paragraph4 text-gris-profundo">
              Monto en pesos mexicanos (MXN)
            </p>
            <p className="text-[16px] md:text-paragraph4 text-gris-profundo">
              ${amount.toLocaleString("es-MX")}
            </p>
          </div>
        </div>

        {/* Horizonte de tiempo */}
        <div className="flex flex-col w-full">
          <div className="flex-1 flex flex-col h-[84px] gap-[clamp(4px,0.625vw,8px)]">
            <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
              Horizonte de tiempo
            </label>
            <input
              {...register("time")}
              type="text"
              className="w-full h-[60px] px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza"
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
            className="w-full h-[60px] px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza"
          />
        </div>

        {/* Perfil de riesgo */}
        <div className="flex-1 flex flex-col gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]">
          <label className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
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
              <span className="self-start shrink-0 size-[13px] rounded-full outline-2 outline-verde-confianza outline-offset-0 border-verde-confianza bg-verde-dinamico peer-checked:bg-verde-confianza" />

              <span className="flex flex-col">
                <span className="text-[14px] md:text-button font-at-surt font-bold leading-none text-gris-profundo">
                  {option.title}
                </span>
                <span className="text-[14px] md:text-paragraph3 text-gris-profundo">
                  {option.desc}
                </span>
              </span>
            </label>
          ))}
        </div>

        {/* Rendimiento anual esperado (TAE) */}
        <div className="flex flex-col w-full gap-[19px] md:gap-[clamp(9px,1.484vw,19px)]">
          <p className="text-[14px] md:text-button font-at-surt font-bold text-gris-profundo">
            Rendimiento anual esperado (TAE)
          </p>
          <input
            type="range"
            min={0}
            max={30}
            step={1}
            value={tae}
            onChange={(e) => setTae(Number(e.target.value))}
            className="w-full h-2 rounded cursor-pointer bg-verde-confianza accent-verde-confianza"
          />
          <p className="text-[14px] md:text-button font-at-surt font-bold text-center text-gris-profundo">
            {tae}%
          </p>
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
              className="w-full h-[60px] px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza"
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
              className="w-full h-[150px] py-[12px] md:py-[clamp(6px,0.938vw,12px)] px-[16px] md:px-[clamp(7px,1.25vw,16px)] bg-verde-confianza placeholder:text-verde-dinamico"
            />
          </div>
        </div>

        {/* Botónes (Reset y Submit) */}
        <div className="flex flex-col md:flex-row w-full gap-[clamp(12px,1.953vw,25px)]">
          {/* Input */}
          <button
            type="button"
            onClick={handleReset}
            className="md:flex-1 h-[48px] font-at-surt bg-rosa-bienestar text-verde-confianza hover:cursor-pointer"
          >
            Limpiar
          </button>

          {/* Input */}
          <button
            type="submit"
            className="md:flex-1 flex justify-center items-center h-[48px] gap-[clamp(7px,1.172vw,15px)] font-at-surt bg-verde-dinamico text-verde-confianza hover:cursor-pointer"
          >
            Enviar Solicitud
            <SendIcon className="w-[clamp(11px,1.797vw,23px)] text-verde-confianza" />
          </button>
        </div>
      </form>
    </div>
  );
}
