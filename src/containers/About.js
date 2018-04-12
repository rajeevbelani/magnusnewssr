import React from 'react'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import Heading from 'grommet/components/Heading'
import Quote from 'grommet/components/Quote'
import Paragraph from 'grommet/components/Paragraph'

import Image from 'grommet/components/Image'

export default () => (
  <Box>
    <Section pad="large"
      justify="center"
      align="center"
      colorIndex="neutral-1-t">
      <Headline margin="none">
        About Magnus Medi
      </Headline>
      <br />
      Your Health Deserves More
    </Section>

    <Box>
      <Section pad="none" align="center" colorIndex="light-2">
        <Box
          size={{ width: 'xxlarge' }}
          pad={{ horizontal: 'large', vertical: 'medium' }}
        >
          <Paragraph size="large" margin="small">
            MagnusMedi is inclined towards delivering quality & affordable healthcare services to the patients across the globe. We at MagnusMedi go an extra mile to take care of the patients & deliver value for money.
          </Paragraph>
          <Paragraph size="large" margin="small">
            Within a short span of time, MagnusMedi has associated itself with the leading hospitals and doctors all over India, which gives more options to the patients. It has already set up its representative office in Nairobi, Kenya and soon is planning to get established in other parts of Africa, Asia, and the Middle East.
          </Paragraph>
        </Box>
        <Heading margin="small" strong>About Mihir</Heading>
        <Box
          align="center"
          direction="row"
          justify="center"
          size={{ width: 'xxlarge' }}
          pad={{ horizontal: 'large', vertical: 'medium', between: 'large' }}
          margin={{ bottom: 'large' }}
        >

          <Box basis="1/3">
            <Quote
              pad="medium"
              borderColorIndex="accent-1"
              credit="Mihir Vora, CEO Magnus Medi"
              size="full"
            >
              <Heading tag="h3">
                  <b>Patient Cure starts with trust and a understanding that its a Journey. I believe at Magnus Medi we get this better than anyone else and hence are better equipped to handle patient needs.</b>
              </Heading>
            </Quote>
          </Box>
          <Box basis="2/3">

            {/* <Paragraph size="large" margin="small">
                Sit architecto veritatis neque ex laboriosam, laboriosam?
                Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                ipsam hic labore cupiditate illo soluta error molestias corporis
                quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                tenetur incidunt consectetur dolore blanditiis.
            </Paragraph>
            <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
            </Paragraph> */}
            <Box pad={{ vertical: 'medium' }}>
              <Image
                full="horizontal"
                size="small"
                fit="contain"
                src="http://www.dentalexperts.co.in/images/mihir1.png"
                alt="smaple image"
              />
            </Box>
            <Paragraph size="large" margin="small">
            Mihir brings in years of experience in Tourism and Healthcare industry and is a proven Marketing Maverick in both the industries. Having worked in both the fields he understands the restriction that follows when it comes to affordable health care. So, with a mission to enrich people’s lives he embarked on this healing journey of providing affordable, secure, and premium healthcare services to individuals worldwide. 
            </Paragraph>
            <Paragraph size="large" margin="small">
            His passion for entrepreneurship combined with the purpose to provide medical solutions to people resulted in the beginning of “Magnus” which is transforming Medical Tourism Worldwide
            </Paragraph>
          </Box>
        </Box>
      </Section>
    </Box>
  </Box>
)


// import React from 'react'
// import universal from 'react-universal-component'

// const Failed = () => (
//   <div style={{ color: 'red' }}>
//     <h1>Failed to load the heavy component!</h1>
//   </div>
// )

// const Loading = () => (
//   <div style={{ color: 'yellow' }}>
//     <h1>Loading this heavy component...</h1>
//   </div>
// )

// const MyComponent = universal(import('../components/MyComponent'), {
//   loading: Loading,
//   error: Failed,
// })

// export const preloadMyComponent = () => MyComponent.preload()
// export default props => <MyComponent {...props} />
