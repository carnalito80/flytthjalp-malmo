import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, offertknapp, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      offertknapp={offertknapp}
    />
<section className="section">
  <div className="container">
  
    <h2>Flyttfirma Malmö - professionell flytthjälp</h2>
    <p>Har du nyligen flyttat eller planerar att flytta? Det kan vara en tidskrävande och stressig process. Vi på Flyttfirma Malmö är här för att hjälpa dig med din flytt! Vi är ett lokalt flyttföretag som har stor erfarenhet av flytthjälp, och vi gör vårat yttersta för att få ditt hem och dina saker flyttade snabbt, säkert och smidigt.  
    </p>

    <p>Vi ger dig en professionell och grundlig flyttningstjänst som är anpassad efter dina specifika behov. Vi är experter på att hantera flyttar och kommer att se till att allt går smidigt och stressfritt. Vi tar hand om alla detaljer, från att packa och lasta din egendom till att transportera den och lossa den på den nya platsen.  
    </p>
    <p>Vi kan låna ut flyttkartonger upp till 4 veckor till våra kunder och även hjälpa till att packa ditt bohag. Vi strävar efter att ge dig den bästa upplevelsen genom att använda högkvalitativa produkter och tjänster som är säkra, pålitliga och miljövänliga. Alla våra flyttar är försäkrade, så du kan vara säker på att din flytt kommer att gå som planerat. Vi erbjuder också förmånliga priser och flexibla betalningsalternativ, så att du kan få det bästa värdet för pengarna. Så skulle du vilja ha en smidig, säker och billig flytthjälp? Kontakta oss redan idag och låt oss hjälpa dig att få ditt hem flyttat!
    </p>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--Grid">
    
        <Link to="/vara-tjanster/pianoflytt" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/piano_icon2.webp" alt="Pianoflytt Malmö" className="Content-Image"></img>
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">PIANOFLYTT</h3>
        
        <div className="PostCard--Excerpt"><em>Vi utför många olika typer att flyttjänster, tex pianoflytt. Läs mer här</em></div>
      </div>
      </Link>
      <Link to="/vara-tjanster/bohagsflytt" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/bohagsflytt_icon2.webp" alt="Bohagsflytt Malmö" className="Content-Image"></img>
        
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">BOHAGSFLYTT</h3>
        
        <div className="PostCard--Excerpt"><em>I behov av bohagsflytt i Malmö? Här får du mer info.</em></div>
      </div>
      </Link>
      <Link to="/villkor-stad/" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
          <img  src="/images/stadteam2_icon.webp" alt="Flyttstäd" className="Content-Image"></img>
          </div>
          
            <div className="PostCard--Content">
            <h3 className="PostCard--Title">FLYTTSTÄDNING</h3>
            
            <div className="PostCard--Excerpt"><em>Vi utför även flyttstädningar. Klicka här för mer information.</em></div>
            </div>
          </Link>
      </div>
    </div>

  </div>
    
</section>
<section className="section">
  <div className="container">
  
    <h2>Därför ska du anlita oss på Flyttfirma Malmö</h2>
    <p>Varje uppdrag prissätts efter omfattning. Först när ni skickat in en offertförfrågan kan vi börja titta på hur priset kommer att sättas och hur stort och tidskrävande projektet är. Vi kan ge er förslag och bolla ideér tillsammans. Läs mer om faktorer som påverkar priset här; <a href="/priser">flytthjälp malmö priser</a>.</p>
    <h3>Vad kostar det att anlita Flyttfirma Malmö?</h3>
    <p>Varje uppdrag prissätts efter omfattning. Först när ni skickat in en offertförfrågan kan vi börja titta på hur priset kommer att sättas och hur stort och tidskrävande projektet är. Vi kan ge er förslag och bolla ideér tillsammans. Läs mer om faktorer som påverkar priset här; flytthjälp malmö priser.  </p>
    <p>Vi har F-skattsedel och det går även bra att nyttja ROT-avdraget när du anlitar oss som flytthjälp i Malmö. Med detta avdrag innebär det att kostnaden blir mindre. ROT-avdraget ger tillbaka 30 % på arbetskostnaderna, upp till 50 000 kr per person och år. Detta avdrag ges tillbaka i form av skattereduktion. Lär mer om ROT-avdrag hos <a href="https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/gerarbetetratttillrotavdrag.4.5c1163881590be297b5173bf.html">Skatteverket</a></p>
    <p>Med våra erfarna flyttare får du proffsig flytthjälp. Kontakta oss för <a href="/offert">gratis offert</a> idag!</p>
  </div>
</section>
    {/* <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section> */}
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        offertknapp
      }
    }
  }
`
