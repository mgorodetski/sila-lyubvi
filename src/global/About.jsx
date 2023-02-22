import { Box, Button } from '@mui/material'
import React from 'react'
import CustomButton from '../components/CustomButton'

const About = () => {
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            paddingRight: '242px'

        }}>
            <div className="about" >
                <h1 className="title-h1" style={{ position: 'absolute' }}>сила <span className='gradientText'>взаимопомощи</span></h1>
                <div>
                    <h3 className="title-h3" style={{ marginTop: '300px' }}>Проект движения Сила Любви</h3>
                    <p className="title-text">Цель проекта “Сила взаимопомощи” в развитие социальной сети взаимоподдержки. Здесь вы сможете искать партнеров для коммерческого или социального проекта, принять участие в группе психологической помощи, узнавать о новых интересных культурных событиях или предложить свое, а также получать полезную информацию по психологии и другим направлениям.</p>
                    <CustomButton
                    
                        title={'ПРИСОЕДИНИТЬСЯ'}
                        style={{
                            width: '204px',
                            height: '61px',

                            background: 'var(--gradient-primary)',
                            borderRadius: '30px',
                            color: '#F2F2F2',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '17px'
                        }}
                    >ПРИСОЕДИНИТЬСЯ</CustomButton>
                </div>
            </div>
            <div>
                <img
                    src="https://s3-alpha-sig.figma.com/img/fb6e/a081/b7c679219a806f4ae45f23524e1880b1?Expires=1672617600&Signature=lV8duUjxiH1IC42cqJHLjkWP~TbzyEHNF9G-0CYMj95347nUBT7ggQWGsmz5bIyNOQu2wW0yRc1Fc~oH9xONNdW0gtD~jZhQ-A5kTsvpeVJOv6B-iK-kJOsJYncjfnJbcaRYpPbYxDY5Kf1974lUvbviYArj69bjykaIYF4TchsxmblRPWj-DRW~g4rmUvO88nPGB7m4UYyyRE7ZaXbEED~i7hWY5HmBxYKPdBJHdEJ0m71IatJh~SQFAR-jqxWnaW8~6ZgywODJz8kwe38ljmN~mUp7j8BGXOVet8TeIiASPC5eHMZHaK-SmQ5EheaRKmTkdXtV6cq3dT0pNlJFBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width='529.29px' height='650px'
                    alt='Изображение двух рук протянутых друг другу' />
            </div>
        </Box >
    )
}

export default About
