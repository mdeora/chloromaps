import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Card, Link, Row } from '@geist-ui/react';

export const mapDt = [
    {
        name: 'World',
        text: '180+ Countries Based on Robinson Projection.',
        link: '/world'
    },
    {
        name: 'India',
        text: 'All Indian States Based on Mercator Projection.',
        link: '/india'
    },
    {
        name: 'Usa',
        text: 'All 50 States Based on Lambert Azimuthal Equal-area projection.',
        link: '/usa'
    },
    {
        name: 'Europe',
        text: 'Both EU + Non-EU , Based on Robinson Projection.',
        link: '/europe'
    },
    {
        name: 'Russia',
        text: 'Russian Federation, Based on Mercator Projection.',
        link: '/russia'
    },
    {
        name: 'Sweden',
        text: 'All States included , Based on Mercator Projection.',
        link: '/sweden'
    }
];

const Home: React.FC = () => (
    <MainLayout>
        <div className="flex flex-col">
            <h1 className="hero-header">Chloromaps</h1>
            <h1 className="hero-text">Rapid Map Development and Editor</h1>
            <Row style={{ flexWrap: 'wrap' }} justify="space-between">
                {mapDt.map((el) => (
                    <Card key={el.name} width="320px" style={{ marginBottom: '20px' }}>
                        <h2>{el.name.toUpperCase()}</h2>
                        <p>{el.text}</p>
                        <Card.Footer>
                            <Link color href={el.link}>
                                Create
                            </Link>
                        </Card.Footer>
                    </Card>
                ))}
            </Row>
        </div>
        <style jsx>{`
            .hero-header {
                font-size: 70px;
                line-height: 1;
                margin-top: 40px;
            }
            .hero-text {
                margin-top: 50px;
                margin-bottom: 50px;
            }
        `}</style>
    </MainLayout>
);
export default Home;
