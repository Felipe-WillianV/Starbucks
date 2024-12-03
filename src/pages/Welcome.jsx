import { Link } from 'react-router-dom'

import './Welcome.css'
import WhatsNew from './WhatsNew'
import Frapuccino from '../Efeito/Frapuccino'

function Welcome() {
    return (
            <section className="section">
                <div className="circle"></div>
                <div className="content">
                    <div className="text">
                        <h2 className="h2">It's not just a Cofee...<br/>It's <span>Starbucks!</span></h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint saepe nam consequatur aliquid! Quis non molestias architecto, inventore odit aut laudantium pariatur veritatis culpa aspernatur saepe, harum quidem obcaecati incidunt.</p>
                        <Link className="a" to="/whatsnew">Learn More</Link>
                    </div>
                    <div className="imgBox">
                        <Frapuccino className="imgF" />
                    </div>
                </div>
            </section>
    )
}

export default Welcome