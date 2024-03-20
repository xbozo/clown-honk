'use client'

import { TypeAnimation } from 'react-type-animation'

export const TypewriterTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        'Um blog simples e moderno',
        2000,
        'Compartilhe suas ideias',
        2000,
        'Crie seus documentos',
        2000,
        'Explore novos conteúdos',
        2000,
      ]}
      wrapper='h2'
      speed={45}
      style={{
        fontSize: '60px',
        display: 'inline-block',
        backgroundClip: 'text',
        color: '#b3b8be',
        backgroundImage: 'linear-gradient(to bottom, #f7fafc, #b3b8be)',
      }}
      repeat={Infinity}
      preRenderFirstString
    />
  )
}
