import { useForm } from "react-hook-form";
import SendIcon from "../../../assets/icons/commons/sendIcon";

export default function ContactoForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center p-[clamp(28px,4.688vw,60px)] gap-[clamp(9px,1.563vw,20px)] bg-verde-noche">
      <h2 className="text-display2 font-woodland font-bold text-beige-hogar">
        Envíanos un mensaje
      </h2>
      <p className="max-w-[550px] text-paragraph1 text-center leading-[115%] text-beige-hogar">
        Cuéntanos qué estás buscando y un asesor se pondrá en contacto contigo
        pronto.
      </p>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1280px] flex flex-col gap-[clamp(9px,1.563vw,20px)]"
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[clamp(4px,0.625vw,8px)]">
          <label htmlFor="name" className="text-paragraph2 text-beige-hogar">
            Nombre completo <span className="text-beige-hogar">*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            placeholder="Tu nombre completo"
            className="w-full h-[48px] px-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
          />
        </div>

        {/* Correo y teléfono */}
        <div className="flex w-full gap-[clamp(12px,1.953vw,25px)]">
          <div className="flex-1 flex flex-col gap-[clamp(4px,0.625vw,8px)]">
            <label htmlFor="email" className="text-paragraph2 text-beige-hogar">
              Correo electrónico <span className="text-beige-hogar">*</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="tu@email.com"
              className="w-full h-[48px] px-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
            />
          </div>

          <div className="flex-1 flex flex-col gap-[clamp(4px,0.625vw,8px)]">
            <label htmlFor="phone" className="text-paragraph2 text-beige-hogar">
              Teléfono <span className="text-beige-hogar">*</span>
            </label>
            <input
              {...register("phone", { required: true })}
              type="tel"
              id="phone"
              placeholder="81 1234 5678"
              className="w-full h-[48px] px-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo outline-none"
            />
          </div>
        </div>

        {/* Asunto */}
        <div className="flex flex-col gap-[clamp(4px,0.625vw,8px)]">
          <label htmlFor="subject" className="text-paragraph2 text-beige-hogar">
            Asunto
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            className="w-full h-[48px] px-[clamp(7px,1.25vw,16px)] bg-beige-hogar text-gris-profundo outline-none"
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-[clamp(4px,0.625vw,8px)]">
          <label htmlFor="message" className="text-paragraph2 text-beige-hogar">
            Mensaje
          </label>
          <textarea
            {...register("message")}
            id="message"
            placeholder="Cuéntanos más sobre lo que estás buscando..."
            className="w-full h-[150px] px-[clamp(7px,1.25vw,16px)] py-[clamp(7px,1.25vw,16px)] bg-beige-hogar placeholder:text-gris-profundo text-gris-profundo resize-none outline-none"
          />
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          className="w-full h-[48px] flex items-center justify-center gap-[clamp(7px,1.172vw,15px)] text-button bg-celeste-bienestar text-verde-confianza font-at-surt hover:cursor-pointer"
        >
          Enviar mensaje
          <SendIcon className="w-[clamp(11px,1.797vw,23px)] text-verde-confianza" />
        </button>
      </form>
    </div>
  );
}
