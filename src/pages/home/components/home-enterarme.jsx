import { useForm } from "react-hook-form";
import SendIcon from "../../../assets/icons/commons/sendIcon";

export default function HomeEnterarme() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div className="flex flex-col px-[40px] py-[30px] md:px-[clamp(28px,4.688vw,60px)] md:py-[clamp(16px,2.656vw,34px)] gap-[20px] md:gap-[clamp(9px,1.563vw,20px)] bg-verde-confianza">
      <div className="flex flex-col gap-[clamp(9px,1.563vw,20px)]">
        <h3 className="text-[24px] md:text-display2 font-woodland text-verde-dinamico text-center">
          Más proyectos en camino
        </h3>
        <p className="text-[18px] md:text-paragraph2 text-center leading-tight">
          Estamos trabajando en nuevos desarrollos para distintas zonas de la
          zona metropolitana. <br /> Si quieres ser de los primeros en
          enterarte, déjanos tus datos.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px] md:gap-[clamp(9px,1.563vw,20px)]"
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
          <label
            htmlFor="nombre"
            className="text-[16px] md:text-paragraph2 text-beige-hogar"
          >
            Nombre completo <span className="text-beige-hogar">*</span>
          </label>
          <input
            {...register("name")}
            id="nombre"
            type="text"
            required
            placeholder="Tu nombre completo"
            className="w-full max-md:h-[40px] bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[clamp(14px,2.344vw,30px)] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none"
          />
        </div>

        {/* Correo y Teléfono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(14px,2.344vw,30px)]">
          <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
            <label
              htmlFor="correo"
              className="text-[16px] md:text-paragraph2 text-beige-hogar"
            >
              Correo electrónico <span className="text-beige-hogar">*</span>
            </label>
            <input
              {...register("email")}
              id="correo"
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full max-md:h-[40px] bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[clamp(14px,2.344vw,30px)] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none"
            />
          </div>

          <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
            <label
              htmlFor="telefono"
              className="text-[16px] md:text-paragraph2 text-beige-hogar"
            >
              Teléfono <span className="text-beige-hogar">*</span>
            </label>
            <input
              {...register("phone")}
              id="telefono"
              type="tel"
              required
              placeholder="81 1234 5678"
              className="w-full max-md:h-[40px] bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[clamp(14px,2.344vw,30px)] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none"
            />
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-[clamp(4px,0.781vw,10px)]">
          <label
            htmlFor="mensaje"
            className="text-[16px] md:text-paragraph2 text-beige-hogar"
          >
            Mensaje
          </label>
          <textarea
            {...register("message")}
            id="mensaje"
            rows={5}
            placeholder="Cuéntanos más sobre lo que estás buscando..."
            className="w-full bg-beige-hogar text-gris-profundo max-md:text-[12px] max-md:placeholder:text-[12px] placeholder:text-gris-profundo/70 px-[clamp(14px,2.344vw,30px)] py-[clamp(10px,1.406vw,16px)] text-paragraph2 outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-[15px] md:gap-[clamp(6px,0.938vw,12px)] bg-[#B7D9E8] text-verde-confianza font-semibold px-[clamp(14px,2.344vw,30px)] py-[clamp(10px,1.406vw,16px)] text-[14px] md:text-button transition-opacity hover:opacity-90"
        >
          Quiero enterarme primero
          <SendIcon className="w-[20px] md:w-[clamp(11px,1.797vw,23px)] text-verde-confianza" />
        </button>
      </form>
    </div>
  );
}
