import style from './SobreNos.module.css';
import { Rodape } from '../../components';

const SobreNos = () => {
  return (
    <div className={style.sobreNos}>
      <h1>Sobre Nós</h1>
      <br />
      <p>🎓 Cursando Engenharia da Computação - Bacharelado</p>
      <p>❤️ Apaixonado por programação e design</p>
      <p>
        Desde criança, a tecnologia sempre me fascinou. Meu primeiro contato foi
        com videogames, onde passei horas explorando mundos no Super Mario
        World. Antes de mergulhar na programação, desenvolvi uma paixão pelo
        design, explorando tipografia, teoria das cores e os princípios de
        UX/UI. Essa experiência me permite criar interfaces que unem
        funcionalidade e estética de forma intuitiva e envolvente.
      </p>
      <p>
        💻 <strong>Desenvolvedor Full-Stack</strong>
      </p>
      <p>
        Sou desenvolvedor full-stack, com foco principal no front-end,
        especializado em JavaScript e estilização com CSS e Tailwind. Tenho
        experiência com várias tecnologias e frameworks, incluindo:
      </p>
      <ul>
        <li>
          <strong>Front-End:</strong> Tailwind | JavaScript | TypeScript |
          React.js
        </li>
        <li>
          <strong>Back-End:</strong> Node.js
        </li>
        <li>
          <strong>Mobile:</strong> Swift
        </li>
        <li>
          <strong>Banco de Dados:</strong> MySQL | MongoDB
        </li>
        <li>
          <strong>Versionamento:</strong> Git
        </li>
      </ul>
      <p>
        🎯 <strong>Diferenciais</strong>
      </p>
      <p>
        Minha formação em Educação Física me ajudou a desenvolver habilidades
        como trabalho em equipe, empatia e comunicação, fundamentais no
        desenvolvimento de soluções tecnológicas que atendem de forma eficaz as
        necessidades dos usuários.
      </p>
      <p>
        🎮 <strong>Além da tecnologia</strong>
      </p>
      <p>
        Nos momentos livres, adoro jogar videogames, treinar musculação e
        aprender algo novo. Acredito que o equilíbrio entre trabalho e hobbies é
        essencial para manter a criatividade e o foco no dia a dia.
      </p>
      <br />
      <p>
        E-mail:{' '}
        <a href='mailto:lucasvilelapersonal@gmail.com' target='_blank'>
          lucasvilelapersonal@gmail.com
        </a>
      </p>

      <Rodape criador='Lucas Vilela' />
    </div>
  );
};

export { SobreNos };
