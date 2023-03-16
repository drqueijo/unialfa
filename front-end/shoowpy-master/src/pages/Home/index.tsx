import Card from '../../components/Card'
import Footer from '../../components/Footer'
import { Menu } from '../../components/Menu'

export const Home = () => {
    return (
        <>
            <Menu />
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%'
                }}
            >
                <h2>Produtos em destaque</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <Card title={'titulo'} />
                </div>
            </div>
            <Footer />
        </>
    )
}
