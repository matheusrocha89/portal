import { Container, Row, Col } from 'react-grid-system';

import SEO from '../../components/SEO';
import Headline from '../../components/Headline';
import BodyText from '../../components/BodyText';

import styles from './sobre.module.scss';

export default function About() {
  return (
    <>
      <SEO title="Sobre" image="assets/dadosabertosdefeira.png" />
      <Container>
        <Row>
          <Col xs={12}>
            <Headline className={styles.pageTitle}>
              Sobre: Nosso manifesto
            </Headline>

            <BodyText noMargin className={styles.textTitle}>
              O que é o Dados Abertos de Feira?
            </BodyText>
            <BodyText>
              É uma iniciativa de fomento à transparência, à abertura dos dados
              públicos e de incentivo ao controle social no município de Feira
              de Santana. Somos uma iniciativa da sociedade civil organizada,
              apartidária e sem fins lucrativos. Nós acreditamos que todo
              cidadão têm o direito de saber o que é feito com os recursos de
              suas contribuições e buscamos dar transparência às ações dos
              órgãos públicos.
            </BodyText>
            <BodyText>
              Usamos tecnologia para coletar os dados e fazer análises. O nosso
              objetivo é disponibilizar esses dados para que as pessoas possam
              ter acesso de maneira fácil e rápida. Cidadãos, jornalistas,
              pesquisadores ou estudantes: todos devem ter acesso à informação.
              O direito de buscar informações sobre sua rua, seu bairro ou
              qualquer área da cidade, por exemplo, deve ser algo simples de ser
              realizado por qualquer pessoa.
            </BodyText>

            <BodyText noMargin className={styles.textTitle}>
              Nossa história
            </BodyText>
            <BodyText>
              A ideia de criar um espaço onde as pessoas possam buscar
              informações de maneira fácil sobre o município nasceu em 2019,
              quando a analista de sistemas Ana Paula Gomes tentou encontrar
              informações sobre quanto o município gastava com a merenda
              escolar, após ouvir uma denúncia feita por Rafael Velame no rádio
              sobre a falta de merenda em algumas escolas da cidade. Ao acessar
              o portal da transparência de Feira de Santana deparou-se com a
              dificuldade de fazer buscas na página de licitações. Fez alguns
              pedidos de informação à Prefeitura, mas não foi respondida.
            </BodyText>
            <BodyText>
              Após a tentativa frustrada de conseguir informações da Prefeitura,
              Ana Paula foi até o site da Câmara Municipal de Feira de Santana e
              descobriu que a situação também não era boa. Informações simples,
              como a assiduidade dos vereadores, não estavam disponíveis. Você
              consegue se imaginar pagando um salário alto a um funcionário e
              não sabendo se ele compareceu ao trabalho ou se executou sua
              função como deveria?
            </BodyText>
            <BodyText>
              Diante da situação foram feitos novos pedidos de informação à
              Câmara, também sem respostas. Após meses de espera foi necessário
              acionar o Ministério Público para intermediar o processo e a
              partir daí o projeto ganhou projeção nas mídias locais, como no
              BATV da TV Subaé, Acorda Cidade, Blog do Velame, além de diversas
              participações nos programas da Rádio Globo Feira e Jovem Pan. Com
              a repercussão, o presidente da Câmara Municipal, José Carneiro,
              nos convidou para uma visita, marcando o início de uma colaboração
              com a Casa da Cidadania. A partir dessa data, a Câmara passou a
              divulgar a assiduidade dos vereadores e as atas das sessões da
              casa.
            </BodyText>
            <BodyText>
              Ainda estamos lutando para conseguir dados históricos de
              assiduidade dos vereadores e fazer com que os pedidos de
              informação sejam propriamente respondidos pela Prefeitura.
              Entendemos que a transparência tem grande impacto em coibir atos
              de corrupção e tornar o uso do dinheiro público mais eficiente.
              Lutar pela transparência é um trabalho de todos.
            </BodyText>

            <BodyText noMargin className={styles.textTitle}>
              O que é transparência pública?
            </BodyText>
            <BodyText>
              Transparência pública: Preceito através do qual se impõe à
              administração pública a prestação de contas de suas ações, através
              da utilização de meios de comunicação. A definição trazida pela
              Controladoria-Geral da União (CGU) resume bem o que é a
              transparência pública: “A transparência é o melhor antídoto contra
              a corrupção, uma vez que ela é um importante mecanismo indutor
              para que os gestores públicos ajam com responsabilidade. Uma
              gestão pública transparente permite à sociedade, com informações,
              colaborar no controle das ações de seus governantes, com intuito
              de checar se os recursos públicos estão sendo usados como
              deveriam.” Aprenda mais sobre O que é transparência pública na
              página do Senado e também nos cursos da Escola Virtual..
            </BodyText>

            <BodyText noMargin className={styles.textTitle}>
              O que fazemos?
            </BodyText>
            <BodyText>
              Fomentamos a abertura dos dados do município com a utilização de
              robôs que monitoram os portais de transparência e mantendo os
              dados disponíveis e atualizados em nosso portal de forma acessível
              e simples de serem consultados. Fomentamos a visibilidade das
              ações dos gestores tornando mais acessível a prestação de contas,
              analisando os dados obtidos, investigando e criando publicações
              dos resultados de questões relevantes ao município, tais como
              Hospital de Campanha, Beneficiários do Auxílio Emergencial,
              COVID-19 em Feira. Além disso, são propostas melhorias nos portais
              de transparência. Incentivamos a fiscalização e o monitoramento
              das ações e dados públicos atuando como facilitadores sobre os
              pedidos de transparência feitos e informando como funcionam as
              regras baseadas na LAI — Lei de Acesso à Informação. Fomentamos a
              participação da população com mais cidadania, visando a defesa do
              interesse público e auxiliar no combate à corrupção.
            </BodyText>

            <BodyText noMargin className={styles.textTitle}>
              Quem somos e como fazer parte?
            </BodyText>
            <BodyText>
              Um grupo de pessoas voluntárias, sem interesses lucrativos e sem
              vínculos ou quaisquer intenções político-partidárias, com o único
              propósito de fomentar a transparência da gestão pública do
              município de Feira de Santana através do livre acesso aos dados
              públicos. As nossas reuniões são mensais, pela internet e abertas.
              Ou seja: qualquer pessoa, com vínculo ao projeto ou não, está
              convidada a participar. Todo o código que produzimos está aberto e
              disponível no nosso GitHub. Temos grupos no WhatsApp e no Telegram
              também.
            </BodyText>
          </Col>

          <Col xs={12}>
            <a href="/">
              <Headline>Voltar para Home</Headline>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
