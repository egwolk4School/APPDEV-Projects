import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"
export default function App(){
  return(
    <>
    <Header/>
    <Body />
    <Body name="Erin" food="pizza" isHealthy={false} age={21}/>
    <Body name="Stephen" food="bibimbap" isHealthy={true} age={21}/>
    <Body name="Gerald" food="Torta" isHealthy={true} age={2200000000}/>
    <Body name="Szen" food="Mango" isHealthy={true} age={19}/>
    <Body name="William" food="tide" isHealthy={true} age={19}/>
    <Footer />
    </>
  )
}