import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Card from 'grommet/components/Card';
import Chart, { Area, Axis, Base, Layers } from 'grommet/components/chart/Chart';
import Footer from 'grommet/components/Footer';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Quote from 'grommet/components/Quote';
import Section from 'grommet/components/Section';
import SocialShare from 'grommet/components/SocialShare';
import Video from 'grommet/components/Video';
import CirclePlayIcon from 'grommet/components/icons/base/CirclePlay';


export default class DetailsPage extends Component {
  render () {
    return (
      <Box>
        <Hero size="large" backgroundImage="/img/section-2.jpg" colorIndex="grey-1"
          justify="center">
          <Card
            textAlign="center"
            heading={
              <Heading strong={true}>
                Lorem ipsum dolor sit amet consectetur elit.
              </Heading>
            }
            description="Pellentesque porta ut augue ac ultricies. Sed vehicula metus a 
              vulputate egestas." 
            label="Challenge" 
            size="large" />
        </Hero>
        <Section pad="none" align="center" colorIndex="light-2">
          <Box
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium'}}
          >
            <Heading margin="small" strong>Lorem ipsum dolor</Heading>
            <Paragraph size="large" margin="small">
              Lorem dolores incidunt similique aliquid rerum reiciendis est!
              Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
              aut consequatur consequuntur sequi delectus quam qui. Illo odio
              dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit.
            </Paragraph>
            <Paragraph size="large" margin="small">
              Laboriosam, laborum ratione, dicta nihil culpa.  Dolor eveniet
              possimus possimus aut praesentium dignissimos sit debitis.
              Fugit minima totam provident optio aliquam! Magni tenetur
              doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
              debitis sed mollitia laudantium sit?
            </Paragraph>
          </Box>
          <Box
            align="center"
            direction="row"
            justify="center"
            size={{width: 'xxlarge'}}
            pad={{horizontal: 'large', vertical: 'medium', between: 'large'}}
            margin={{bottom: 'large'}}
          >
            <Box basis="1/3">
              <Quote
                pad="medium"
                borderColorIndex="accent-1"
                credit="Cullen Basg, Director at HPE"
                size="full"
              >
                <Paragraph size="xlarge">
                  Quisque eleifned tempor arcu, quis fringilla sem. Pellentesque
                  sed lacus ligula. Eleifend tempor arcu, quis fringilla sem.
                  Pellentesque.
                </Paragraph>
              </Quote>
            </Box>
            <Box basis="2/3">
              <Paragraph size="large" margin="small">
                Lorem dolores incidunt similique aliquid rerum reiciendis est!
                Placeat minima voluptas quis tenetur deleniti harum. Nesciunt
                aut consequatur consequuntur sequi delectus quam qui. Illo odio
                dolorem sunt cupiditate nihil, ad veniam quibusdam suscipit unde
                laboriosam, laborum ratione, dicta nihil culpa.
                Dolor eveniet possimus possimus aut praesentium dignissimos sit
                debitis. Fugit minima totam provident optio aliquam! Magni tenetur
                doloremque rem tempore amet voluptatibus ipsum. Eos aliquid
                debitis sed mollitia laudantium sit?
              </Paragraph>
              <Paragraph size="large" margin="small">
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
              </Paragraph>
              <Box pad={{vertical: 'medium'}}>
                <Image
                  full="horizontal"
                  src="/img/marquee.jpg"
                  alt="smaple image"
                />
              </Box>
              <Paragraph size="large" margin="small">
                Dolor amet voluptate nisi molestias praesentium. Eveniet
                consectetur aliquid earum reprehenderit nam dicta tempora!
                Maiores nostrum eius quo odit et facere quaerat maxime beatae
                minus nihil expedita non facere ipsa cupiditate minus velit
                beatae. Assumenda nemo quis ad maxime modi.
              </Paragraph>
            </Box>
          </Box>
        </Section>
        <Footer>
          <Section
            align="center"
            pad="large"
            colorIndex="neutral-1"
            full="horizontal"
          >
            <Box
              align="center"
              direction="row"
              size={{width: 'xxlarge'}}
            >
              <Box basis="1/2" pad={{horizontal: 'large'}}>
                <Label uppercase>Share the article</Label>
                <Box direction="row" responsive={false} pad={{between: 'medium'}}>
                  <FormField>
                    <input
                      type="text"
                      value="http://www.magnusmedi.com/link-toblog"
                      readOnly
                    />
                  </FormField>
                  <Button label="COPY" onClick={() => console.log('hello')} />
                </Box>
                <Box direction="row" margin={{top: 'medium'}} responsive={false}>
                  <SocialShare type="email" link="http://www.grommet.io/docs/" />
                  <SocialShare type="twitter" link="http://www.grommet.io/docs/" />
                  <SocialShare type="facebook" link="http://www.grommet.io/docs/" />
                  <SocialShare type="linkedin" link="http://www.grommet.io/docs/" />
                </Box>
              </Box>
              <Card
                contentPad="large"
                heading="Pellentesque porta ut augue ac ultricies."
                label="Next Article"
                link={<Anchor href="http://www.grommet.io/docs/" primary={true}>
                  Learn More</Anchor>}
                separator="left"
              />
            </Box>
          </Section>
        </Footer>
      </Box>
    );
  }
};