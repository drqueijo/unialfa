import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { Card } from '../../components/Card'
import axios from 'axios'

interface interfData {
    "id": string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "promoNumber": string,
    "imagemg": string,
    "imagemp": string
}

export const Categoria = () => {

    const { id } = useParams()

    const [dataProduto, setProduto] = useState<Array<interfData>>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/produtos?id_categoria=' + id)
            .then((response) => {
                setProduto(response.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [id])

    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%'
                }}
            >
                {
                    dataProduto.length > 0 ?
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            {
                                dataProduto.map((produto) => (
                                    <Card
                                        id={produto.id}
                                        nome={produto.nome}
                                        valor={produto.valor}
                                        promo={produto.promo}
                                        imagem={produto.imagemp}
                                    />
                                ))
                            }

                        </div>
                        :
                        <h2>Categoria não encontrada.</h2>
                }

            </div>
        </>
    )
}
