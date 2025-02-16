import React from 'react';

import Link from 'next/link';
import BodyText from '../BodyText';
import styles from './HowContribute.module.scss';

const HowContribute = () => {
  return (
    <div className={styles.contribute}>
      <img
        className={styles.contributeImage}
        src="/assets/people-contribute.svg"
        alt="Como contribuir"
      />
      <div className={styles.contentWrapper}>
        <h2 className={styles.text}>Seja um Voluntário</h2>
        <BodyText className={styles.text}>
          Seja para investigar uma obra, criar gráficos ou programas para raspar
          os dados: precisamos de pessoas que estejam dispostas a doar um pouco
          do seu tempo para criar o futuro onde Feira de Santana é uma cidade
          mais transparente. Se você tem interesse em entrar nessa com a gente,
          independente do seu conhecimento ou se tem muito ou pouco tempo, envie
          sua aplicação para voluntário do projeto{' '}
          <Link
            className={styles.link}
            href="https://forms.gle/w7P3BZAqEQJeN88eA"
            target="_blank"
            rel="noreferrer"
          >
            aqui
          </Link>
          .
        </BodyText>

        <h2 className={styles.text}>Doe para o Projeto</h2>
        <BodyText className={styles.text}>
          Dependemos de doações para manter os servidores do projeto rodando e
          os dados disponíveis para que todos os cidadãos tenham acesso fácil à
          informação. Além disso, iniciativas como o nosso podcast e
          investigações especiais requerem recursos para contratação de pessoas.
          Se você quiser apoiar o projeto financeiramente, entre em contato com
          a gente{' '}
          <Link className={styles.link} href="/#contato">
            pelo nosso formulário
          </Link>
          .
        </BodyText>

        <h2 className={styles.text}>Contribua com código</h2>
        <BodyText className={styles.text}>
          Você é uma pessoa programadora ou analista de dados e quer ajudar a
          construir essa iniciativa? Então dá uma olhada em nossos repositórios
          no{' '}
          <Link
            className={styles.link}
            href="https://github.com/DadosAbertosDeFeira"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
          . Temos desde análise de dados e APIs a frontend e NLP.
        </BodyText>
      </div>
    </div>
  );
};

export default HowContribute;
