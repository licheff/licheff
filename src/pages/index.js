import React, { useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import InteractionPanel from '../components/InteractionPanel/InteractionPanel';
import Label from '../components/Label/Label';
import BodyText from '../components/BodyText/BodyText';
import Content from '../components/Content/Content';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import Logo from '../components/Logo/Logo';
import ContactLink from '../components/ContactLink/ContactLink';
import ProjectListing from '../components/ProjectListing/ProjectListing';

const IndexPage = () => {
  useEffect(() => {
    const screen = document.getElementById('interactionPanel');
    screen.scrollIntoView(true);
  }, []);

  return (
    <Layout>
      <SEO title='Hello' />
      <InteractionPanel>
        <Logo />
        <div style={{ marginTop: 'auto' }}>
          <Label size='2.2em'>Todor Lichev</Label>
          <Label size='1.5em' color='red'>
            Designer
          </Label>
          <BodyText>
            A young multidisciplinary artist with a solid background in User Experience/Interfaces,
            Branding &amp; WEB Design. The dynamics of progress and new challenges developed a keen
            interest in the field of brand perceptions. A self-driven hard worker and a passionate
            freethinker who is always looking forward to expand their worldview.
          </BodyText>
          <div className='resume-link'>
            <AniLink to='/resume/' cover direction='left' bg='var(--red)' duration={1}>
              View résumé
            </AniLink>
          </div>
          <ContactLink />
          <SocialLinks />
        </div>
      </InteractionPanel>
      <Content>
        <ProjectListing />
      </Content>
    </Layout>
  );
};

export default IndexPage;
