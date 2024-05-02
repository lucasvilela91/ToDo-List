import style from "./SobreNos.module.css";

const SobreNos = () => {
  return (
    <div className={style.sobreNos}>
      <h1>Sobre Nós</h1>

      <br />
      <p>
        Apaixonado por tecnologia e computadores desde a infância, sou estudante
        de engenharia de software com foco em desenvolvimento front-end.
      </p>
      <p>
        Possuo conhecimento em MySQL, Git, CSS, HTML e JavaScript, e busco
        constante aprimoramento. Sou autodidata e tenho foco no aprendizado de
        frameworks como React.
      </p>
      <p>
        {" "}
        Tenho conhecimento básico de Linux e estudo React nas horas vagas. Busco
        uma oportunidade na área de desenvolvimento web, e estou disposto a
        contribuir para projetos desafiadores com dedicação e entusiasmo.{" "}
      </p>

      <br />
      <p>Email de contato:</p>
      <a href="mailto:lucasvilelapersonal@gmail.com" target="_blank">
        lucasvilelapersonal@gmail.com
      </a>
    </div>
  );
};

export { SobreNos };
