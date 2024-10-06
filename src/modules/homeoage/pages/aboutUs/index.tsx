import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useSpring } from 'react-spring'
import { Slogan, Section, SectionImage, SectionText, Highlight } from './styles'
import { NavbarComponent } from 'modules/homeoage/components/navbar'

export const AboutUs: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  })

  const hoverEffect = useSpring({
    transform: 'scale(1)',
    opacity: 1,
    from: { transform: 'scale(1.05)', opacity: 0.8 },
    config: { duration: 300 },
  })

  return (
    <Box>
      <NavbarComponent />
      <Container maxWidth="lg">
        <Slogan>¡Accede a Nuestro Plan Empresarial y Comienza Tu Propia Aventura Hoy!</Slogan>

        <Section>
          <SectionText variant="h5">
            Bienvenido a <Highlight>MakeUpDory</Highlight>, tu destino definitivo para todo lo
            relacionado con belleza y maquillaje. Descubre las últimas tendencias, consejos y
            secretos para lograr un look impecable.
          </SectionText>
          <SectionImage
            src="https://png.pngtree.com/png-clipart/20240107/original/pngtree-beautiful-girl-surrounded-by-makeup-set-png-image_14045252.png"
            alt="Belleza"
            style={fadeIn}
          />
        </Section>

        <Section>
          <SectionImage
            src="https://png.pngtree.com/png-vector/20240516/ourmid/pngtree-professional-make-up-tools-set-of-different-makeup-objects-png-image_12478557.png"
            alt="Maquillaje"
            style={hoverEffect}
          />
          <SectionText variant="h5">
            <Highlight>Curiosidades sobre el Maquillaje:</Highlight> ¿Sabías que la historia del
            maquillaje se remonta a las civilizaciones antiguas? Desde el icónico delineador de
            Cleopatra hasta las innovaciones modernas, el maquillaje ha sido una parte integral de
            las rutinas de belleza durante siglos.
          </SectionText>
        </Section>

        <Section>
          <SectionText variant="h5">
            <Highlight>Beneficios del Maquillaje:</Highlight> El maquillaje no solo realza tu
            apariencia, sino que también puede aumentar tu confianza y autoestima. Con los productos
            adecuados, puedes crear un look que refleje tu personalidad y estilo.
          </SectionText>
          <SectionImage
            src="https://static.vecteezy.com/system/resources/previews/025/212/764/original/pink-cosmetic-bag-with-beauty-master-s-tools-for-laminating-eyelashes-with-brushes-silicone-rollers-patches-watercolor-illustration-hand-drawn-isolated-composition-png.png"
            alt="Beneficios"
            style={fadeIn}
          />
        </Section>

        <Section>
          <SectionImage
            src="https://www.kinesiologiaestetica.cl/web/wp-content/uploads/2024/08/Copia-de-Copia-de-18SEP-KE-Fondo-de-pantalla-12.png"
            alt="Por qué nosotros"
            style={hoverEffect}
          />
          <SectionText variant="h5">
            <Highlight>¿Por qué Elegir MakeUpDory?</Highlight> En MakeUpDory, priorizamos la calidad
            y la satisfacción del cliente. Nuestros productos están cuidadosamente elaborados para
            cumplir con los más altos estándares, asegurando que obtengas la mejor experiencia en
            cada aplicación.
          </SectionText>    
        </Section>

        <Box mt={4} textAlign="center">
          <Typography variant="h6" color="#6C4D94">
            ¡Únete a nuestra comunidad y experimenta la magia del maquillaje con{' '}
            <Highlight>MakeUpDory</Highlight>!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
