import React from 'react'
import './Footer.css'
import { Smartphone, Mail, Info, Disc } from 'react-feather'

export default () => (
  <div>
   
    <footer className="footer">
    <section className="Contact--Section1">
      <div className="container Contact--Section1--Container">
      <div className="Contact--Details">
      
         <a className="Contact--Details--Item" href="/vilkor-flytt/">
                <Disc />Vilkor för flytthjälp
              </a>
        <a className="Contact--Details--Item" href="/vilkor-stad/">
          <Disc />Vilkor för flyttstäd
        </a>
        <a className="Contact--Details--Item" href="/priser/">
          <Disc />Våra Priser
        </a>
        <a className="Contact--Details--Item" href="/vara-tjanster/">
          <Disc />Våra tjänster
        </a>
      </div>
              <div className="Contact--Details">
              <a className="Contact--Details--Item" href="/flyttguiden/">
          <Disc />Flyttguiden
        </a>
          
              <a className="Contact--Details--Item" href="tel:073 637 99 08">
                <Smartphone /> 073-637 99 08
              </a>
          
         
              <a className="Contact--Details--Item" href="mailto:info@xn--flyttfirman-malm-1wb.se">
                <Mail /> info@flyttfirman-malmö.se
              </a>
              <a className="Contact--Details--Item" href="#">
                <Info /> Org nr 559241-9229
              </a>
          
          </div>
       

        </div>
        </section>
    </footer>
  </div>
)
