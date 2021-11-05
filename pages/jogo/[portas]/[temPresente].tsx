/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/link-passhref */
import styles from "../../../styles/Jogo.module.css";

import React, { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";

import { useRouter } from "next/router";

export default function jogo() {
  const router = useRouter();
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);

  // router.query.portas
  // router.query.temPresente
  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    const qtdePortasValidas = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;

    setValido(qtdePortasValidas && temPresenteValido);
  }, [portas, router.query.portas, router.query.temPresente]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }
  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h2>Valores inválidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  );
}
