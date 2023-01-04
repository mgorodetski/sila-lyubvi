import { Box, Button, IconButton, Link } from '@mui/material'
import React from 'react'
import logo from '../img/logoDefault.png';
import { YouTube, Telegram } from '@mui/icons-material';
import CustomButton from '../components/CustomButton';

const Footer = () => {
    const linkStyle = {
        underline: "none", target: "_blank", rel: "noopener"
    };


    return (
        <Box className='box-footer'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <img
                    style={{
                        margin: '25px 101px 0px',
                        gap: 30,
                        width: 83,
                        height: 83
                    }}
                    src={logo} alt="Логотип Сила Любви" />
                <CustomButton
                    title={'ОБРАТНАЯ СВЯЗЬ'}
                    style={{
                        fontSize: "12px",
                        color: 'var(--main-text-color)',
                        marginTop: '47px',
                        marginRight: '224px',
                        gap: 30,
                        width: 187,
                        height: 61,
                        background: '#FFFFFF',
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 20,
                }}
            >
                <div
                    style={{
                        paddingLeft: 101,
                        width: '30%',
                        verticalAlign: 'top',
                    }}
                >
                    <p style={{
                        color: 'white',
                        fontSize: '24px',
                        margin: '0px 3px',
                    }}>
                        Проект движения</p>
                    <p style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        margin: 0
                    }}>
                        СИЛА ЛЮБВИ</p>
                    <IconButton
                        sx={{
                            padding: 0
                        }}>
                        <YouTube
                            sx={{
                                color: 'white',
                                fontSize: 30,
                            }} />
                    </IconButton>
                    <IconButton
                        sx={{
                            width: 30,
                            margin: '0px 15px',
                        }}
                    >
                        <Telegram
                            sx={{
                                color: 'white',
                                fontSize: 30,
                            }} />
                    </IconButton>
                </div>
                <div
                    className='footer-links'
                >
                    <Link style={linkStyle} href="#">КУЛЬТУРНЫЕ МЕРОПРИЯТИЯ</Link>
                    <Link style={linkStyle} href="#">ПСИХОЛОГИЧЕСКАЯ ПОДДЕРЖКА</Link>
                    <Link style={linkStyle} href="#">ДЕЛОВОЕ СОТРУДНИЧЕСТВО</Link>
                </div>
                <div
                    className='footer-links'
                    style={{
                        padding: '20px 60px'
                    }}
                >
                    <Link style={linkStyle} href="#">О ПРОЕКТЕ</Link>
                    <Link style={linkStyle} href="#">БЛОГ</Link>
                </div>
            </div>
        </Box >
    )
}

export default Footer