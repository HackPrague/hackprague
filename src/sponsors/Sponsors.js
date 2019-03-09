import React, { Component } from 'react'
import styled from 'styled-components'

const SponsorsWrapper = styled.div`
  height: 5000;
  width: 1200px;

  margin: 80px auto;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100vw;
  }

  @media (max-width: 768px) {
    height: auto;
    margin: 40px auto;
  }
`

const TitleWrapperTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-top: 150px;
`

const SponsorSection = styled.div`
  margin: 40px 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  & a {
    background-repeat: no-repeat;
    background-size: contain;
  }

  & a.big {
    height: 300px;
    width: 612px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 20px;

    & a {
      width: 80vw;
      margin: 10px 0;
    }
  }
`

const Sponsor1 = styled.a`
  display: block;

  height: 129px;
  width: 500px;
  background-image: url('sponsors/IPRlogo.png');
  margin: 0 40px;
`
const Sponsor2 = styled.a`
  display: block;

  height: 129px;
  width: 416px;
  background-image: url('sponsors/OICTLogo.png');
  margin: 0 40px;
`

const Sponsor3 = styled.a`
  display: block;

  width: 510px;
  height: 113px;
  background-image: url('sponsors/keboola.svg');
  margin: 0 40px;
`

const Sponsor4 = styled.a`
  display: block;

  height: 129px;
  width: 463px;
  background-image: url('sponsors/reactive.png');
  margin: 0 40px;
`

const Sponsor5 = styled.a`
  display: block;

  background-image: url('sponsors/mlprague.png');
  margin: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 20px;

    &.big {
      width: 80vw !important;
      margin: 10px 0;
    }
  }
`

const Sponsor6 = styled.a`
  display: block;

  height: 135px;
  width: 450px;
  background-image: url('sponsors/socialbakers.png');
  margin: 0 40px;
`

const Sponsor7 = styled.a`
  display: block;

  height: 129px;
  width: 439px;
  background-image: url('sponsors/czechitas.png');
  margin: 0 40px;
`

const Sponsor9 = styled.a`
  display: block;

  height: 130px;
  width: 344px;
  background-image: url('sponsors/apify.png');
  margin: 0 40px;
`

const Sponsor8 = styled.a`
  display: block;

  height: 217px;
  width: 414px;
  background-image: url('sponsors/avrar.svg');
  margin: 0 40px;
`

const SponsorAbb = styled.a`
  display: block;

  height: 155px;
  width: 390px;
  background-image: url('sponsors/abb.svg');
  margin: 0 40px;
`

const SponsorFlatzone = styled.a`
  display: block;

  height: 70px;
  width: 455px;
  background-image: url('sponsors/flatzone.svg');
  margin: 0 40px;
`

const SponsorVeeam = styled.a`
  display: block;

  height: 65px;
  width: 445px;
  background-image: url('sponsors/veeam.svg');
  margin: 0 40px;
`

const SponsorMPO = styled.a`
  display: block;

  height: 225px;
  width: 415px;
  background-image: url('sponsors/mpo.svg');
  margin: 0 40px;
`

const SponsorSmartPlan = styled.a`
  display: block;

  height: 300px;
  width: 415px;
  background-image: url('sponsors/smartplan.svg');
  margin: 0 40px;
`

const SponsorEpam = styled.a`
  display: block;

  height: 170px;
  width: 415px;
  background-image: url('sponsors/epam.png');
  margin: 0 40px;
`

const SponsorIdc = styled.a`
  display: block;

  height: 130px;
  width: 439px;
  background-image: url('sponsors/idc.png');
  margin: 0 40px;
`

const SponsorMatfyz = styled.a`
  display: block;

  height: 200px;
  width: 460px;
  background-image: url('sponsors/matfyz.jpg');
  margin: 0 40px;
`

const SponsorFlowee = styled.a`
  display: block;

  height: 130px;
  width: 350px;
  background-image: url('sponsors/flowee.png');
  margin: 0 40px;
`

const SponsorO2 = styled.a`
  display: block;

  height: 130px;
  width: 190px;
  background-image: url('sponsors/o2.svg');
  margin: 0 40px;
`


export default class Sponsors extends Component {
  render() {
    return (
      <SponsorsWrapper>
        <TitleWrapperTop>
          <div className="title item">Under the auspices of</div>
        </TitleWrapperTop>

        <SponsorSection>
          <SponsorMPO href="https://www.mpo.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>


        <TitleWrapper>
          <div className="title item">Sponsors</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorAbb href="https://new.abb.com" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorEpam href="https://www.epam.com/" target="_blank" rel="noopener noreferrer" />
          <SponsorFlatzone href="https://www.flatzone.cz" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorVeeam href="https://www.veeam.com/" target="_blank" rel="noopener noreferrer" />
          <Sponsor3 href="https://keboola.com" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor6 href="https://www.socialbakers.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor9 href="https://www.apify.com/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <SponsorSmartPlan href="http://smart-plan.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Data Partners</div>
        </TitleWrapper>
        <SponsorSection>
          <SponsorO2 href=" https://www.o2.cz/osobni/en/" target="_blank" rel="noopener noreferrer" />
          <Sponsor2 href="https://operatorict.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>


        <TitleWrapper>
          <div className="title item">Academic Partners</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorMatfyz href="https://www.matfyz.cz/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Media Partners</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorFlowee href="https://www.flowee.cz/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

        <TitleWrapper>
          <div className="title item">Community Partners</div>
        </TitleWrapper>

        <SponsorSection>
          <SponsorIdc href="https://www.idc.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor8 href="https://avrar.cz/en" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor4 href="https://reactiveconf.com" target="_blank" rel="noopener noreferrer" />
          <Sponsor7 href="https://www.czechitas.cz/en/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>
        <SponsorSection>
          <Sponsor5 href="https://mlprague.com" target="_blank" rel="noopener noreferrer" className="big" />
        </SponsorSection>


        <TitleWrapper>
          <div className="title item">Venue Partner</div>
        </TitleWrapper>

        <SponsorSection>
          <Sponsor1 href="http://en.iprpraha.cz/" target="_blank" rel="noopener noreferrer" />
        </SponsorSection>

      </SponsorsWrapper>
    )
  }
}
